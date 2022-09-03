const projects = [
  {
    title: 'Todo List',
    languages: ['Html', 'Css', 'Javascipt'],
    image: './images/toDo.png',
    description: `AThe todo list lists everything that you have to do, 
    with the most important tasks at the top of the list, and the least
     important tasks at the bottom using a corresponding index of each task. 
     The project is build with HTML,CSS and Javascript.`,
    year: 2022,
    job: 'Front end Dev',
    company: 'BenKis',
  },
  {
    title: 'Leaderboard',
    languages: ['Html', 'Css', 'Javascipt'],
    image: './images/leader7.png',
    description: `A leaderboard showing the names and current scores of the 
    leading competitors.The project is set up as a javaScript 
    project using webpack and ES6 features.This leaderboard is a Api based application 
    for storing scores online!`,
    year: 2022,
    job: 'Front end Dev',
    company: 'BenKis',
  },
  {
    title: 'Facebook 360',
    languages: ['Html', 'Css', 'Javascipt'],
    image: './images/project3.png',
    description: `  A daily selection of privately personalized reads;
        no accounts sign-ups required.A daily selection of privately personalized reads;
        no accounts sign-ups required.`,
    year: 2020,
    job: 'Full Stack Dev',
    company: 'FACEBOOK',
  },
  {
    title: 'Uber Navigation',
    languages: ['Html', 'Css', 'Javascipt'],
    image: './images/project4.png',
    description: `   A daily selection of privately personalized reads;
        no accounts sign-ups required.A daily selection of privately personalized reads;
        no accounts sign-ups required.`,
    year: 2022,
    job: 'Lead Developer',
    company: 'Uber',
  },
];

const faBars = document.querySelector('.fa-bars');
const menu = document.querySelector('.menu');
const faXmark = document.querySelector('.fa-xmark');
const menuItem = document.querySelectorAll('.menu-item');
const popApp = document.querySelector('.poped-section');
const projectContent = document.querySelector('.pops-project');
const popXmark = document.querySelector('#pop-xmark');
const seeProject = document.querySelectorAll('.see-prop');
const emailContact = document.querySelector('#email');
const form = document.getElementsByTagName('form')[0];
const emailError = document.querySelector('.error');
const section = document.querySelectorAll('.section');
const scrollBtn = document.querySelectorAll('.scrollBtn');
const kwoledgeBtn = document.querySelectorAll('.knowledge-label');
const knowledgeLabel = document.querySelectorAll('.langs-label');
const angleDown = document.querySelectorAll('.fa-angle-down');
const angleRight = document.querySelectorAll('.fa-angle-right');
scrollBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    scrollBtn.forEach((b) => {
      b.classList.remove('crntBtn');
    });
    section[index].scrollIntoView({ behavior: 'smooth' });
    btn.classList.add('crntBtn');
  });
});

document.querySelector('.logo-txt').addEventListener('click', () => {
  document.querySelector('.header').scrollIntoView({ behavior: 'smooth' });
});

const init = () => {
  const storedData = localStorage.getItem('formData');
  if (storedData) { JSON.parse(storedData); }
};

function clearStorage() { // clears the entire localStorage
  localStorage.clear();
  console.log('clear records');
}

clearStorage();
init();

const setStorage = () => {
  const userName = document.getElementById('user').value;
  const email = emailContact.value;
  const message = document.getElementById('message').value;
  const formStorage = {
    _userName: userName,
    _email: email,
    _message: message,
  };
  localStorage.setItem('data', JSON.stringify(formStorage));
};

const displayItem = () => {
  menu.classList.add('active-menu');
};
const disableItem = () => {
  menu.classList.remove('active-menu');
};

const disableProject = () => {
  popApp.classList.remove('active-menu');
};

const printLang = (langs) => `<ul class="languages">
           ${langs.map((lang) => `<li>${lang}<li/>`).join('')}
    </ul>`;

faBars.addEventListener('click', displayItem);
faXmark.addEventListener('click', disableItem);
popXmark.addEventListener('click', disableProject);
menuItem.forEach((item) => item.addEventListener('click', disableItem));
seeProject.forEach((project, index) => project.addEventListener('click', (e) => {
  e.preventDefault();
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
        ${projects[index].languages ? printLang(projects[index].languages) : ''}
        <div class="btns">
            <a 
              href="https://iambenkis.github.io/To-Do-list/dist/"
              target="_blank"> 
                See Live
                <img src="./images/Icon.png" alt="live icon">
            </a> 
            <a 
              href="https://github.com/iambenkis/To-Do-list"
              target="_blank">
                See Source
                <i class="fa-brands fa-github"></i>
            </a> 
        </div>
    `;
}));

const isLowerCase = (str) => {
  const regExp = /[A-Z]/;
  const isMatch = regExp.test(str);
  if (str === '') return false;
  const result = !isMatch;
  return result;
};

form.addEventListener('submit', (e) => {
  const emailCnt = emailContact.value;
  const isEmailValid = isLowerCase(emailCnt);
  if (isEmailValid) {
    emailError.textContent = '';
    setStorage();
  } else {
    emailError.textContent = 'Please make Email lowercase';
    e.preventDefault();
  } 
});

angleDown.forEach(angle => {
  angle.style.display = 'none';
})
angleRight.forEach((btn,id) => {
  btn.addEventListener('click', () => { 
    knowledgeLabel[id].classList.add('active');
    angleDown[id].style.display = 'block'; 
    angleRight[id].style.display = 'none';
    if (knowledgeLabel[id].style.maxHeight) {
      knowledgeLabel[id].style.display = null;
    } else {
      knowledgeLabel[id].style.maxHeight = knowledgeLabel[id].scrollHeight + "px";
    } 
  })
})

angleDown.forEach((btn,id) => {
  btn.addEventListener('click', () => { 
    knowledgeLabel[id].classList.remove('active');
    angleDown[id].style.display = 'none'; 
    angleRight[id].style.display = 'block';
    if (knowledgeLabel[id].style.maxHeight) {
      knowledgeLabel[id].style.display = null;
    } else {
      knowledgeLabel[id].style.maxHeight = knowledgeLabel[id].scrollHeight + "px";
    } 
  })
})
