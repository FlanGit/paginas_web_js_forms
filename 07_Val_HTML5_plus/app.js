function main() {
    // let inNombre = document.querySelector('#nombre')
    // let inApellido = document.querySelector('#apellido')

    let aInputs = document.querySelectorAll('.val')
    let btnEnviar = document.querySelector('#enviar')
    let formForm1 = document.querySelector('#form1')

    //aInputs[1].focus()

    btnEnviar.addEventListener('click', preEnviar)
    formForm1.addEventListener('submit', enviar)
    // inNombre.addEventListener('input', validaText)
    // inApellido.addEventListener('input', validaText)

    aInputs.forEach( item => {
        item.addEventListener('input', validaText)
    })

    function preEnviar () {
        console.log("Pulsado click")
        console.dir(formForm1)
    }

    function validaText(oEv) {
        let element = oEv.target
        console.dir(element)
        let validControl = true
        if (!element.checkValidity()) {
            let msg =''
            console.log(element.validity)
            if (element.validity.valueMissing) {
                msg = `El ${element.id} es imprescindible`
            } else if (element.validity.typeMismatch) {
                msg = `El formato del ${element.id} es incorrecto`
            } else if (element.validity.patternMismatch) {
                msg = `El formato del ${element.id} debe ser 34-XXX-XXX-XXX`
            } else if (element.validity.tooShort) {
                msg = `El ${element.id} debe tener al menos 2 dígitos` 
            }
            msg = `<span class="h6">${msg}</span>`

            element.nextElementSibling.innerHTML = msg   
            validControl = false
            element.nextElementSibling.classList.remove('hide')
            element.focus()
        } else {
            element.nextElementSibling.innerHTML = ''
            validControl = true
            element.nextElementSibling.classList.add('hide')
        }   
        
        return validControl  
    }

    function enviar(oEv) {
        if(checkInvalidInputs() ) {
            console.log("No valido") 
             oEv.preventDefault()
        } else {
            // Esto sobraria para enviar realmente
            oEv.preventDefault()
            console.log("Enviando") 
        }
    }

    function checkInvalidInputs() {
        for (let i = 0; i < aInputs.length; i++) {
            const item = aInputs[i];
            if (!validaText({target: item}) ) {
                return true;
            }
        }
    }

}

document.addEventListener('DOMContentLoaded', main)
