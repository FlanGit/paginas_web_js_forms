import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'cas-saludo-local',
  templateUrl: './saludo-local.component.html',
  styleUrls: ['./saludo-local.component.css']
}) 
export class SaludoLocalComponent implements OnInit {
  
  @ViewChild('localNombre') nodoLocalNombre: ElementRef
  
  constructor() {
    
   }

  ngOnInit() {
    //this.nodoLocalNombre.nativeElement.value = 'Pepe'
    console.log(this.nodoLocalNombre)
  }

}
