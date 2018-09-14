let url = 'datos.json'
let method = 'GET'

// básico
fetch(url, {method: method} )
.then( response => response.json() )
.then( data => mostrarDatos(data) )


function mostrarDatos(data) {
    console.log(data)
    document.querySelector('#output').innerHTML = 
        JSON.stringify(data)
}

// con control de errorres

/* fetch(url, {method: method} )
.then( response => response.json() )
.then( data => mostrarDatos(data) ) */















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
 
