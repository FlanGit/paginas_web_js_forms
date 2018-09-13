import { DATOS, JSON } from './config.js'

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
        switch (oEv.target.id) {
            case 'btnDatos':
                fetch(DATOS, {method:'GET'}).then(
                    (response) => {
                        console.dir(response)
                        return response.text()
                    }
                ).then(
                    (response) => { 
                        console.log(response)
                        this.mostrarDatos({respuesta: response})
                    }
                )
                break;
            case 'btnJson':
                fetch(JSON, {method: 'GET'}).then(
                    (response) => { return response.json()}
                ).then(
                    (data) => {this.mostrarDatos(data)}
                )
                break;  
            case 'btnError':  
                fetch('error', {method: 'GET'}).then(
                    (response) => {
                        console.log(response)
                        this.mostrarError(response) 
                    }
                )
            break;                   
        }
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