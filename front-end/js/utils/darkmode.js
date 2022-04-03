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

//? VARIABLES À EXPORTER
//* BOOLÉEN D'ACTIVATION DU DARKMODE
export let activatedDarkmode   = false;



//? ================================= FONCTIONS ===========================================
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

        for(let i = 0; i < cardProjects.length; i++){
            let project = cardProjects[i];
            let infos = project.querySelectorAll('.infos');

            project.addEventListener('mouseover', () => {
                infos.forEach(info => {
                    info.classList.add('project-card--texts--darkmode--on');
                });
            });

            project.addEventListener('mouseout', () => {
                infos.forEach(info => {
                    info.classList.remove('project-card--texts--darkmode--on');
                });
            });
        };


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

        for(let i = 0; i < cardProjects.length; i++){
            let project = cardProjects[i];
            let infos = project.querySelectorAll('.infos');
        
            project.addEventListener('mouseover', () => {
                infos.forEach(info =>
                    info.classList.remove('project-card--texts--darkmode--on'));
            });
        };

        //* FOOTER
        socialMini.classList.remove('social--darkmode--on');
        links.forEach(element =>
            element.classList.remove('link--darkmode--on'));
    };
}


//? ================================= ÉCOUTEURS D'ÉVÉNEMENTS ===========================================
//* ÉCOUTEUR SUR LA DIV DARKMODE
darkmodeButton.addEventListener('click', activateDarkmode);