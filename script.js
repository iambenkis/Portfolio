const projects = [
    {
        title : "Tonic",
        languages : ['Html','Css','Javascipt','github','ruby','Boostrap'],
        image: './images/project5.png',
        descriptio : `    Lorem ipsum dolor sit amet, consectetur adipisicing 
        elit. Similique quasi atque harum, optio ex 
        tempore ullam officiis? Obcaecati dolor 
        placeat, laboriosam assumenda aliquid dicta 
        esse sequi tempore. Ratione repudiandae non 
        nostrum ab explicabo labore. Hic neque 
        quisquam tempore provident labore. Excepturi 
        sed optio velit voluptas? Recusandae maiores 
        natus vitae qui tempora minus dolores iste 
        nihil assumenda sapiente doloribus, a sequi 
        alias? Neque odit autem distinctio laboriosam,
         a veritatis placeat enim modi ratione omnis dolores. `,
    },
    {
        title : "Tonic",
        languages : ['Html','Css','Javascipt','github','ruby','Boostrap'],
        image: './images/project5.png',
        descriptio : `    Lorem ipsum dolor sit amet, consectetur adipisicing 
        elit. Similique quasi atque harum, optio ex 
        tempore ullam officiis? Obcaecati dolor 
        placeat, laboriosam assumenda aliquid dicta 
        esse sequi tempore. Ratione repudiandae non 
        nostrum ab explicabo labore. Hic neque 
        quisquam tempore provident labore. Excepturi 
        sed optio velit voluptas? Recusandae maiores 
        natus vitae qui tempora minus dolores iste 
        nihil assumenda sapiente doloribus, a sequi 
        alias? Neque odit autem distinctio laboriosam,
         a veritatis placeat enim modi ratione omnis dolores. `,
    },
    {
        title : "Tonic",
        languages : ['Html','Css','Javascipt','github','ruby','Boostrap'],
        image: './images/project5.png',
        descriptio : `    Lorem ipsum dolor sit amet, consectetur adipisicing 
        elit. Similique quasi atque harum, optio ex 
        tempore ullam officiis? Obcaecati dolor 
        placeat, laboriosam assumenda aliquid dicta 
        esse sequi tempore. Ratione repudiandae non 
        nostrum ab explicabo labore. Hic neque 
        quisquam tempore provident labore. Excepturi 
        sed optio velit voluptas? Recusandae maiores 
        natus vitae qui tempora minus dolores iste 
        nihil assumenda sapiente doloribus, a sequi 
        alias? Neque odit autem distinctio laboriosam,
         a veritatis placeat enim modi ratione omnis dolores. `,
    },
    {
        title : "Multi - Post Stories",
        languages : ['Html','Css','Javascipt','github','ruby','Boostrap'],
        image: './images/project5.png',
        descriptio : `    Lorem ipsum dolor sit amet, consectetur adipisicing 
        elit. Similique quasi atque harum, optio ex 
        tempore ullam officiis? Obcaecati dolor 
        placeat, laboriosam assumenda aliquid dicta 
        esse sequi tempore. Ratione repudiandae non 
        nostrum ab explicabo labore. Hic neque 
        quisquam tempore provident labore. Excepturi 
        sed optio velit voluptas? Recusandae maiores 
        natus vitae qui tempora minus dolores iste 
        nihil assumenda sapiente doloribus, a sequi 
        alias? Neque odit autem distinctio laboriosam,
         a veritatis placeat enim modi ratione omnis dolores. `,
    }
]
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