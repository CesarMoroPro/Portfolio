let home                = document.querySelector('.home');

let social              = document.querySelectorAll('.home__header__profil__social__fab')

let darkmodeSelector    = document.getElementById('darkmodeSelector');
let darkmodeP           = document.getElementById('darkmodeSelector__p');
let darkmodeIcon        = document.getElementById('icon--darkmode');

if(darkmodeP.textContent === 'Passer en mode sombre') {

    darkmodeSelector.addEventListener('mouseover', () => {
        darkmodeP.classList.replace('p--darkmode--off', 'p--darkmode--on');
    });

    darkmodeSelector.addEventListener('mouseout', () => {
        darkmodeP.classList.replace('p--darkmode--on', 'p--darkmode--off');
    });

    darkmodeSelector.addEventListener('click', () => {
        home.classList.replace('home--darkmode--off', 'home--darkmode--on');

        darkmodeP.textContent = 'Passer en mode clair';
        darkmodeP.classList.replace('p--darkmode--off', 'p--darkmode--on');
        social.forEach(element =>
            element.classList.replace('social--darkmode--off', 'social--darkmode--on'));
    });
} 
else if(darkmodeP.textContent === 'Passer en mode clair') {

    darkmodeSelector.addEventListener('mouseover', () => {
        darkmodeP.classList.replace('p--darkmode--on', 'p--darkmode--off');
     });

    darkmodeSelector.addEventListener('mouseout', () => {
        darkmodeP.classList.replace('p--darkmode--off', 'p--darkmode--on');
    });

    darkmodeSelector.addEventListener('click', () => {
        home.classList.replace('home--darkmode--on', 'home--darkmode--off');

        darkmodeP.textContent = 'Passer en mode clair';
        darkmodeP.classList.replace('p--darkmode--on', 'p--darkmode--off');
        social.forEach(element =>
            element.classList.replace('social--darkmode--on', 'social--darkmode--off'));
    });
}