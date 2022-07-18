const faBars = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');
const faXmark = document.querySelector('.fa-xmark');
const menuItem = document.querySelectorAll('.menu-item');

const displayMenu = () => {
  menu.classList.add('active-menu');
};
const disableMenu = () => {
  menu.classList.remove('active-menu');
};

faBars.addEventListener('click', displayMenu);
faXmark.addEventListener('click', disableMenu);
menuItem.forEach((item) => {
  item.addEventListener('click', disableMenu);
});