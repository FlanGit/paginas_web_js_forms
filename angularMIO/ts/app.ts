
interface Direccion {
    calle: string
    poblacion: string
}

class Usuario {

   /*  public name: string
    public lastName: string
    public edad: number

    constructor(name, lastName, edad) {
        this.name = name
        this.lastName = lastName
        this.edad = edad
    }  */

    constructor(public name: string , 
                public lastName: string, 
                public edad: number,
                public direccion: Direccion) {}

    saludar() {
        console.log(`Hola, soy ${this.name} ${this.lastName}`)
        console.log(this)
    }

    crecer () {
        this.edad++
    }


}

let o = {calle: 'Pez', poblacion: 'Teruel'}
let user1: Usuario = new Usuario('Pepe', 'Perez',  34,
            o)

user1.crecer()
user1.saludar()
