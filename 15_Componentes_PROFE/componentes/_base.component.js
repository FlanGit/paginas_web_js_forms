export class xxxComponent {
    constructor (title) {
        this.title = title
    }
    render() {
        const xxx = document.createElement('xxx') 
        xxx.innerHTML = 
        `<div>
            <h1 class="title">${this.title}</h1>
        </div>
        `
        return xxx
    }
}