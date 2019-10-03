import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
//importamos el modulo de rutas
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
//modulo con su propio modulo de rutas
import { PeopleModule } from './people/people.module';

//Registramos todas las rutas , es importante er orden ya que defiene la prioridad
const routes: Routes = 
[
  //pathMatch: 'full' especifica para que coloque la ruta que hemos definido en el redirect
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'notFound', component:NotFoundComponent},
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
    //importamos el module People para que el routlinck del componente pueda llamarlo , 
    // este modulo tiene su propio modulo de rutas
    PeopleModule,
    //si existen modulos de rutas hijos el ForRoot debe ser el ultimo
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
