/**
 * Servicio AJAX
 */
export class AjaxService {
    constructor(metodo, url, type, callBack) {
        this.ajax = new XMLHttpRequest()
        this.oDatos = {}
        this.type = type
        this.callBack = callBack
        console.dir(this.ajax)
        //this.ajax.onreadystatechange = 
        //    this.getDatos.bind(this)
        this.ajax.addEventListener('readystatechange',
            this.getDatos.bind(this))

        this.ajax.open(metodo,url, false)
        this.ajax.setRequestHeader('Accept', 'text/txt')
        this.ajax.send(null)
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
            } else {
                this.oDatos.error =
                    this.ajax.status + ' : ' +
                    this.ajax.statusText
            }
            console.dir(this.oDatos)
            this.callBack(this.oDatos)  
        }
    }
}