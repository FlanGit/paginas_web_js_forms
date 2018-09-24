function main() {
    // const template = document.querySelector("#sample-template");
    const template = document.querySelector('link[rel="import"]')
                        .import.querySelector('#sample-template')
    //console.dir(template)
    document.body.appendChild(template.content)
}


document.addEventListener('DOMContentLoaded', main)