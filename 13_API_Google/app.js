export class App {
    constructor() {
        this.URLBase = 'https://www.googleapis.com/books/v1/volumes?q='
        this.libroBase = 'https://www.edicionesencuentro.com/portadas/NODISPONIBLE.gif'
        this.nClave = document.querySelector('#clave')
        this.nBtnBuscar = document.querySelector('#btnBuscar')
        this.nOutput = document.querySelector('#output')
        this.clave = ''

        this.buscar =  this.buscar.bind(this)
        this.nBtnBuscar.addEventListener('click', this.buscar)
    }

    buscar() {
        let url
        this.clave = this.nClave.value
        if (this.clave) {
            url = this.URLBase + this.clave
            fetch(url, {method: 'GET'}).then(
                response => response.json()
            ).then(data =>  this.mostrar(data))
        }
    }

    mostrar(data) {
        let aLibros
        let html = '<dl>'
        console.log(data.items)
        aLibros = data.items.map(
            item => {
                return {
                    autores: item.volumeInfo.authors,
                    titulo: item.volumeInfo.title, 
                    icono: item.volumeInfo.imageLinks ? 
                    item.volumeInfo.imageLinks.smallThumbnail: this.libroBase
                }
            }
        )
        console.log(aLibros)

         aLibros.forEach(item => {
            let autor = '&nbsp;'
            if(item.autores) {
                autor = item.autores.join(' | ')
            }
            html += `<dt>${item.titulo}</dt>`
            html += `<dd>${autor}</dd>`
            html += `<img src="${item.icono}">`
            console.log(html)
            console.log("-----------1------------")
        });
        html += '</dl>'
        this.nOutput.innerHTML = html
        this.nClave.value = ''
    }
}