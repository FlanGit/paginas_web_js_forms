import { FetchService } from "../servicios/fetch-service.js";
import {  MENSAJES } from "../config.js"
import { Tarea } from "./tarea.component.js";

export class ListaTareas {
    constructor() {
        this.uRL = 'http://localhost:3000/tareas'
        this.aTareas = []
        this.nodoListaTareas = document.querySelector('#lista')

        this.nodoBtnAdd = document.querySelector('#btnAdd')
        this.nodoNewTarea = document.querySelector('#inTarea')
        this.nodoBtnBorrarSelect = document.querySelector('#btn-borrar-select')
        this.nodoBtnAdd.addEventListener('click', this.addTarea.bind(this))
        this.nodoBtnBorrarSelect.addEventListener('click', this.borrarSelect.bind(this))

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

    addTarea() {
        if (!this.nodoNewTarea.value) {return}
        let newTarea = {
            name: this.nodoNewTarea.value,
            isComplete: false
        }
        this.nodoNewTarea.value = ''
        let headers = new Headers()
        headers.append("Content-Type", "application/json");
        this.fetchService.send(this.uRL, {
            method: 'POST', 
            headers : headers,
            body: JSON.stringify(newTarea)
        }).then(
            response => {
                // console.log(response)

                this.getTareas()
            },
            error => console.log(error)
        )
    }

    borrarSelect() {
        let aSeleccionados = this.aTareas.filter(
            (item) => { return item.isComplete}
        )
        // Si no controlamos el disabled del boton
        // if(!aSeleccionados.length) {return}
        if (!window.confirm( MENSAJES.listaTareas.confirmacion)) {return}

        aSeleccionados.forEach(
            (item, i, array) => {
                let isUltima = (i+1 === array.length) ? true : false
                this.borrarTarea( {id: item.id, isUltima: isUltima} )
            }
        ) 
    }

}