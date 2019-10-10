//generamos nuestro guard para gestinar el acceso a las rutas
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate , CanLoad{
  
  //inyectamos nuestro servicio de loggin
  constructor(private authService: AuthService) {}

  //podemos decidir que modulos carga cuando estamos loggeados ono
  canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean>
  {
    return this.authService.isLoggedIn();
  }
  

  //este metodo devuelve el resultado del servicio de loggin
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {
    return this.authService.isLoggedIn();
  }
  
}
