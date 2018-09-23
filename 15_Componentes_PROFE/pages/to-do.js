import { PageController } from "../page.controller.js";
import { ListaTareas } from "../componentes/lista-tareas.component.js";

export class ToDo extends PageController {
    constructor () {
        super('Tareas', 'Lista de tareas')
        this.nodeMain = document.querySelector('main')
        this.renderMain()
        new ListaTareas()
    }

    renderMain() {
       
        this.nodeMain.innerHTML = 
        `<h2>Tareas</h2>
        <form action="">
            <input id="inTarea" type="text" placeholder="Nueva tarea">
            <button id="btnAdd" type="button">Añadir</button>
        </form>
        <div class="tareas">
            <ul class="tareas" id="lista"></ul>
            <button type="button" id="btn-borrar-select">Borrar completadas</button>
        </div>
        `
    }
}


document.addEventListener('DOMContentLoaded', () => {
    new ToDo()
})