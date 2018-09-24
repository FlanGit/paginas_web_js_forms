function main() {
    const template = document.querySelector("#sample-template");
    console.dir(template.content)
    document.body.appendChild(template.content)
}


document.addEventListener('DOMContentLoaded', main)