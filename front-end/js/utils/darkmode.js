// TODO : Textes project-cards à passer en blanc en darkmode on
// TODO : Fixer placement des éléments selon les tailles de support


//~ ICI SONT GÉRÉES TOUTES LES INTERRACTIONS LIÉES AU DARKMODE

//* SÉLECTION DU BODY
let home                = document.querySelector('.home');

//* SÉLECTION DU DÉCLENCHEUR DU DARKMODE
let darkmodeSelector    = document.getElementById('darkmodeSelector');
let darkmodeButton      = document.querySelector('.darkmodeSelector__button');
let darkmodeIcon        = document.getElementById('icon--darkmode');

//* SÉLECTION DES ÉLÉMENTS ET DES COMPOSANTS
let social              = document.querySelectorAll('.home__header__profil__social__fab');
let texts               = document.querySelectorAll('.p');
let cardTexts           = document.querySelectorAll('.home__content__project-card__divs p');
let socialMini          = document.querySelector('.home__header__profil__social__fab__mini');
let links               = document.querySelectorAll('.link');

//* BOOLÉEN D'ACTIVATION DU DARKMODE
let activatedDarkmode   = false;


//* ÉCOUTEUR, AU CLICK SUR LA DIV DARKMODE
darkmodeButton.addEventListener('click', () => {
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

        //* FOOTER
        socialMini.classList.add('social--darkmode--on');
        links.forEach(element =>
            element.classList.add('link--darkmode--on'));
    }
    else {
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

        //* FOOTER
        socialMini.classList.remove('social--darkmode--on');
        links.forEach(element =>
            element.classList.remove('link--darkmode--on'));
    };
});