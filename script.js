const projects = [
  {
    title: 'Recipe App',
    languages: ['Ruby on rails', 'Bootstrap'],
    image: './images/recipe.png',
    description: `The Recipe app keeps track of all your recipes, ingredients, and inventory.
    It allows you to save ingredients, keep track of what you have, create recipes,
    and generate a shopping list based on what you have and what you are missing from a recipe.`,
    year: 2022,
    job: 'Front end Dev',
    company: 'BenKis',
    sourceCode: 'https://github.com/yasinabdmahmood/Recipe-app.git',
    liveDemo: 'https://github.com/yasinabdmahmood/Recipe-app.git',
  },
  {
    title: 'Space  Traveller',
    languages: ['React Js', 'Redux Js', 'Css'],
    image: './images/space-1.png',
    description: `About
    In this project, We build with the real live data from
    the SpaceX API. The application will allow users to book
    rockets and join selected space missions. We build it using
    react and redux.`,
    year: 2022,
    job: 'React Developer',
    company: 'Benkis',
  },
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
    sourceCode: 'https://iambenkis.github.io/To-Do-list/dist/',
    liveDemo: 'https://github.com/iambenkis/To-Do-list',
  },
  {
    title: 'Global Summit',
    languages: ['Html', 'Css', 'Javascipt'],
    image: './images/svg1.png',
    description: `In this capstone project I build a project based on an
    online website for a conference.I have been given design guidelines
    to create the website (design guidelines), I had personalized the
    content,though I built the website based on the content of a Global
    Manufacture and Industry Summit 2022 conference.`,
    year: 2022,
    job: 'Front End Dev',
    company: 'BenKis',
    sourceCode: 'https://github.com/iambenkis/Global-summit-GMIS-.git',
    liveDemo: 'https://iambenkis.github.io/Global-summit-GMIS-/',
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
        <div class="langv">
            <p class="text">${projects[index].description}</p>
            ${projects[index].languages ? printLang(projects[index].languages) : ''}
        </div>
        <div class="btns">
            <a
              href="${projects[index].liveDemo}"
              target="_blank">
                See Live
                <img src="./images/Icon.png" alt="live icon">
            </a>
            <a
              href="${projects[index].sourceCode}"
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

angleDown.forEach((angle) => {
  angle.style.display = 'none';
});
angleRight.forEach((btn, id) => {
  btn.addEventListener('click', () => {
    knowledgeLabel[id].classList.add('active');
    angleDown[id].style.display = 'block';
    angleRight[id].style.display = 'none';
    if (knowledgeLabel[id].style.maxHeight) {
      knowledgeLabel[id].style.display = null;
    } else {
      knowledgeLabel[id].style.maxHeight = `${knowledgeLabel[id].scrollHeight}px`;
    }
  });
});

angleDown.forEach((btn, id) => {
  btn.addEventListener('click', () => {
    knowledgeLabel[id].classList.remove('active');
    angleDown[id].style.display = 'none';
    angleRight[id].style.display = 'block';
    if (knowledgeLabel[id].style.maxHeight) {
      knowledgeLabel[id].style.display = null;
    } else {
      knowledgeLabel[id].style.maxHeight = `${knowledgeLabel[id].scrollHeight}px`;
    }
  });
});
