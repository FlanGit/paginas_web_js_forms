function main () {

    let url = 'datos.json'
    let method = 'GET'

    // básico
    /* fetch(url, {method: method} )
    .then( response => response.json() )
    .then( data => mostrarDatos(data) ) */

    // con control de errorres

    //url = 'datosxx.json'
    document.querySelector('#btnEnviar')
        .addEventListener('click', enviar)

    function enviar() {
        fetch(url, {method: method} )
        .then( response => {
            if (response.ok) {
                return response.json() 
            } else {
                let msg = response.status + ' : ' + response.statusText 
                throw msg
            }
        })
        .then( data => mostrarDatos(data) )
        .catch ( error => {
             mostrarError(error)
        })   
        
    }

    function mostrarError(error) {
        /* document.querySelector('#output').innerHTML = 
            error */
         location.assign('error.html?e='+error)
    }
    
    function mostrarDatos(data) {
        console.log("Mostrar datos")
        console.log(data)
        document.querySelector('#output').innerHTML += 
            JSON.stringify(data)
    }
}

document.addEventListener('DOMContentLoaded', main)






function hacerAlgo() {
    if('Hay un erorr') {
        // gestiono el error
       throw'Error'
    } else {
        // TODO codigo de la funcionalidad
        return x
    }
}




try {
    hacerAlgo()
   
} catch (error) {
   
}
try {
  hacer_otra_cosa()  
} catch (error) {
    
}