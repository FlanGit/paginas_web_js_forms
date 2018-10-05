import { Component, OnInit } from '@angular/core';
import { ContactoIf } from '../../models/contacto.model';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'cas-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {

  aContactos: Array<ContactoIf>
  constructor(public usuarios: UsuariosService) { }

  ngOnInit() {
    this.aContactos = []
    /* this.usuarios.getLista().then(
      (response:any )=> {this.aContactos = response}
    )} */
    this.usuarios.getListaAA().then(
      (response:any)=> {this.aContactos = response}
    )}


  borrarContacto(badEmail) {
    
  this.aContactos = this.aContactos.filter(
      (item) => item.email != badEmail )
  }

}
