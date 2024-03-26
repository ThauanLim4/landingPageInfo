// $(document).ready(function(){
//     $('.menuButton').on('click', function(){
//         $('#menu').toggleClass('active')
//         $('.menuButton').toggleClass('fa-x')
//     })
// })

const botaoMenu = document.querySelector('.menuButton')

botaoMenu.addEventListener('click', function(){
    let menu = document.getElementById('menu')
    menu.classList.toggle('active')
    botaoMenu.classList.toggle('fa-x')
})