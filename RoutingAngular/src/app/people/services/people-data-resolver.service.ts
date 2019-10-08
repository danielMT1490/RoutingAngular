import { Injectable } from '@angular/core';
//importamos la libreria resolve
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { PeopleService } from './people.service';

//no ponemos provideIn por que lo inyectamos manualmente en el modulo
@Injectable()

export class PeopleDataResolverService implements Resolve<any> {

  constructor(private peopleService: PeopleService) { }
  
  //implementamos la interfaz como ya tenemos por parametro la ruta podemos suscribirnos al parametro
  //ActivatedRouteSnapshot es un foto de la routa de ese momento
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log(route.params.personId);
    //en este caso params de la ruta no es un observable
    return this.peopleService.getPersonById(+route.params.personId)
  }
}
