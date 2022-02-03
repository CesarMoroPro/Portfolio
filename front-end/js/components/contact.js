let global      = document.getElementById('global');
let contact     = document.querySelectorAll('.contactForm');
let screen      = document.getElementById('screen');
let divForm     = document.createElement('div');
let cross       = document.createElement('div');
let closedForm  = true;


contact.forEach(element => {
    element.addEventListener('click', openForm)
});



//^ Creation of function to open the form
function openForm() {
    //^ closedForm becomes FALSE
    closedForm = false;
    //^ Stop the eventListener on contact elements
    contact.forEach(element => {
        element.removeEventListener('click', openForm)
    });
    //^ Cross is active to close the form
    cross.addEventListener('click', closeForm);

       
    //^ Add a class to the form space
    screen.classList.add('blurryScreen');

    //^ Add the new div and others elements
    //? New div
    global.append(divForm);
    divForm.classList.add('contact-form');
    divForm.innerHTML = "<h3 class='home__content__title__h3 title-form'>Formulaire de contact</h3>";
    
    //? Cross
    divForm.append(cross);
    cross.innerHTML = "<i class=\"far fa-times-circle cross-to-quit\"></i>";
    cross.addEventListener('mouseover', () => {
        cross.classList.add('on-cross-to-quit');
    });
    cross.addEventListener('mouseout', () => {
        cross.classList.remove('on-cross-to-quit');
    });
    cross.addEventListener('click', () => {
        cross.classList.remove('on-cross-to-quit');
    });
    
};

//^ Creation of function to close the form
function closeForm() {
    //^ closedForm becomes TRUE
    closedForm = true;
    contact.forEach(element => {
        element.addEventListener('click', openForm)
    });

    //^ Replace class of the space form
    screen.classList.replace('blurryScreen', 'unblurryScreen');
    //^ Removing element
    divForm.remove();
};