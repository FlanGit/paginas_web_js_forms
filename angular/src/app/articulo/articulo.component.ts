import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cas-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArticuloComponent implements OnInit {
  @Input() autor: string
  @Input() titulo: string

  constructor() { }

  ngOnInit() {
  }

}
