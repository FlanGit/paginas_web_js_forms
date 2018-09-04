import { FormularioModel} from './model.js'
import { Form } from './form.js'

export class FormInscripcion extends Form {
    constructor() {
        super()
        this.domForm = document.querySelector('form')
        this.data = new FormularioModel()
        this.domForm.addEventListener('submit',
            this.enviar.bind(this)
        ) 
        console.log(this.data)
    }

    enviar(oEv) {
        oEv.preventDefault()
        this.data.user.name = document.querySelector('#nombre').value
        //this.data.user.name = this.domForm.elements.nombre.value
        this.data.user.f_name = document.querySelector('#apellido').value
        this.data.email = document.querySelector('#correo').value
        this.data.passw = document.querySelector('#passw').value
        this.data.coments = document.querySelector('#comentarios').value
        this.data.opciones.conditions = document.querySelector('#condiciones').checked
        this.data.opciones.turn = this.setRadio('turno')
        this.data.sede = this.setRadio('sede')
        this.data.opciones.curse = this.setSelect('curso') 
        this.data.aficiones = this.setMultiCheck('aficiones')
        console.log(this.data)
    }

}