export class InicioComponent {
    constructor (title) {
        this.title = title
    }

    render() {
        const inicio = document.createElement('article')
        inicio.innerHTML = 
        `<h2 class="article-title">${this.title}</h2>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, magni minima hic veniam veritatis alias voluptatibus cum voluptate perspiciatis repellat, laborum porro deleniti delectus, itaque tempora officiis minus doloremque! Quas.</p>
         <p>Veniam esse, sed doloribus sequi voluptas libero cupiditate qui, nostrum quidem illum officia commodi optio ipsa molestias. Ad rem officia eligendi! Iste ducimus eaque ratione, corporis cupiditate explicabo doloribus vero.</p>
         <p>Soluta voluptatibus possimus sed, voluptate, perspiciatis temporibus in consectetur adipisci reprehenderit deleniti perferendis et numquam error voluptatum nostrum hic nisi inventore ex dolore laboriosam magnam tempore. Ab fugit dolores magni.</p>
         <p>Quis deserunt soluta deleniti? Pariatur, qui corrupti. Voluptatibus, odit adipisci alias velit amet molestiae? Omnis fugiat adipisci earum voluptatum optio, error quaerat ipsa sed exercitationem incidunt fuga ipsum hic temporibus.</p>
        `
        return inicio
    }
}