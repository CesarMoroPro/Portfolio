//? ================================= VARIABLES ===========================================
//* CHEMIN RELATIF POUR LES IMAGES DU PROJECT-CARD (LU DEPUIS INDEX.HTML)
const imgSrc = "./front-end/assets/img/"; // execute this const for html result
// const imgSrc = "../front-end/assets/img/"; // execute this const for php result

//* TABLEAU DE DONNÉES DES DIFFÉRENTS PROJETS
let projects =  [
                    {
                        'title'     : 'Portfolio',
                        'excerp'    : 'Comme pour tout créateur, chaque projet que je réalise alimente mon portfolio. Vous vous trouvez justement sur cette réalisation.',
                        'date'      : '29 12 2021',
                        'url'       : 'http://google.com',
                        'image'     : imgSrc + 'portfolio-card.jpg'
                    },
                    {
                        'title'     : 'Devnest',
                        'excerp'    : 'Vidéo Youtube : projet de fin de formation réalisé en équipe avec deux autres étudiants, après 5 mois de formation.',
                        'date'      : '01 12 2020',
                        'url'       : 'https://www.youtube.com/watch?v=Gbczg095K_A&t=3775s',
                        'image'     : imgSrc + 'devnest-card.jpg'
                    },
                    
                    {
                        'title'     : "C'qu'il y a d'pire",
                        'excerp'    : 'Un site pour partager ses punchlines un tantinet sarcastiques',
                        'date'      : '31 03 2022',
                        'url'       : 'https://www.viedemerde.fr/',
                        'image'     : imgSrc + 'test6-card.jpg'
                    },

                    {
                        'title'     : 'Voyages',
                        'excerp'    : "Des îles Hawaiiennes aux aurores boréales d'Islande, partez découvrir notre si belle planète",
                        'date'      : '03 11 2016',
                        'url'       : 'https://www.hawaiitracker.com/',
                        'image'     : imgSrc + 'voyages-card.jpeg'
                    }
                ]



//* RÉCUPÉRATION DE CHAQUE ÉLÉMENT DE TOUTES LES PROJECT-CARDS
let cardProjects     = document.querySelectorAll('.home__content__project-card');

cardProjects.forEach((project) => {
  
    //? ========= VARIABLES LOCALES ==========
    let cardImage        = project.querySelector('.home__content__project-card__img');
    let cardTitle        = project.querySelector('.home__content__project-card__title');
    let cardTexts        = document.querySelectorAll('.home__content__project-card__text')
    let cardDate         = project.querySelector('.home__content__project-card__text-date');
    let cardProjectAllP  = project.querySelectorAll('.home__content__project-card__divs p');
    let cardUrl          = project.querySelector('.home__content__project-card__divs__div-link');



    //? ========= FONCTIONS ==========
    function blurryCard() {

        cardImage.classList.replace('unblurry', 'blurry');
        cardTitle.classList.replace('transition__title__appears', 'transition__title__disappears'); 
        cardProjectAllP.forEach(element =>
            element.classList.replace('transition__allP__disappears', 'transition__allP__appears'));
    };

    
    function unblurryCard() {
    
        cardImage.classList.replace('blurry', 'unblurry');
        cardTitle.classList.replace('transition__title__disappears', 'transition__title__appears');
        cardProjectAllP.forEach(element =>
            element.classList.replace('transition__allP__appears', 'transition__allP__disappears'));
    };



    //? ========= BOUCLES POUR LES COMPOSANTS DES PROJETS ==========
    for(let i = 0; i < projects.length; i++){
 
        let project = projects[i];

        cardImage.setAttribute('src', project['image']);
        cardUrl.setAttribute('href', project['url']);
        
        cardDate.innerHTML = "Date de création : <span class='date'></span>" + project['date'] + "</span></p>";
    
        cardTitle.textContent = project['title'];
        cardTexts.forEach(element =>
            element.textContent = project['excerp']);
    }
    


    //? ========= ÉCOUTEURS D'ÉVÈNEMENTS ==========
    project.addEventListener('mouseover', blurryCard);
    project.addEventListener('mouseout', unblurryCard);

});