import { FetchService } from "./fetch-service.js";

export class ListaTareas {
    constructor() {
        this.nodoListaTareas = document.querySelector('#lista')
        this.uRL = 'http://localhost:3000/tareas'
        this.aTareas = []
        this.fetchService = new FetchService()
        this.getTareas()
    }

    getTareas() {
        this.fetchService.send(this.uRL, {method: 'GET' })
            .then( data => {
                this.aTareas = data
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
        this.aNodosBorrar = document.querySelectorAll('.borrar-tarea')
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
            <span class="nombre-tarea">${data.name}</span>
            <span id="borrar-${data.id}" data-id="${data.id}"
                class="borrar-tarea">🗑️</span>
            </li>
        `
        return htmlView
    }

    checkTarea(oEv) {
        console.log(oEv.target.dataset.id)
    }

    borrarTarea(oEv) {
        console.log(oEv.target.dataset.id)
        // TODO Borar en Servicio Web
        let url = this.uRL + '/' + oEv.target.dataset.id
        this.fetchService.send(url, {method: 'DELETE' })
            .then(
                data => { 
                    console.log(data)
                    this.getTareas() 
                },
                error => console.log(error)
            )
    }

}