import {BASE} from '../config.js'
export class MenuComponent {
  
    /**
     * @parameter: oItems : {title, links}
     */
    constructor(oItems) {
          this.items = oItems.links
          this.items.forEach( item => {
            item[1] = BASE +'/'+ item[1]
        })
        console.log(this.items)
    }

    render () {
        const menu = document.createElement('nav')
        let itemsList = ""
        this.items.forEach(item => {
            itemsList += `<li><a href="${item[1]}">${item[0]}</a></li>`
        });
        menu.innerHTML = `<ul class="menu">${itemsList}</ul>`
        return menu
    }


}