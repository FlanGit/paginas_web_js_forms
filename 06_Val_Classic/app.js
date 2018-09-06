function main() {
    let inNombre = document.querySelector('#nombre')
    let inApellido = document.querySelector('#apellido')
    let btnEnviar = document.querySelector('#enviar')

    // focus / blur

    inNombre.addEventListener('blur', validaTexto)
    inNombre.addEventListener('input', validaTexto)
    inApellido.addEventListener('blur', validaTexto)
    inApellido.addEventListener('input',validaTexto)
    
    function validaTexto() {
        if(!this.value) {
            console.log(`${this.id} incorrecto`)
            console.dir(this)
            this.nextElementSibling.innerHTML = `${this.id} incorrecto`
        } else {
            this.nextElementSibling.innerHTML = ''
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