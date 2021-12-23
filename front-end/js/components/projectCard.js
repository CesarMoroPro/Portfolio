let projects =  {
                'portfolio' :   {
                                'title'     : 'Portfolio',
                                'excerp'    : 'JS : Comme pour tous créateurs, chaque projet réalisé alimente mon portfolio.\nVous vous trouvez justement sur ce projet.',
                                'date'      : 'Date de dernière mise à jour : '

                }
}

//^ Creation of the variables to be handled

let cardProject     = document.querySelector('.home__content__project-card');
let cardImage       = document.querySelector('.home__content__project-card__img');
let cardTitle       = document.querySelector('.home__content__project-card__title');
let cardLink        = document.querySelector('.home__content__project-card__img-link');
let cardText        = document.querySelector('.home__content__project-card__text')
let cardDate        = document.querySelector('.home__content__project-card__text-date');

let excerp = document.createElement('div');


//^ Creation of functions

function blurry() {
    cardImage.classList.add('blurry__img');
    cardLink.classList.add('blurry__img-link');

    cardTitle.style.display = 'none';
    cardText.style.display = 'none';
    cardDate.style.display = 'block';

    excerp.classList.add('blurry__div');
    cardTitle.append(excerp);
    excerp.textContent = projects['portfolio']['excerp']
    console.log(excerp);
};

function unblurry() {
    cardTitle.style.display = 'block';
    cardImage.classList.remove('blurry__img');
    cardLink.classList.remove('blurry__img-link');
    cardTitle.classList.remove('blurry__title');
    
    cardTitle.style.display = 'block';
    cardText.style.display = 'none';
    cardDate.style.display = 'none';

    excerp.remove();    
};


//^ Creation of EventListeners

cardImage.addEventListener('mouseover', blurry);


//^ Suppression of EventListeners
cardImage.addEventListener('mouseout', unblurry);