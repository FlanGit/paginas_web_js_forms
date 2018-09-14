/**
 * Servicio AJAX
 */
export class AjaxService {
    constructor(metodo, url, type) {
        this.metodo = metodo
        this.url = url
        this.type = type
        this.oDatos = {}
    }

    send() {
        return new Promise( (resolve, reject) => {
            this.resolve = resolve
            this.reject = reject
            this.ajax = new XMLHttpRequest()
            console.dir(this.ajax)
            this.ajax.addEventListener('readystatechange',
                this.getDatos.bind(this))
            this.ajax.open(this.metodo, this.url, false)
            this.ajax.setRequestHeader('Accept', 'text/txt')
            this.ajax.send(null)
        })

    }

    getDatos() {
        console.log(this.ajax.readyState)
        if(this.ajax.readyState === 4) {
            console.log(this.ajax.status)
            console.dir(this.ajax.getAllResponseHeaders())
            if(this.ajax.status === 200) {
                if (this.type === 'json') {
                    this.oDatos = 
                        JSON.parse(this.ajax.responseText)
                } else {
                    this.oDatos.response = 
                        this.ajax.responseText
                }
                console.dir(this.oDatos) 
                this.resolve(this.oDatos)               
            } else {
                this.oDatos.error =
                    this.ajax.status + ' : ' +
                    this.ajax.statusText
                console.dir(this.oDatos)     
                this.reject(this.oDatos)
            }
        }
    }
}