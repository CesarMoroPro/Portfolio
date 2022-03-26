//? ======================== VARIABLES =======================================
//* Import de la variable activatedDarkmode
import { activatedDarkmode } from "../utils/darkmode.js";

let global                                  = document.getElementById('global');
let contact                                 = document.querySelectorAll('.contactForm');
let screen                                  = document.getElementById('screen');
let form                                    = document.querySelector('.contact-form');
let cross                                   = document.querySelector('.cross-to-quit');
let inputs                                  = document.querySelectorAll('input');
let labels                                  = document.querySelectorAll('.form-fields__legend');
let textarea                                = document.querySelector('textarea');

let closedForm                              = true;


//? =============================== FONCTIONS ================================
function openForm() {
    console.log(activatedDarkmode);
    //~ DARKMODE ON
    if(activatedDarkmode === true){
    labels.forEach(element =>
        element.classList.add('legend--darkmode--on'));
    }

    //? 1 - closedForm becomes FALSE
    closedForm = false;
    
    //? 2 - Stop the eventListener on contact elements
    contact.forEach(element => {
        element.removeEventListener('click', openForm)
    });
    //? 3 - Add a class to the backgound form space
    screen.classList.replace('unblurryScreen', 'blurryScreen');

    //? 4 -  Changing the form section class
    form.classList.replace('contact-form', 'contact-form--active');

    //? 5 - Changing the input, textearea and button class
    inputs.forEach(input =>
        input.addEventListener('focus', () => {
            input.classList.add('input--active');
        }));
    inputs.forEach(input =>
        input.addEventListener('blur', () => {
            input.classList.remove('input--active');
        }));

    textarea.addEventListener('focus', () => {
            textarea.classList.add('input--active');
        });
    textarea.addEventListener('blur', () => {
            textarea.classList.remove('input--active');
        });

    //? 6 - Active the cross to close the form
    cross.addEventListener('click', closeForm);
};

function closeForm() {
    
    //? 1 - closedForm becomes TRUE
    closedForm = true;
    //? 2 - Active the eventListener on contact elements
    contact.forEach(element => {
        element.addEventListener('click', openForm)
    });
    //? 3 - Remove the class to the background form space
    screen.classList.replace('blurryScreen', 'unblurryScreen');

    //? 4 - Changing the form section class
    form.classList.replace('contact-form--active', 'contact-form');
};



//? ==================== TRAITEMENT ============================================
contact.forEach(element => {
    element.addEventListener('click', openForm)
});