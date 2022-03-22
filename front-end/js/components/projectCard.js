//? ================================= VARIABLES ===========================================
//* CHEMIN RELATIF POUR LES IMAGES DU PROJECT-CARD (LU DEPUIS INDEX.HTML)
const imgSrc = "./front-end/assets/img/"; // execute this const for html result
// const imgSrc = "../front-end/assets/img/"; // execute this const for php result

//* TABLEAU DE DONNÉES DES DIFFÉRENTS PROJETS
let projects =  {
                'portfolio' :   {
                                'title'     : 'Portfolio',
                                'excerp'    : 'Comme pour tout créateur, chaque projet que je réalise alimente mon portfolio. Vous vous trouvez justement sur cette réalisation.',
                                'date'      : '29 12 2021',
                                'url'       : 'http://google.com',
                                'image'     : imgSrc + 'portfolio-card.jpg'
                },
                /*
                'voyages'   :   {
                                'title'     : 'Voyages',
                                'excerp'    : 'Des aurores boérales de Norvège aux forêts tropicales des îles d\'Hawaii, parcourez ce projet pour découvrir une partie du monde.',
                                'date'      : '30 04 2018',
                                'url'       : 'https://www.gohawaii.com/fr',
                                'image'     : imgSrc + 'voyages-card.jpeg'
                },
                'cinema'    :   {
                                'title'     : 'Cinéma',
                                'excerp'    : 'Avec DeadPool, ça débite et ça déboite ! Wham !',
                                'date'      : '03 11 2016',
                                'url'       : 'https://www.allocine.fr/film/fichefilm_gen_cfilm=146349.html',
                                'image'     : imgSrc + 'test6-card.jpg'
                }
                */
}

//* RÉCUPÉRATION DE CHAQUE ÉLÉMENT D'UNE PROJECT-CARD
let cardProjects     = document.querySelectorAll('.home__content__project-card');
let cardImages       = document.querySelectorAll('.home__content__project-card__img');
let cardTitles       = document.querySelectorAll('.home__content__project-card__title');
let cardTexts        = document.querySelectorAll('.home__content__project-card__text')
let cardDates        = document.querySelectorAll('.home__content__project-card__text-date');
let cardProjectAllP    = document.querySelectorAll('.home__content__project-card__divs p');
let cardUrls         = document.querySelectorAll('.home__content__project-card__divs__div-link');

/*
//* RÉCUPÉRATION DU BOUTON D'ACTIVATION DU DARKMODE
let darkmodeButton      = document.querySelector('.darkmodeSelector__button'); // bouton darkmode

//* BOOLÉEN D'ACTIVATION DU DARKMODE
let activatedDarkmode = false;
*/


//? ================================= FONCTIONS ===========================================
//* CRÉATION DES FONCTIONS
function blurryCard() {

    cardImages.forEach(element =>
        element.classList.replace('unblurry', 'blurry'));
    cardTitles.forEach(element =>
        element.classList.replace('transition__title__appears', 'transition__title__disappears')); 
    cardProjectAllP.forEach(element =>
        element.classList.replace('transition__allP__disappears', 'transition__allP__appears'));
};

function unblurryCard() {

    cardImages.forEach(element =>
        element.classList.replace('blurry', 'unblurry'));
    cardTitles.forEach(element =>
        element.classList.replace('transition__title__disappears', 'transition__title__appears'));
    cardProjectAllP.forEach(element =>
        element.classList.replace('transition__allP__appears', 'transition__allP__disappears'));
};



//? ================================= ÉCOUTEURS D'ÉVÉNEMENTS ===========================================
//* ÉCOUTEUR SURVOL D'UNE PROJECT-CARD
cardProjects.forEach(element =>
    element.addEventListener('mouseover', blurryCard));
cardProjects.forEach(element =>
    element.addEventListener('mouseout', unblurryCard));



//? ================================= TRAITEMENT FINAL =========================================== 
//* BOUCLE SUR TOUS LES ÉLÉMENTS D'UNE PROJECT-CARD ENTRAINANT UNE ACTION
for (let project in projects){

   cardImages.forEach(element =>
        element.setAttribute('src', projects[project]['image']));
    cardUrls.forEach(element =>
        element.setAttribute('href', projects[project]['url']));
    
    cardDates.forEach(element =>
        element.innerHTML      = "Date de création : <span class='date'></span>" + projects[project]['date'] + "</span></p>");

    cardTitles.forEach(element =>
        element.textContent   = projects[project]['title']);
    cardTexts.forEach(element =>
        element.textContent    = projects[project]['excerp']);    
}