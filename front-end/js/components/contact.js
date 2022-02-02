let global = document.getElementById('global');
let contact = document.querySelectorAll('.contactForm');
let screen = document.getElementById('screen');

contact.forEach(element => {
    element.addEventListener('click', formScreen);
        
    //^ Creation of function
    function formScreen() {
        let elements  = document.querySelectorAll('.hide-for-form');

        //^ Functions to get and manipulate elements
        (function hideElements() {
            
            elements.forEach(element =>
                element.classList.replace('notHiding', 'hiding'));
        })();

        function quitTheForm() {
            divForm.remove();

            elements.forEach(element =>
                element.classList.replace('hiding', 'notHiding'));

            screen.classList.remove('blurryScreen');

        };

        
        //^ ClassList
        screen.classList.add('blurryScreen');

        //^ Creation of new elements
        //? New div for the form
        let divForm = document.createElement('div');
        global.append(divForm);
        divForm.classList.add('contact-form');
        divForm.innerHTML = "<h3 class='home__content__title__h3 title-form'>Formulaire de contact</h3>";
        

        //? New div for the cross to quit
        let cross = document.createElement('div');
        divForm.append(cross);
        cross.innerHTML = "<i class=\"far fa-times-circle cross-to-quit\"></i>";

        cross.addEventListener('click', quitTheForm);
        
    };
});