
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('form').addEventListener('submit',
        function (oEv) {
            oEv.preventDefault()
            console.log('Evento submit')
        }
    )
    document.querySelector('button').addEventListener('click',
        function () {console.log('Evento click')}
    )
})