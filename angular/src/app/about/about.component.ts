import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  empresa: string
  cliente: object;

  constructor() { }

  ngOnInit() {
    this.empresa = 'Mediamarkt'
    this.cliente = {nombre: 'Sermicro'}
  }

}