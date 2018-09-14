import { DATOS, JSON } from './config.js'
import { FetchService } from './fetch-service.js'

export class App {
    constructor () {
        //this.ndBtnDatos = document.querySelector('#btnDatos')
        //this.ndBtnJson = document.querySelector('#btnJson')
        //this.btnError = document.querySelector('#btnError')
        this.aBotones = document.querySelectorAll('button')
        this.ndOutput = document.querySelector('#output')
        this.ndError = document.querySelector('#error')
        
        /* this.ndBtnDatos.addEventListener('click', 
            this.pedirDatos.bind(this))
        this.ndBtnJson.addEventListener('click', 
            this.pedirDatos.bind(this))
        this.btnError.addEventListener('click', 
            this.pedirDatos.bind(this)) */
        
        this.aBotones.forEach( item => 
            item.addEventListener('click', 
                this.pedirDatos.bind(this)))
    }

    pedirDatos(oEv) {
        let serviceFetch
        let config
        switch (oEv.target.id) {
            case 'btnDatos':
                config = { url : DATOS,
                            method:'GET',
                            type: 'txt'}
                break;
            case 'btnJson':
                config = { url : JSON,
                            method:'GET',
                            type: 'json'}
            case 'btnError': 
                config = { url : 'error',
                            method:'GET',
                            type: ''}            
                break;                  
        }
        serviceFetch = new FetchService(config).get().then(
            (response) => { 
                console.log(response)
                this.mostrarDatos(response)
            },
            (error) => {
                console.log(error),
                this.mostrarError(error) 
            }
        )

        /* serviceFetch = new FetchService(config).get().then(
            response => this.mostrarDatos(response),
            error => this.mostrarError(error)) */

    } 

    mostrarDatos(oDatos) {
        let html
        html = '<ul>'
        for (const key in oDatos) {
            if (oDatos.hasOwnProperty(key)) {
                const value = oDatos[key];
                html += `<li>${key} : ${value}</li>`    
            }
        }
        html += '</ul>'
        this.ndOutput.innerHTML = html
        this.ndError.innerHTML = ''
    }

    mostrarError(oDatos) {
        let error = oDatos.status + ' : ' + oDatos.statusText
        this.ndError.innerHTML = error
        this.ndOutput.innerHTML = ''
    }
}

