export class Form {

    /**
     * Procesa un radioButon
     */
    setRadio(name) {
        // let aTurnos = document.getElementsByName('turno')
        // let id = '[name=' + name + ']'
        const id = `[name='${name}']`
        const aRadio = document.querySelectorAll(id)
        for (let i = 0; i < aRadio.length; i++) {
            const item = aRadio[i];
            if (item.checked) {
                return item.value
            }
        }
    }

    /**
     * Procesa un Select/Options
     * devolviendo un objeto value y text
     */
    setSelect(name) {
        const opciones = document.querySelector(`#${name}`)
        console.dir(opciones.selectedIndex)
        console.dir(opciones[opciones.selectedIndex])
        const oDato = {
            value :  opciones[opciones.selectedIndex].value,
            text :  opciones[opciones.selectedIndex].textContent
        }
        return oDato
    }

    /**
    * Procesa varios checkbox con la misma clase
    */
    setMultiCheck(name) {
        let aDatos = []
        let aCheckBoxes = document.querySelectorAll(`.${name}`)
        aCheckBoxes.forEach( item => {
            if (item.checked) {
                aDatos.push(item.id)
            }
        })
        return aDatos
    }
}