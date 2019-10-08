import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleRuotingModule } from './people-routing.module';
import { PeopleDataResolverService } from './services/people-data-resolver.service';





@NgModule({
  declarations: [PersonDetailsComponent, PeopleListComponent],
  imports: [
    CommonModule,
    //importamos nuestro modulo de rutas
    PeopleRuotingModule
  ],
  //definimo este servicio para este modulo
  providers: [PeopleDataResolverService]
})
export class PeopleModule { }
