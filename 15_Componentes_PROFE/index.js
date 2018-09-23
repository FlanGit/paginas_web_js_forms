
import { PageController } from './page.controller.js';
import { InicioComponent } from './componentes/inicio.component.js';


class Index extends PageController {
    constructor() {
        super()
        this.nodeMain = document.querySelector('main')
        this.renderMain()
    }

    renderMain() {
        this.articulo = new InicioComponent('Inicio').render()
        this.nodeMain.appendChild(this.articulo)
    }
}

document.addEventListener('DOMContentLoaded', () => { new Index()})




