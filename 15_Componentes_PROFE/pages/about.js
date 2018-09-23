import { PageController } from "../page.controller.js";
import { AboutComponent } from "../componentes/about.component.js";

class About extends PageController {
    constructor() {
        super('About', 'Acerca de')
        this.nodeMain = document.querySelector('main')
        this.renderMain()
    } 

    renderMain() {
        let title = 'Algo acerca de nosotros'
        this.article = new AboutComponent(title).render()
        this.nodeMain.appendChild(this.article)
    }
}

document.addEventListener('DOMContentLoaded', () => { new About()})




