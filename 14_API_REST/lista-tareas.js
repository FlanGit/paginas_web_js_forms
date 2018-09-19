import { FetchService } from "./fetch-service.js";
import {  MENSAJES } from "./mensajes.js"

export class ListaTareas {
    constructor() {
        this.nodoListaTareas = document.querySelector('#lista')
        this.nodoBtnAdd = document.querySelector('#btnAdd')
        this.nodoNewTarea = document.querySelector('#inTarea')
        this.nodoBtnAdd.addEventListener('click', this.addTarea.bind(this))
 
        this.nodoBtnDlt = document.querySelector('#btnDltSlt')
        this.nodoBtnDlt.addEventListener('click', this.dltTareas.bind(this))

        this.nodoBtnSearch = document.querySelector('#btnSearch')
        this.nodoNewbusqueda = document.querySelector('#inBuscar')
        this.nodoBtnSearch.addEventListener('click', this.getSearch.bind(this))

        this.uRL = 'http://localhost:3000/tareas'
        this.aTareas = []
        this.fetchService = new FetchService()
       
        this.getTareas()
    }

    getTareas() {
        this.fetchService.send(this.uRL, {method: 'GET' })
            .then( data => {
                this.aTareas = data
                console.dir(this.aTareas)
                this.renderLista()
            },
            error => {console.dir(error)}
            )
    }

    getSearch() {
        this.fetchService.send(this.uRL, {method: 'GET' })
            .then( data => {
                this.aTareas = data
                console.dir(this.aTareas)
                 this.aTareas = this.aTareas.filter(
                    (item) => {
                        console.log(item.name.indexOf(inBuscar.value)) 
                        if (item.name.indexOf(inBuscar.value) >= 0 ) { return true} 
                        else { return false }
                    }
                ) 
                console.dir(this.aTareas)

                this.renderLista()
            },
            error => {console.dir(error)}
            )
    }
    
    renderLista() {
        this.nodoListaTareas.innerHTML = ''
        let html = ''
        this.aTareas.forEach(
            item =>  html += this.renderTarea(item)
        )
        this.nodoListaTareas.innerHTML = html
        this.aNodosChecks = document.querySelectorAll('[name="is-completa"]')
        this.aNodosBorrar = document.querySelectorAll('.borrar-activo')
        this.aNodosChecks.forEach(
            item => item.addEventListener('change', this.checkTarea.bind(this))
        )
        this.aNodosBorrar.forEach(
            item => item.addEventListener('click', this.borrarTarea.bind(this))
        )
    }



    renderTarea(data) {
        let htmlView =  `
            <li>
            <input type="checkbox" name="is-completa" id="check-${data.id}"
                data-id="${data.id}" ${data.isComplete ? 'checked' : '' }>
            <span class="nombre-tarea ${data.isComplete ? 'hecho' : '' }">
            ${data.name}</span>
            <span id="borrar-${data.id}" data-id="${data.id}"
                class="borrar-tarea ${data.isComplete ? 'borrar-activo' : 'inactivo' }">🗑️</span>
            </li>
        `
        return htmlView
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
                console.log(response)
                if (!inBuscar.value)
                this.getTareas()
                else
                this.getSearch()
       },
            error => console.log(error)
        )
    }


    checkTarea(oEv) {
        console.log(oEv.target.dataset.id)
        console.log(oEv.target.checked)
        let datos = {
            isComplete : oEv.target.checked
        }
        let url = this.uRL + '/' + oEv.target.dataset.id
        let headers = new Headers()
        headers.append("Content-Type", "application/json");
        console.dir(headers)
        this.fetchService.send(url, {
                method: 'PATCH', 
                headers : headers,
                body: JSON.stringify(datos)
               }).then( // () => this.getTareas()
                    response => {
                    console.log(response)
                    if (!inBuscar.value)
                    this.getTareas()
                    else
                    this.getSearch()

                },
                error => console.log(error)
            )
    }

    borrarTarea(oEv) {
        console.log(oEv.target.dataset.id)
        if (!window.confirm( MENSAJES.listaTareas.confirmacion)) {return}
        // TODO Borar en Servicio Web
        let url = this.uRL + '/' + oEv.target.dataset.id
        this.fetchService.send(url, {method: 'DELETE' })
            .then(
                data => { 
                    console.log(data)
                    if (!inBuscar.value)
                    this.getTareas() 
                    else
                    this.getSearch()

                },
                error => console.log(error)
            )
    }

    
    dltTareas(){
        console.log(this.aTareas )
         
        for (let i = 0; i < this.aTareas.length; i++) {
            if(this.aTareas[i].isComplete){
                let url2 = this.uRL + '/' + this.aTareas[i].id
                this.fetchService.send(url2, {method: 'DELETE' })
                    .then(
                        data => 
                        {if (!inBuscar.value)
                        this.getTareas()
                        else
                        this.getSearch()},
                        
                        error => console.log(error)
                    )
            }
        }
    }

}