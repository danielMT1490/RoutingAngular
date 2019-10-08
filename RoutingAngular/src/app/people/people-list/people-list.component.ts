import { Component, OnInit, OnDestroy } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit, OnDestroy {

  constructor(public peopleServices: PeopleService) { }

  ngOnInit() {
  }
  //los componentes se destruyen cuando es llamado un comopente de su mismo nivel 
  ngOnDestroy(): void {
    console.log('person list destroy');
  }

}
