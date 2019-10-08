import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { ActivatedRoute, Router } from '@angular/router';
//nos permite anidar observables
import { switchMap, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
//importamos la clase Location de la libreria angular common
import { Location } from '@angular/common';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
})

export class PersonDetailsComponent implements OnInit , OnDestroy{

  person;
  showDetails;

  //utilizamos la clase Subject
  onDestroy = new Subject();

  constructor
  (
    private peopleService: PeopleService,
    private activaroute: ActivatedRoute,
    //Inyectamos Ruoter para redireccionar en routas dentro del componente
    private router: Router,
    public location: Location
  ) { }

  ngOnInit() {
    //como en el modulo de ruta obtenemos lo datos con el resolve
    //dentro de la ruta activa tenemos los datos guardados
    this.activaroute.data
      .pipe(takeUntil(this.onDestroy))
      .subscribe(routeData => 
        {
          console.log(routeData);
          //comprobamos que la person exista
          if(routeData.person){
            this.person = routeData.person;
          }
          else{
            //si no existe redirigimos a la pagina de no encontrado
            this.router.navigateByUrl('/notFound');
          }
          this.showDetails = routeData.showDetails;
        }
      );
  }

  getPersonWithService(){
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
