import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  empresa: string
  lugar: string

  constructor() { 
  }

  ngOnInit() {
    this.empresa = "CAS"
    this.lugar = "Getafe"
  }
}
