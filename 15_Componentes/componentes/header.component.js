export class HeaderComponent {
    constructor (title) {
        this.title = title
    }
    render () {
        const header = document.createElement('header')
        header.innerHTML = `<h1 class="title">${this.title}</h1>`
        return header
    }
}