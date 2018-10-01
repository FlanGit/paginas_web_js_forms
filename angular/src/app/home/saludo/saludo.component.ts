import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  nombre: string
  nombre1: string 

  constructor() {
   }

  ngOnInit() {
    this.nombre = 'Pepe'
    this.nombre1 = "Juan"
  }

  btnBorrar() {
    this.nombre = ''
    this.nombre1 = ''
  }
}
