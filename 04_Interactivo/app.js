
import { GENEROS } from './datos.js'
export class App {
    constructor() {
        this.dom = {
            formInicio : document.querySelector('#formInicio'),
            formFinal : document.querySelector('#formFinal'),
            cbMas : document.querySelector('#mas'),
            slGenero : document.querySelector('#genero'),
            slAutores : document.querySelector('#autor'),
            btnEnviar : document.querySelector('#btnEnviar'),
            btnRaro : document.querySelector('#btnRaro')
        }
        this.aGeneros = GENEROS
        this.generosFirst = true
        this.defineHandlers()
        this.crearSelect(this.aGeneros, this.dom.slGenero) // que daros a presentar
       // y el otro parametro es donde lo pongo
    }

    defineHandlers () {
        this.dom.cbMas.addEventListener('change',
                this.setFormFinal.bind(this))
        this.dom.slGenero.addEventListener('change',
                this.changeGenero.bind(this))
        this.dom.formFinal.addEventListener('submit',
                this.enviar.bind(this))
        this.dom.btnRaro.addEventListener('click', 
                this.enviarRaro.bind(this))
    }

    setFormFinal () {
        this.dom.formFinal.classList.toggle('hide')
    }

    crearSelect(aDatos, target, selected) {
        let html = ''
        aDatos.forEach( (item, i) => {
            if( i === selected) {
                html += `<option value="${item.value}" selected>
                ${item.label}</option>`
            } else {
                html += `<option value="${item.value}">
                        ${item.label}</option>`  
            }
        })
        target.innerHTML =  html
    }

    changeGenero() {
        let i = this.dom.slGenero.selectedIndex
        console.log( 'Seleccionado', i )
        if (this.generosFirst) {
            this.aGeneros.shift() // elimina el primer elemento del array
            this.crearSelect(this.aGeneros, this.dom.slGenero, i-1) // donde lo pinte y la posicion
            this.generosFirst = false
            this.dom.btnEnviar.disabled = false
            this.dom.slAutores.disabled = false
        }
        i = this.dom.slGenero.selectedIndex
        console.dir( i )
        console.dir( this.dom.slGenero[i])
        console.log(this.aGeneros[i].autores)
        
        this.crearSelect(this.aGeneros[i].autores, this.dom.slAutores)
    }

    enviar(oEv) {
        oEv.preventDefault()
        const data = '?genero=' + 
        this.dom.slGenero[this.dom.slGenero.selectedIndex].value
        + '&autor=' +
        this.dom.slAutores[this.dom.slAutores.selectedIndex].value
        console.log(data)
    }

    enviarRaro() {
        this.dom.formFinal.submit()
    }
}
