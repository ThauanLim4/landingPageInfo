const botaoMenu = document.querySelector('.menuButton')

botaoMenu.addEventListener('click', function(){
    let menu = document.getElementById('menu')
    menu.classList.toggle('active')
    botaoMenu.classList.toggle('fa-x')
    botaoMenu.style.transition = 'all ease-in 0.2s'
})

const categorias = document.getElementById('categorias')
const recommendedProducts = document.getElementById('recommendedProducts')

const observer =  new IntersectionObserver(entries => {
    const itens = document.querySelectorAll('.headerListItem')
    entries.forEach(entrye => {
        entrye.target.classList.toggle('inView', entrye.isIntersecting)
    })
})
const sections = document.querySelectorAll('section')
console.log(sections)

sections.forEach(itens => {
    observer.observe(itens)
})
