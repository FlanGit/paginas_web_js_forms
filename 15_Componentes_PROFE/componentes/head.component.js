import { BASE } from "../config.js";

export class HeadComponent {
    constructor(title) {
        this.title = title
        this.cssFile = `${BASE}/css/style.css`
    }

    render() {
        const head = 
        `<meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${this.title}</title>
        <link rel="stylesheet" href="${this.cssFile}">
        `
        return head
    }
}