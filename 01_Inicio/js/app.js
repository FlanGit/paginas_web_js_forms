/*  function iniciar() {
    console.log("Iniciado JS")
 }
 
 document.addEventListener('DOMContentLoaded', iniciar) */
 

/*  document.addEventListener('DOMContentLoaded', function () {
    console.log("Iniciado JS, función anónima")
 }) */

/*  document.addEventListener('DOMContentLoaded',  () => 
    console.log("Iniciado JS, función anónima")
 ) */


 import { Form } from './form.js' 
 import { Interactivo } from './interactivo.js'
 
 /* document.addEventListener('DOMContentLoaded',
                         function () {
                               new Main()
                         }
 )  */
 
 document.addEventListener('DOMContentLoaded', () => {
     new Form()
     new Interactivo()
 }) 
  
 class Persona {
     constructor (name, edad, profesion) {
         this.name = name
         this.edad = edad
         this.profesion = profesion
     }
     saludar() {}
 }