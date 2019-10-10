import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsRuotingModule } from './contacts-routing.module';

@NgModule({
  declarations: [ContactListComponent],
  imports: [
    CommonModule,
    ContactsRuotingModule
  ]
})

export class ContactsModule { }
