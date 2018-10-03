import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { ListaContactosComponent } from './lista-contactos/lista-contactos.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  imports: [
    CommonModule,
    ContactsRoutingModule
  ],
  declarations: [
    ContactsComponent,
    ListaContactosComponent,
    ContactoComponent
  ],
  entryComponents: [
    ContactsComponent
  ]
})
export class ContactsModule { }
