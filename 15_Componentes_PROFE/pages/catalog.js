import { PageController } from "../page.controller.js";

export class Catalog extends PageController {
    constructor () {
        super('Catalogo', 'Catalogo')
        this.nodeMain = document.querySelector('main')
        this.renderMain()
    }

    renderMain() {
       this.nodeMain.innerHTML = '<p>Añadir el catalogo</p>'
    }


}

document.addEventListener('DOMContentLoaded', () => {
    new Catalog()
})