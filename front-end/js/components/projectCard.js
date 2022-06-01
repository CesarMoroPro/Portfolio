//? ================================= VARIABLES ===========================================
//* RÉCUPÉRATION DE LA TAILLE DE L'ÉCRAN (Utile pour l'animation en tactile)
let screenWidth         = screen.width;
let screenHeight        = screen.height; // = 3X px

//* DIVISON DE LA HAUTEUR D'ÉCRAN EN 3 PARTIES (Utile pour l'animation en tactile)
let heightOne           = Math.ceil((screenHeight/3)); // = X px
let heightTwo           = Math.ceil((screenHeight/3)*2); // = 2X px

//* VARIABLES CORRESPONDANT AUX VARIABLES SCSS, à modifier manuellement si changement en SCSS (Utile pour l'animation en tactile)
let breakpointMediumMinWidth    = 740+'px';




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

    
    //* CONDITION UTILE POUR LE MODE TACTILE
    //if (screenWidth < breakpointMediumMinWidth){ // 740px correspond à Scss > Utils > Variables > $breakpoint-medium-min-width. Changer ici la valeur manuellement si on change la valeur de cette variable SCSS
        // if(project.)
        // }
    //} 

    //? ========= ÉCOUTEURS D'ÉVÈNEMENTS ==========
    project.addEventListener('mouseover', blurryCard);
    project.addEventListener('mouseout', unblurryCard);

});