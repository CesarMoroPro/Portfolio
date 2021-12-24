let projects =  {
                'portfolio' :   {
                                'title'     : 'Portfolio',
                                'excerp'    : 'Comme pour tout créateur, chaque projet que je réalise alimente mon portfolio. Vous vous trouvez justement sur cette réalisation.',
                                'date'      : ''
                },
                'voyages'   :   {
                                'title'     : 'Voyages',
                                'excerp'    : 'Des aurores boérales de Norvège aux forêts tropicales des îles d\'Hawaii, parcourez ce projet pour découvrir une partie du monde.',
                                'date'      : ''
                },
                'cinema'    :   {
                                'title'     : 'Cinéma',
                                'excerp'    : 'Avec DeadPool, ça débite et ça déboite ! Wham !',
                                'date'      : ''
                },
                'sport'     :   {
                                'title'     : 'Sport',
                                'excerp'    : 'Plongez dans le Pacifique avec les requins, ou prenez de la hauteur en wingsuit au-dessus du monde',
                                'date'      : ''
                }
}

for (let project in projects){
    console.log(projects[project]['title']);
    console.log((projects[project]['excerp']));
}

//^ Creation of the variables to be handled

let cardProject     = document.querySelector('.home__content__project-card');
let cardImage       = document.querySelector('.home__content__project-card__img');
let cardTitle       = document.querySelector('.home__content__project-card__title');
let cardLink        = document.querySelector('.home__content__project-card__img-link');
let cardText        = document.querySelector('.home__content__project-card__text')
let cardDate        = document.querySelector('.home__content__project-card__text-date');

let excerp = document.createElement('div');


//^ Creation of functions

function blurry() {
    cardImage.classList.add('blurry__img');
    cardLink.classList.add('blurry__img-link');

    cardTitle.style.display = 'none';
    cardText.textContent = projects['portfolio']['excerp'];
    cardText.style.display = 'block';
    cardDate.style.visibility = 'visible';
};

function unblurry() {
    cardTitle.style.display = 'block';
    cardImage.classList.remove('blurry__img');
    cardLink.classList.remove('blurry__img-link');
    cardTitle.classList.remove('blurry__title');
    
    cardTitle.style.display = 'block';
    cardText.style.display = 'none';
    cardDate.style.visibility = 'hidden'; 

    console.log(cardProject);
};


//^ Creation of EventListeners
cardProject.addEventListener('mouseover', blurry);


//^ Suppression of EventListeners
cardProject.addEventListener('mouseout', unblurry);