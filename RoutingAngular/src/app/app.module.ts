import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
//importamos el modulo de rutas
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
//llamamos a un componente que se encuentra en otro modulo y al modulo e siS
import { PersonDetailsComponent } from './people/person-details/person-details.component';
import { PeopleModule } from './people/people.module';

//Registramos todas las rutas , es importante er orden ya que defiene la prioridad
const routes: Routes = 
[
  //pathMatch: 'full' especifica para que coloque la ruta que hemos definido en el redirect
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'notFound', component:NotFoundComponent},
  {path:'people/person-details', component: PersonDetailsComponent},
  //cualquier parametro redirecionamos al raiz o donde nosotros queramos especificando en el redirect
  {path:'**', redirectTo: '/notFound', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    //importamos el module People para que el routlinck del componente pueda llamarlo
    PeopleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
