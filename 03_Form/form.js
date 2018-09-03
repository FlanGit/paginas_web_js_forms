export class Form {
    constructor() {
        this.domForm = document.querySelector('form')
        this.domUser = document.querySelector('#user')
        this.data = {
            user : '',
            passw : ''
        }
        this.domForm.addEventListener('submit',
            this.enviar.bind(this)
        ) 
    }

    enviar(oEv) {
        oEv.preventDefault()
        // Dos formas de recoger los datos
        this.data.user = this.domUser.value
        this.data.passw = document.querySelector('#passw').value
        console.log(this.data)
    }
}