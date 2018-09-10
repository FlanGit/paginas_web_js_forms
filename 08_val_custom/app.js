function main () {

    let form = document.querySelector('form')
    let inDni = document.querySelector('#dni')
    let inUser = document.querySelector('#user')
    let btnEnviar = document.querySelector('#btnEnviar')
    let inPass1 = document.querySelector('#passw')
    let inPass2 = document.querySelector('#passw2')
    inUser.setCustomValidity('Nombre de usuario imprescindible')

    form.addEventListener('submit', enviar)
    inDni.addEventListener('input', validaDNI)
    inUser.addEventListener('input', validaUser)
    inPass2.addEventListener('blur', compararPassw)

    function enviar(oE) {
        oE.preventDefault()
        /**
         * TODO: Codigo real de envio
         */
        console.log('Enviando')
    }

    function validaDNI() {
        let msgDNI = 'DNI Incorrecto'
        inDni.setCustomValidity(msgDNI)
        console.log('Validando DNI')
        const LETRAS = 'TRWAGMYFPDXBNJZSQVHLCKET'
        let num = inDni.value.substring(0, inDni.value.length-1)
        let letra =  inDni.value.substring(inDni.value.length-1)
        console.log(num, letra)
        console.dir(inDni)
        if (isNaN(num *1) || num < 1 || num > 99999999 ) {
            return false
        } else if(LETRAS[num%23] !== letra) {
            return false
        }
        inDni.setCustomValidity('')
    }

    function validaUser() {
        inUser.setCustomValidity('Nombre de usuario imprescindible')
        console.log(inUser.value)
        if (inUser.value) {
            inUser.setCustomValidity('')
        }
    }

    function compararPassw() {
        let msg = "";            
        if (inPass1.value != inPass2.value) {
            msg = "Las contraseñas no coinciden" 
        }
        inPass2.setCustomValidity(msg)
    }
}




document.addEventListener('DOMContentLoaded', main)