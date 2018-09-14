/**
 * Servicio AJAX
 */
export class FetchService {
    constructor(config) {
        this.config = config
        this.oDatos = {}
    }

    get() {
        return new Promise( (resolve, reject) => {
            fetch(this.config.url, {method: this.config.method})
            .then(
                (response) => {
                    console.log(response)
                    if (response.status === 200) {
                        return response.text()
                    } else {
                        reject( 
                            { status : response.status,
                            statusText: response.statusText}
                        )
                    }
                }
            ).then(
                (data) => { resolve( {text :data } )}
            )
        }
        )        
    }
}