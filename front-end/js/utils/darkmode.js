//~ ICI SONT GÉRÉES TOUTES LES INTERRACTIONS LIÉES AU DARKMODE SAUF PROJECT-CARD

//? ================================= VARIABLES ===========================================
//* SÉLECTION DU BODY
let home                = document.querySelector('.home');

//* SÉLECTION DU DÉCLENCHEUR DU DARKMODE
let darkmodeSelector    = document.getElementById('darkmodeSelector'); // Zone du bouton darkmode
let darkmodeButton      = document.querySelector('.darkmodeSelector__button'); // bouton darkmode
// let darkmodeIcon        = document.getElementById('icon--darkmode'); // icone darkmode

//* SÉLECTION DES ÉLÉMENTS ET DES COMPOSANTS
let social              = document.querySelectorAll('.home__header__profil__social__fab');
let texts               = document.querySelectorAll('.p'); // textes généraux
let cardProjects        = document.querySelectorAll('.home__content__project-card');
let cardProjectAllP    = document.querySelectorAll('.home__content__project-card__divs p');
let socialMini          = document.querySelector('.home__header__profil__social__fab__mini');
let links               = document.querySelectorAll('.link');

//* BOOLÉEN D'ACTIVATION DU DARKMODE
let activatedDarkmode   = false;



//? ================================= FONCTIONS ===========================================
function activateDarkmode() {
    if (activatedDarkmode === false) {
        console.log('%c' + "On vient d'activer le darkmode", 'color: #f0f; font-size: 1.5rem; background-color:white');
        //* BOOLÉEN D'ACTIVATION DEVIENT TRUE == ACTIF
        activatedDarkmode = true;

        //* LE BODY PASSE EN DARKMODE
        home.classList.add('home--darkmode--on');

        //* LE DÉCLENCHEUR DARKMODE PASSE EN DARKMODE
        darkmodeButton.textContent = 'Basculer en mode clair';
        darkmodeButton.classList.add('darkmodeButton--darkmode--on');

        //* LES ÉLÉMENTS ET COMPOSANTS PASSENT EN DARKMODE
        //* HEADER
        social.forEach(element =>
            element.classList.add('social--darkmode--on'));

        //* MAIN
        texts.forEach(element => 
            element.classList.add('text--darkmode--on'));
        cardProjects.forEach(element =>
            element.addEventListener('mouseover', () =>
                cardProjectAllP.forEach(element => element.classList.add('project-card--texts--darkmode--on--appears'))));
        cardProjects.forEach(element =>
            element.addEventListener('mouseout', () =>
                cardProjectAllP.forEach(element => element.classList.remove('project-card--texts--darkmode--on--appears'))));

        //* FOOTER
        socialMini.classList.add('social--darkmode--on');
        links.forEach(element =>
            element.classList.add('link--darkmode--on'));
    }
    else {
        console.log('%c' + "On a désactivé le darkmode", 'color: red; font-size: 1.5rem');
        //* BOOLÉEN D'ACTIVIATION PASSE À FALSE == INACTIF
        activatedDarkmode = false;

        //* LE BODY PASSE EN LIGHTMODE
        home.classList.remove('home--darkmode--on');

        //* LE DÉCLENCHEUR DARKMODE PASSE EN LIGHTMODE
        darkmodeButton.textContent = 'Basculer en mode sombre';
        darkmodeButton.classList.remove('darkmodeButton--darkmode--on');

        //* LES ÉLÉMENTS ET COMOPSANTS PASSENT EN LIGHTMODE
        //* HEADER
        social.forEach(element =>
            element.classList.remove('social--darkmode--on'));

        //* MAIN
        texts.forEach(element =>
            element.classList.remove('text--darkmode--on'));
        cardProjects.forEach(element =>
            element.addEventListener('mouseover', () =>
                cardProjectAllP.forEach(element => element.classList.add('transition__allP_appears'))));
        cardProjects.forEach(element =>
            element.addEventListener('mouseout', () =>
                cardProjectAllP.forEach(element => element.classList.remove('transition__allP__appears'))));

        //* FOOTER
        socialMini.classList.remove('social--darkmode--on');
        links.forEach(element =>
            element.classList.remove('link--darkmode--on'));
    };

}


//? ================================= ÉCOUTEURS D'ÉVÉNEMENTS ===========================================
//* ÉCOUTEUR SUR LA DIV DARKMODE
darkmodeButton.addEventListener('click', activateDarkmode);