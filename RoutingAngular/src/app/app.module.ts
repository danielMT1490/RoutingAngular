import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
//importamos el modulo de rutas
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomRoutePreloader } from './custom-route-preloader';
import { AuthGuard } from './auth.guard';
//modulo con su propio modulo de rutas
//import { PeopleModule } from './people/people.module';

//incluimos http en el servicio de people
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HttpClientModule } from "@angular/common/http";


//Registramos todas las rutas , es importante er orden ya que defiene la prioridad
const routes: Routes = 
[
  //pathMatch: 'full' especifica para que coloque la ruta que hemos definido en el redirect
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'notFound', component:NotFoundComponent},
  //easy load , se utiliza estas expresiones para que no carge los modulos hasta que no se llama
  //mejoramos la performace ya que no tiene que cargar el modulo de primeras
  //podemos customizar el preloader con el data de las rutas en nuestro caso no queremos precargar people
  { 
    path:'people', 
    //podemos decidir que que se carguen los modulos dependiendo de si estamos logeados
    canLoad: [AuthGuard],
    loadChildren: 
      () => import('./people/people.module')
      .then(m => m.PeopleModule)
  },
  { 
    path:'contacts',
    //si estamos loggueados nos dejara crear la ruta
    canActivate: [ AuthGuard ], 
    data: 
    {
      preload: true 
    },
    loadChildren: 
      () => import('./contacts/contacts.module')
      .then(m => m.ContactsModule),
  },
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
    //lo hemos comentado por que lo hemos regitrado en la rut apara que no cargue el main.js
    //PeopleModule,

    //incluimos el modulo de http y el mock de la api , lo integramos en este modulo por que es
    //quien sirve los datos
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),

    //si existen modulos de rutas hijos el ForRoot debe ser el ultimo
    //PreloadAllMOdules va cargando todos los modulos que se han registrado
    //En nuestro caso utilizamos nuestro preload custom que filtra por el data
    RouterModule.forRoot(routes, { preloadingStrategy: CustomRoutePreloader })
  ],
  //necesitamos añadir el servicio de custompreloader
  providers: [CustomRoutePreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
