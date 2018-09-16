function main() {
    let msg = location.search
    console.log(msg)
    msg = msg.replace(/\%20/g, ' ')
    msg = msg.substring(3)
    console.log(msg)
    document.querySelector('#error').innerHTML = msg
}

document.addEventListener('DOMContentLoaded', main)