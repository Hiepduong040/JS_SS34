let h1 = document.getElementById('demo1')
let but = document.getElementById('demo')
but.addEventListener('click', (event) => {
    h1.innerHTML='Text after change'
})