import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ContactListComponent } from './contact-list/contact-list.component';


//registramos las rutas de los componentes del modulo 
const routes : Routes = 
[
    { 
        path:'', 
        component: ContactListComponent
    }
];

//el metodo forChild define la gestion de rutas de un modulo hijo
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ContactsRuotingModule{}