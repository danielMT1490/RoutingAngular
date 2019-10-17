import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit, OnDestroy {

  people;
  constructor
  (
    public peopleServices: PeopleService,
    public activeRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.peopleServices.getPeople()
    .subscribe(people => 
      { 
        this.people = people 
      }
    );
  }
  //los componentes se destruyen cuando es llamado un comopente de su mismo nivel 
  ngOnDestroy(): void {
    console.log('person list destroy');
  }

}
