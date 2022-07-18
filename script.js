let faBars = document.querySelector('.fa-bars')
let menu = document.querySelector('.menu')
let faXmark = document.querySelector('.fa-xmark')
let menuItem = document.querySelectorAll('.menu-item')

const displayMenu = () => {
    menu.classList.add('active-menu')
}
const disableMenu = () => {
    menu.classList.remove('active-menu')
}

faBars.addEventListener('click',displayMenu)
faXmark.addEventListener('click',disableMenu)
menuItem.forEach(item => {
    item.addEventListener('click',disableMenu) 
})