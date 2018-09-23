export class AboutComponent {
    constructor (title) {
        this.title = title
    }

    render() {
        const about = document.createElement('article')
        about.innerHTML = 
            `<h2 class="article-title">${this.title}</h2>
            <p>Nosotros somos un lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, magni minima hic veniam veritatis alias voluptatibus cum voluptate perspiciatis repellat, laborum porro deleniti delectus, itaque tempora officiis minus doloremque! Quas.</p>
            <p>Entre nuestros objetivos principales se encuentra Veniam esse, sed doloribus sequi voluptas libero cupiditate qui, nostrum quidem illum officia commodi optio ipsa molestias. Ad rem officia eligendi! Iste ducimus eaque ratione, corporis cupiditate explicabo doloribus vero.</p>
            `
        return about
    }
}
