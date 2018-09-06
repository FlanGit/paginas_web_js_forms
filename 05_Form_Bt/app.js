function main() {
    let input = document.querySelector('#nombre')

    input.addEventListener('change', ()=> {
        console.log("Evento Change:", input.value)
    })
    input.addEventListener('input', ()=> {
        console.log("Evento Input:", input.value)
    })
}

document.addEventListener('DOMContentLoaded', main)