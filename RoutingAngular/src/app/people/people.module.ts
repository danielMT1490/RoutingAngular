import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleRuotingModule } from './people-routing.module';





@NgModule({
  declarations: [PersonDetailsComponent, PeopleListComponent],
  imports: [
    CommonModule,
    //importamos nuestro modulo de rutas
    PeopleRuotingModule
  ]
})
export class PeopleModule { }
