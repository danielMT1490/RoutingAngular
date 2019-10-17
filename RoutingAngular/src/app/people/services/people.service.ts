import { Injectable } from '@angular/core';
import { of , Observable} from 'rxjs';
import { HttpHeaders , HttpClient} from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {

   //definimos la url que consumiremos
   private peopleUrl: string = 'api/people';
 
   constructor
   (
     private http: HttpClient
   ) { }

  //usamos any cuando no sabemos el tipo
  getPersonById(id: number): Observable<any>
  {
    const url = `${this.peopleUrl}/${id}`;
    return this.http
      .get<any>(url)
      .pipe
      (
        tap(console.log)
      );
  }

  getPeople(): Observable<any>
  {
    return this.http
      .get<any>(this.peopleUrl)
      .pipe
      (
        tap(console.log)
      );
  }
}
