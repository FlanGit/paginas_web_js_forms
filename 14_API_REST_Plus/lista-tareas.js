import { FetchService } from "./fetch-service.js";
import {  MENSAJES } from "./mensajes.js"
import { Tarea } from "./tarea.js";

export class ListaTareas {
    constructor() {
        this.uRL = 'http://localhost:3000/tareas'
        this.aTareas = []
        this.nodoListaTareas = document.querySelector('#lista')
        this.fetchService = new FetchService()
        document.addEventListener('borrarTarea', this.borrarTarea.bind(this))
        document.addEventListener('ckeckCompleta', this.checkTarea.bind(this))
        this.getTareas()
    }

    getTareas() {
        this.fetchService.send(this.uRL, {method: 'GET' })
            .then( data => {
                this.aTareas = data
                console.log("Ejecutando getTareas")   
                this.renderLista()
            },
            error => {console.dir(error)}
            )
    }
    
    renderLista() {
        this.nodoListaTareas.innerHTML = ''
        this.aTareas.forEach( 
            item => {
             this.nodoListaTareas.appendChild(new Tarea(item).getTarea())   
             //this.nodoListaTareas.appendChild(new Tarea(item).nodoTarea )   
            }
        )
    }

    checkTarea(oEv) {
        console.log('TODO check tarea')
        console.dir(oEv)
        // console.log(oEv.target.dataset.id)
        // console.log(oEv.target.checked)
        let datos = {
            isComplete : oEv.target.children[0].checked
        }
        let url = this.uRL + '/' + oEv.target.children[0].dataset.id
        let headers = new Headers()
        headers.append("Content-Type", "application/json");
        // console.dir(headers)
        this.fetchService.send(url, {
                method: 'PATCH', 
                headers : headers,
                body: JSON.stringify(datos)
            }).then( // () => this.getTareas()
                    response => {
                    console.log(response)
                    this.getTareas()
                },
                error => console.log(error)
            )
    }

    borrarTarea(p) {
        let  id
        if (p.target) {
            id = p.target.children[2].dataset.id
            if (!window.confirm( MENSAJES.listaTareas.confirmacion)) {return}
        }
        else { 
            id =  p.id
        }
        console.log(id)
        // TODO Borar en Servicio Web
        let url = this.uRL + '/' + id
        this.fetchService.send(url, {method: 'DELETE' })
            .then(
                data => { 
                    console.log(data)
                    if (p.target || p.isUltima) {
                        this.getTareas() 
                    }
                },
                error => console.log(error)
            )
    }
}