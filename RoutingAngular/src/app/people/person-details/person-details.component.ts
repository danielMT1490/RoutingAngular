import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { ActivatedRoute } from '@angular/router';
//nos permite anidar observables
import { switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
})

export class PersonDetailsComponent implements OnInit , OnDestroy{

  person;
  //utilizamos la clase Subject
  onDestroy = new Subject();
  constructor
  (
    private peopleService: PeopleService,
    private activaroute: ActivatedRoute
  ) { }

  ngOnInit() {
    //anidamos el observable de la ruta con el del servicio con los operadores pipe y switchMap
    this.activaroute.params
      .pipe(//el + castea un string en number
        takeUntil(this.onDestroy), //espera el evento this.onDestroy.next()
        switchMap(params => this.peopleService.getPersonById(+params.personId))
      )
      .subscribe(personFinded => 
      {
        console.log(personFinded);
        this.person = personFinded;
      });
      //Pasando el console log a un observable los mostramos
      //Ejemplo route/routes asin
      this.activaroute.queryParams.subscribe(console.log);
  }

  ngOnDestroy(){
    console.log('person Destail destroy');
    //emite un evento para decir que se va a destruir
    this.onDestroy.next();
    //destruimos el componente
    this.onDestroy.complete();
  }


}
