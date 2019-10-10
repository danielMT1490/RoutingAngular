//importamos las librerias necesarias
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

//implementamos la interface PreloadingStrategy
export class CustomRoutePreloader implements PreloadingStrategy{
    
    //pasamos por parémtro la ruta y una funcion 
    //comporbamos que la ruta exista y que el data preload este activo para cargarlo
    preload(route: Route, fn: () => Observable<any>): Observable<any> 
    {
        if(route.data && route.data.preload === true)
            return fn();
        else
            return of(null);  
    }
}
