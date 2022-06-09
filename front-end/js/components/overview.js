//* RÉCUPÉRATION DE CHAQUE ÉLÉMENT DE TOUTES LES PROJECT-CARDS
let cardProjects        = document.querySelectorAll('.home__content__project-card');
let goToProjectButtons  = document.querySelectorAll('.home__content__project-card-opened__goto');

let deviceWidth         = screen.width;
let breakPointMinWidth  = 1000; // Selon la variable définie en Scss > utils > variables.scss
                                // À modifier manuellement si changement en Scss

//* VARIABLES GLOBALES
let click = false;



//* TRAITEMENT GLOBAL DES ANIMATIONS CARTES
cardProjects.forEach((project) => { 
    // Je récupère toutes mes cartes de projet, et je range chacune d'elle dans la variable projet

    function toggleCardOverview() {
        // obligation de rester en colonne pour une width inférieure à tablet-min-width
        if(screen.width < breakPointMinWidth){
            let projectsSection = document.querySelector('.home__content__projects');
            projectsSection.classList.add('column');
        }

        // récupération de la div overview
        let overview = document.querySelector('.home__content__overview');
        if(click === false) {
            // insertion de la div sous la carte de projet
            overview.classList.remove('display-none');

            // click passe à true puisqu'on a cliqué sur la carte
            click = true;

            // rendre l'overview cliquable dès le premier clic
            overview.addEventListener('click', () => {
                overview.classList.add('display-none');
                click = false;
            })
        } else {
            overview.addEventListener('click', () => {
                overview.classList.add('display-none');
                click = false;
            })
        }
    }
    

    project.addEventListener('click', toggleCardOverview);

});
    


/*    

    // function activeButton() {
    //     goToProjectButtons.forEach((button) => {
    //         // Je récupère tous les boutons qui redirigent vers le projet de la carte cliquée

    //         button.addEventListener('click', () => {
    //             console.log("redirection à définir par la suite");
    //         });
    //     });
    // }

*/ 

