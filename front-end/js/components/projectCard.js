let projects =  {
                'portfolio' :   {
                                'title'     : 'Portfolio',
                                'excerp'    : 'Comme pour tout créateur, chaque projet que je réalise alimente mon portfolio. Vous vous trouvez justement sur cette réalisation.',
                                'date'      : '',
                                'url'       : '',
                                'image'     : 'src="./front-end/assets/img/portfolio-card.jpg"'
                },
                'voyages'   :   {
                                'title'     : 'Voyages',
                                'excerp'    : 'Des aurores boérales de Norvège aux forêts tropicales des îles d\'Hawaii, parcourez ce projet pour découvrir une partie du monde.',
                                'date'      : '',
                                'url'       : '',
                                'image'     : 'src="./front-end/assets/img/voyages-card.jpg"'
                },
                'cinema'    :   {
                                'title'     : 'Cinéma',
                                'excerp'    : 'Avec DeadPool, ça débite et ça déboite ! Wham !',
                                'date'      : '',
                                'url'       : '',
                                'image'     : 'src="./front-end/assets/img/test6-card"'
                },
                /*
                'sport'     :   {
                                'title'     : 'Sport',
                                'excerp'    : 'Plongez dans le Pacifique avec les requins, ou prenez de la hauteur en wingsuit au-dessus du monde',
                                'date'      : '',
                                'url'       : ''
                }
                */
}

for (let project in projects){
    for (let index in project){
        //^ Creation of the variables to be handled

        let cardProject     = document.querySelector('.home__content__project-card');
        let cardImage       = document.querySelector('.home__content__project-card__img');
        let cardTitle       = document.querySelector('.home__content__project-card__title');
        let cardText        = document.querySelector('.home__content__project-card__text')
        let cardDate        = document.querySelector('.home__content__project-card__text-date');


        //^ Creation of functions

        function blurryCard() {

            cardImage.innerHTML = '<img class="home__content__project-card__img unblurry"' + projects[project][index] + '>';
            cardImage.classList.replace('unblurry', 'blurry');
            cardTitle.classList.replace('transition__title__appears', 'transition__title__disappears'); 
            cardText.classList.replace('transition__text__disappears', 'transition__text__appears');
            cardDate.classList.replace('transition__date__disappears', 'transition__date__appears');

            //cardText.textContent = projects[project]['excerp'];
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
    }
}