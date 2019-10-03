import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PeopleListComponent } from './people-list/people-list.component';




@NgModule({
  declarations: [PersonDetailsComponent, PeopleListComponent],
  imports: [
    CommonModule
  ]
})
export class PeopleModule { }
