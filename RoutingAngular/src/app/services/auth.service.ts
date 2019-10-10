//tendremos un servicio que nos dira si estamos loggeados o no
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  //indicamos que de primeras no estamos loggeados
  private isLogged: boolean = false;

  constructor(private router :Router) {}

  isLoggedIn():boolean{
    return this.isLogged
  }

  logIn(){
    this.isLogged = true;
  }

  logOut(){
    this.isLogged = false;
    //cuando nos deslogamos volvemos al home
    this.router.navigateByUrl('/');
  }
}
