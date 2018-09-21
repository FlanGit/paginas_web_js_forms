import { PageController } from './page.controller.js';

class Index extends PageController {
    constructor() {
        super()
    }
}

document.addEventListener('DOMContentLoaded', () => { new Index()})