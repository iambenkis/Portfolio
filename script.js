const projects = [
  {
    title: 'Tonic Tonic',
    languages: ['Html', 'Css', 'Javascipt'],
    image: './images/project1.png',
    description: `A daily selection of privately personalized reads;
        no accounts sign-ups required. Recusandae maiores A daily selection of privately personalized reads;
        no accounts sign-ups required. Recusandae maiores 
        natus `,
    year: 2015,
    job: 'BAck end Dev',
    company: 'CANOPY',
  },
  {
    title: 'Multi - Post Stories',
    languages: ['Html', 'Css', 'Javascipt'],
    image: './images/project2.png',
    description: `     A daily selection of privately personalized reads;
        no accounts sign-ups required. Lorem ipsum dolor sit amet.A daily selection of privately personalized reads;
        no accounts sign-ups required.`,
    year: 2018,
    job: 'Full Stack Dev',
    company: 'FACEBOOK',
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
            <button> 
                See Live
                <img src="./images/Icon.png" alt="live icon">
            </button> 
            <button>
                See Source
                <i class="fa-brands fa-github"></i>
            </button> 
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
  } else {
    emailError.textContent = 'Kindly Check Your Email';
    e.preventDefault();
  }
  // prevent the form from submitting
});