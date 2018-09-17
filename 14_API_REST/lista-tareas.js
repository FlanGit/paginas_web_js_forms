import { FetchService } from "./fetch-service.js";
import { Tarea } from "./tarea.js";

export class ListaTareas {
    constructor() {
        this.uRL = 'http://localhost:3000/tareas'
        this.aTareas = []
        this.nodoListaTareas = document.querySelector('#lista')
        this.getTareas()
    }

    getTareas() {
        new FetchService({url:this.uRL, method: 'GET' })
            .get()
            .then( data => {
                this.aTareas = data
                this.renderLista()
            })
    }
    
    renderLista() {
        let html = ''
        this.aTareas.forEach( 
            item => html += new Tarea(item).renderTarea()
        )
        this.nodoListaTareas.innerHTML = html
    }
}