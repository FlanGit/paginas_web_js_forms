import { Component, OnInit } from '@angular/core';
import { TareaModel, TareaIf } from '../../models/tarea.model';

@Component({
  selector: 'cas-tareas-plus',
  templateUrl: './tareas-plus.component.html',
  styleUrls: ['./tareas-plus.component.css']
})
export class TareasPlusComponent implements OnInit {

  titulo: string
  rutaGoogle: string
  //newTarea: TareaModel 
  newTarea: TareaIf // POJO
  aTareas: Array<TareaIf>

  constructor() {  
  }

  ngOnInit() {
    this.titulo = 'Lista plus'
    this.rutaGoogle = 'https://www.google.es'
    // this.newTarea = new TareaModel('', false )
    this.newTarea = {nombre: '', isCompleted: false}
    this.aTareas = []
  }
  
  addTarea () {
    if(!this.newTarea.nombre) {return}
    // let tareaClon = JSON.parse( JSON.stringify(this.newTarea)) 
    let tareaClon = Object.assign({}, this.newTarea)
    this.aTareas.push(tareaClon)
    console.log(this.aTareas)
    this.newTarea.nombre = ''
  }

  borrarTarea(i) {
    this.aTareas.splice(i,1)
  }

  
}
