import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PeopleListComponent } from './people-list/people-list.component';

//registramos las rutas de los componentes del modulo 
const routes : Routes = [
    {path:'people/person-details', component: PersonDetailsComponent},
    {path:'people/list', component: PeopleListComponent}
];

//el metodo forChild define la gestion de rutas de un modulo hijo
@NgModule({
    imports: [RouterModule.forChild(routes)],
    //para que el modulo de rutas sea visible hay que exportarlo
    exports: [RouterModule]
})

export class PeopleRuotingModule{}