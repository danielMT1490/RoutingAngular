import { Injectable } from '@angular/core';
import { of , Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  people = [
    {
      id: 1,
      name: 'Pepe'
    },
    {
      id:2,
      name:'Carlos'
    }
  ];

  //usamos any cuando no sabemos el tipo
  getPersonById(id: number) {
    return of(this.people.find(x => x.id == id));
  }
}
