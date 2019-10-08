import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { ActivatedRoute } from '@angular/router';
//nos permite anidar observables
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PersonDetailsComponent implements OnInit {

  person;
  constructor
  (
    private peopleService: PeopleService,
    private activaroute: ActivatedRoute
  ) { }

  ngOnInit() {

    //anidamos el observable de la ruta con el del servicio con los operadores pipe y switchMap
    this.activaroute.params
      .pipe(//el + castea un string en number
        switchMap(params => this.peopleService.getPersonById(+params.personId))
      )
      .subscribe(person => 
      {
        console.log(person);
        this.person = person;
      });
      //Pasando el console log a un observable los mostramos
      this.activaroute.queryParams.subscribe(console.log);
  }



}
