//? ================================= VARIABLES ===========================================
//* RÉCUPÉRATION DE CHAQUE ÉLÉMENT DE TOUTES LES PROJECT-CARDS
let cardProjects     = document.querySelectorAll('.home__content__project-card');

cardProjects.forEach((project) => {
  
    //? ========= VARIABLES LOCALES ==========
    let cardImage        = project.querySelector('.home__content__project-card__img');
    let cardTitle        = project.querySelector('.home__content__project-card__title');
    let cardProjectAllP  = project.querySelectorAll('.home__content__project-card__divs p');
    let cardDates        = project.querySelector('.colored-date');

    //? ========= VARIABLES LOCALES UTILES POUR LE MODE TACTILE
    let projectHeight         = project.offsetHeight;
    let projectYPosition      = project.getBoundingClientRect().y;



    //? ========= FONCTIONS ==========
    function blurryCard() {

        cardImage.classList.replace('unblurry', 'blurry');
        cardTitle.classList.replace('transition__title__appears', 'transition__title__disappears'); 
        cardProjectAllP.forEach(element =>
            element.classList.replace('transition__allP__disappears', 'transition__allP__appears'));
        cardDates.classList.replace('transition__allP__disappears', 'transition__allP__appears');
    }

    
    function unblurryCard() {
    
        cardImage.classList.replace('blurry', 'unblurry');
        cardTitle.classList.replace('transition__title__disappears', 'transition__title__appears');
        cardProjectAllP.forEach(element =>
            element.classList.replace('transition__allP__appears', 'transition__allP__disappears'));
        cardDates.classList.replace('transition__allP__appears', 'transition__allP__disappears');
    }

    //? ========= ÉCOUTEURS D'ÉVÈNEMENTS ==========
    project.addEventListener('mouseover', blurryCard);
    project.addEventListener('mouseout', unblurryCard);

});