import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactoIf } from '../../models/contacto.model';


@Component({
  selector: 'cas-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @Input() contacto: ContactoIf
  @Output() eventoBorrar: EventEmitter<string>

    fullname: string;
  constructor() { 
    this.eventoBorrar = new EventEmitter()
  } 

  ngOnInit() {
    this.fullname = `${this.contacto.name.title}. ${this.contacto.name.first} ${this.contacto.name.last}`
  }


  sendBorrar() {
    this.eventoBorrar.emit(this.contacto.email)
  }
}
