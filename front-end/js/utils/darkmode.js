//~ ICI SONT GÉRÉES TOUTES LES INTERRACTIONS LIÉES AU DARKMODE SAUF PROJECT-CARD

//? ================================= VARIABLES ===========================================
//* SÉLECTION DU BODY
let home                = document.querySelector('.home');

//* SÉLECTION DU DÉCLENCHEUR DU DARKMODE
let darkmodeButton      = document.querySelector('.darkmodeSelector__button'); // bouton darkmode

//* SÉLECTION DES ÉLÉMENTS ET DES COMPOSANTS
//? VARIABLES PRIMAIRES
let social              = document.querySelectorAll('.home__header__profil__social__fab');
let texts               = document.querySelectorAll('.p'); // textes généraux
let socialMini          = document.querySelector('.home__header__profil__social__fab__mini');
let links               = document.querySelectorAll('.link');
let cardProjects        = document.querySelectorAll('.home__content__project-card');

//? VARIABLES SECONDAIRES
let project;
for(let i = 0; i < cardProjects.length; i++){
    project = cardProjects[i];
}

let infos = project.querySelectorAll('.infos');

//? VARIABLES À EXPORTER
//* BOOLÉEN D'ACTIVATION DU DARKMODE
export let activatedDarkmode   = false;




//? ================================= FONCTIONS ===========================================
function addDarkmodeClass() {
    
    infos.forEach(info => {
        info.classList.add('project-card--texts--darkmode--on--appears');
        info.classList.replace('transition__allP__disappears', 'transition__allP__appears');
    });
}

function removeDarkmodeClass() {

    infos.forEach(info => {
        info.classList.remove('project-card--texts--darkmode--on--appears');
        info.classList.replace('transition__allP__appears','transition__allP__disappears');
    });
}


function activateDarkmode() {
    if (activatedDarkmode === false) {
        
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

        project.addEventListener('mouseover', addDarkmodeClass);
        project.addEventListener('mouseout', removeDarkmodeClass);

        //* FOOTER
        socialMini.classList.add('social--darkmode--on');
        links.forEach(element =>
            element.classList.add('link--darkmode--on'));

    } else {
                
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

        project.addEventListener('mouseover', removeDarkmodeClass);

        //* FOOTER
        socialMini.classList.remove('social--darkmode--on');
        links.forEach(element =>
            element.classList.remove('link--darkmode--on'));
    };

}


//? ================================= ÉCOUTEURS D'ÉVÉNEMENTS ===========================================
//* ÉCOUTEUR SUR LA DIV DARKMODE
darkmodeButton.addEventListener('click', activateDarkmode);