const projects = [
    {
        title : "Tonic",
        languages : ['Html','Css','Javascipt'],
        image: './images/project1.png',
        description : `A daily selection of privately personalized reads;
        no accounts sign-ups required. Recusandae maiores 
        natus `,
        year : 2015 ,
        job : 'BAck end Dev',
        company: 'CANOPY'
    },
    {
        title : "Multi - Post Stories",
        languages : ['Html','Css','Javascipt'],
        image: './images/project2.png',
        description : `     A daily selection of privately personalized reads;
        no accounts sign-ups required. Lorem ipsum dolor sit amet.`,
        year : 2018 ,
        job : 'Full Stack Dev',
        company: 'FACEBOOK'
    },
    {
        title : "Facebook 360",
        languages : ['Html','Css','Javascipt'],
        image: './images/project3.png',
        description : `  A daily selection of privately personalized reads;
        no accounts sign-ups required.`,
        year : 2020 ,
        job : 'Full Stack Dev',
        company: 'FACEBOOK'
    },
    {
        title : "Uber Navigation",
        languages : ['Html','Css','Javascipt'],
        image: './images/project4.png',
        description : `   A daily selection of privately personalized reads;
        no accounts sign-ups required.`,
         year : 2022,
         job : 'Lead Developer',
         company: 'Uber'
    }
]
const faBars = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');
const faXmark = document.querySelector('.fa-xmark');
const menuItem = document.querySelectorAll('.menu-item');
const popApp = document.querySelector('.poped-section');
const projectContent = document.querySelector('.pops-project')
const popXmark = document.querySelector('#pop-xmark');
const seeProject =document.querySelectorAll('.see-prop');

const displayItem = () => {
  menu.classList.add('active-menu');
};
const disableItem = () => {
  menu.classList.remove('active-menu');
};

const disableProject = () => {  
    popApp.classList.remove('active-menu');
}

faBars.addEventListener('click', displayItem);
faXmark.addEventListener('click', disableItem);
popXmark.addEventListener('click', disableProject)
menuItem.forEach((item) => item.addEventListener('click', disableItem));
seeProject.forEach((project,index) => project.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(index )
    popApp.classList.add('active-menu');
    projectContent.innerHTML = `
        <h2 class="project-title">${projects[index].title}</h2>
        <div class="caption" id="caption">
            <p class="canopy">${projects[index].company}</p>
            <img src="./images/Counter.png" alt="counter image">
            <p>${projects[index].job}</p>
            <img src="./images/Counter.png" alt="counter image">
            <p>${projects[index].year}</p>
        </div>
        <img id="tempate-image" src="${projects[index].image}" alt="Multi - Post Stories">
        <p class="text">${projects[index].description}</p>
        <ul class="languages">
            ${projects[index].languages.map((lang) => {return `<li>${lang}<li/>`}).join('')}
        </ul>
        <div class="btns">
            <button>
                See Live
                <img src="./images/Icon.png" alt="live icon">
            </button> 
            <button>
                See Source
                <i class="fa-brands fa-github"></i>
            </button> 
        </div>
    `
}));