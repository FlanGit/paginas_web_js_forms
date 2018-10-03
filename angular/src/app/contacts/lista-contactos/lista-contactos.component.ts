import { Component, OnInit } from '@angular/core';
import { ContactoIf } from '../../models/contacto.model';
import { USERS } from '../../datos/contactos.mock';

@Component({
  selector: 'cas-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  aContactos: Array<ContactoIf>
  constructor() { }

  ngOnInit() {
    this.aContactos = USERS
  }

  borrarContacto(badEmail){ 

     this.aContactos = this.aContactos.filter(
       (item)=> item.email != badEmail)
  }

}
