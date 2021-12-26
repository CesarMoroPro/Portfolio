let projects =  {
                'portfolio' :   {
                                'title'     : 'Portfolio',
                                'excerp'    : 'Comme pour tout créateur, chaque projet que je réalise alimente mon portfolio. Vous vous trouvez justement sur cette réalisation.',
                                'date'      : '',
                                'url'       : ''
                },
                'voyages'   :   {
                                'title'     : 'Voyages',
                                'excerp'    : 'Des aurores boérales de Norvège aux forêts tropicales des îles d\'Hawaii, parcourez ce projet pour découvrir une partie du monde.',
                                'date'      : '',
                                'url'       : ''
                },
                'cinema'    :   {
                                'title'     : 'Cinéma',
                                'excerp'    : 'Avec DeadPool, ça débite et ça déboite ! Wham !',
                                'date'      : '',
                                'url'       : ''
                },
                'sport'     :   {
                                'title'     : 'Sport',
                                'excerp'    : 'Plongez dans le Pacifique avec les requins, ou prenez de la hauteur en wingsuit au-dessus du monde',
                                'date'      : '',
                                'url'       : ''
                }
}

/* for (let project in projects){
    console.log(projects[project]['title']);
    console.log((projects[project]['excerp']));
} */

//^ Creation of the variables to be handled

let cardProject     = document.querySelector('.home__content__project-card');
let cardImage       = document.querySelector('.home__content__project-card__img');
let cardTitle       = document.querySelector('.home__content__project-card__title');
let cardLink        = document.querySelector('.link-title');
let cardText        = document.querySelector('.home__content__project-card__text')
let cardDate        = document.querySelector('.home__content__project-card__text-date');

let excerp = document.createElement('div');


//^ Creation of functions

function blurryCard() {

    cardImage.classList.replace('unblurry', 'blurry');
    cardTitle.classList.replace('transition__title__appears', 'transition__title__disappears'); 
    cardText.classList.replace('transition__text__disappears', 'transition__text__appears');
    cardDate.classList.replace('transition__date__disappears', 'transition__date__appears');

    cardText.textContent = projects['portfolio']['excerp'];
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