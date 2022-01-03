import '../front-end/js/layout/footer.js';

//^ Relative path for the images (readed from index.html)
const imgSrc = "../front-end/assets/img/"; // execute this const for html result
// const imgSrc = "../front-end/assets/img/"; // execute this const for php result


//^ Individual arrays for each project, separatly
let portfolio = {
    'titre'     : 'Portfolio',
    'excerp'    : 'Comme pour tout créateur, chaque projet que je réalise alimente mon portfolio. Vous vous trouvez justement sur cette réalisation.',
    'date'      : '29 12 2021',
    'url'       : 'http://google.com',
    'image'     : imgSrc + 'portfolio-card.jpg'

};

let voyages = {
    'title'     : 'Voyages',
    'excerp'    : 'Des aurores boérales de Norvège aux forêts tropicales des îles d\'Hawaii, parcourez ce projet pour découvrir une partie du monde.',
    'date'      : '30 04 2018',
    'url'       : 'https://www.gohawaii.com/fr',
    'image'     : imgSrc + 'voyages-card.jpeg'
};

let cinema = {
    'title'     : 'Cinéma',
    'excerp'    : 'Avec DeadPool, ça débite et ça déboite ! Wham !',
    'date'      : '03 11 2016',
    'url'       : 'https://www.allocine.fr/film/fichefilm_gen_cfilm=146349.html',
    'image'     : imgSrc + 'test6-card.jpg'
};


//^ Global array for all projects, together
let projects =  [portfolio, voyages, cinema];


//^ Loop for every project-card, all doing the loop inside this one
projects.forEach(project => {
    
    
    //^ Creation of the variables to be handled
    let cardProject     = document.querySelector('.home__content__project-card');
    let cardImage       = document.querySelector('.home__content__project-card__img');
    let cardTitle       = document.querySelector('.home__content__project-card__title');
    let cardText        = document.querySelector('.home__content__project-card__text')
    let cardDate        = document.querySelector('.home__content__project-card__text-date');
    let cardUrl         = document.querySelector('.home__content__project-card__divs__div-link');


    //^ Manipulation of each elements
    cardImage.setAttribute('src', project['image']);
    cardUrl.setAttribute('href', project['url']);
    
    cardDate.innerHTML      = "Date de dernière mise à jour : <span class='date'></span>" + project['date'] + "</span></p>";

    cardTitle.textContent   = project['title'];
    cardText.textContent    = project['excerp'];


    //^ Creation of functions
    function blurryCard() {

        cardImage.classList.replace('unblurry', 'blurry');
        cardTitle.classList.replace('transition__title__appears', 'transition__title__disappears'); 
        cardText.classList.replace('transition__text__disappears', 'transition__text__appears');
        cardDate.classList.replace('transition__date__disappears', 'transition__date__appears');
    };

    function unblurryCard() {

        cardImage.classList.replace('blurry', 'unblurry');
        cardTitle.classList.replace('transition__title__disappears', 'transition__title__appears');
        cardText.classList.replace('transition__text__appears', 'transition__text__disappears');
        cardDate.classList.replace('transition__date__appears', 'transition__date__disappears');
    };


    //^ Creation of EventListeners
    cardProject.addEventListener('mouseover', blurryCard);


    //^ Suppression of EventListeners
    cardProject.addEventListener('mouseout', unblurryCard);
});