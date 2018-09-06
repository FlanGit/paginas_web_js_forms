function main() {
    let inNombre = document.querySelector('#nombre')
    let inApellido = document.querySelector('#apellido')
    let btnEnviar = document.querySelector('#enviar')

    // focus / blur

    inNombre.addEventListener('blur', validaTextoblur)
    inNombre.addEventListener('input', validaTexto)
    inApellido.addEventListener('blur', validaTextoblur)
    inApellido.addEventListener('input',validaTexto)
    
    function validaTextoblur() {
        if(!this.value) {
            console.log(`${this.id} incorrecto_blur`)
            console.dir(this)
            this.nextElementSibling.innerHTML = `${this.id} incorrecto_blur`
            btnEnviar.disabled = true
        } else {
            this.nextElementSibling.innerHTML = 'okblur'
            validaFormulario()
        }
    }    
    
    function validaTexto() {
        if(!this.value) {
            console.log(`${this.id} incorrecto_input`)
            console.dir(this)
            this.nextElementSibling.innerHTML = `${this.id} incorrecto_input`
            btnEnviar.disabled = true
        } else {
            this.nextElementSibling.innerHTML = 'ok'
            validaFormulario()
        }   
    }

    function validaFormulario () {
        if (inNombre.value && inApellido.value) {
            btnEnviar.disabled = false
        }
    }
}

document.addEventListener('DOMContentLoaded', main)