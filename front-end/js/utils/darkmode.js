let home                = document.querySelector('.home');

let social              = document.querySelectorAll('.home__header__profil__social__fab')

let darkmodeSelector    = document.getElementById('darkmodeSelector');
let darkmodeP           = document.getElementById('darkmodeSelector__p');
let darkmodeIcon        = document.getElementById('icon--darkmode');

let activatedDarkmode   = false;



darkmodeP.addEventListener('click', () => {
    if (activatedDarkmode === false) {
        activatedDarkmode = true;

        home.classList.replace('home--darkmode--off', 'home--darkmode--on');

        darkmodeP.textContent = 'Basculer en mode clair';
        darkmodeP.classList.replace('p--darkmode--off', 'p--darkmode--on');
        social.forEach(element =>
            element.classList.replace('social--darkmode--off', 'social--darkmode--on'));
    }
    else {
        activatedDarkmode = false;

        home.classList.replace('home--darkmode--on', 'home--darkmode--off');

        darkmodeP.textContent = 'Basculer en mode sombre';
        darkmodeP.classList.replace('p--darkmode--on', 'p--darkmode--off');
        social.forEach(element =>
            element.classList.replace('social--darkmode--on', 'social--darkmode--off'));
    };
});