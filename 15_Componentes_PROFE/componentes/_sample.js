export class Sample {

    constructor() {

    }

    render() {
        return '<header><h1>Hola</h1></header>'
    }

    renderNodo() {
        //let nodo = document.createElement('header')
        //nodo.innerHTML = '<h1>Hola</h1>'
        //return nodo
        return document.createElement('header').innerHTML = '<h1>Hola</h1>'
    }

}


/////////////////////

document.body.inerHTML = new Sample().render()
document.body.appendChild(new Sample().renderNodo())
