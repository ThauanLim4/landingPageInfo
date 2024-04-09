const { json } = require("body-parser")

const botaoMenu = document.querySelector('.menuButton')

botaoMenu.addEventListener('click', function(){
    let menu = document.getElementById('menu')
    menu.classList.toggle('active')
    botaoMenu.classList.toggle('fa-x')
    botaoMenu.style.transition = 'all ease-in 0.2s'
})

const categorias = document.getElementById('categorias')
const recommendedProducts = document.getElementById('recommendedProducts')

const api = fetch('.components/data/info.json') 
