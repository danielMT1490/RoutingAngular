import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonDetailsComponent } from './person-details/person-details.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleDataResolverService } from './services/people-data-resolver.service';

//registramos las rutas de los componentes del modulo 
const routes : Routes = [
    { path:'people/person-details', component: PersonDetailsComponent},
    //{path:'people/:personId', component: PersonDetailsComponent},
    //declaramos una hija ruta para que el componenete list no se destruya
    //dejamos path empty por que hemos echo una easy load en el app-module
    {   path:'', 
        component: PeopleListComponent, 
        children:[
            { 
                path:':personId', 
                component: PersonDetailsComponent,
                //definimos que nos resuelva el parametro para el componente
                resolve: 
                { 
                    person : PeopleDataResolverService,
                    logperson : PeopleDataResolverService
                },
                //data es para añadir datos directamente , por ejemplo configuracion, son datos estáticos
                data : 
                { 
                    showDetails : true 
                }
            }
        ]
    }
];

//el metodo forChild define la gestion de rutas de un modulo hijo
@NgModule({
    imports: [RouterModule.forChild(routes)],
    //para que el modulo de rutas sea visible hay que exportarlo
    exports: [RouterModule]
})

export class PeopleRuotingModule{}