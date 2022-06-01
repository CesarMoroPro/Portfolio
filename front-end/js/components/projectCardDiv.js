//* RÉCUPÉRATION DE CHAQUE ÉLÉMENT DE TOUTES LES PROJECT-CARDS
let cardProjects        = document.querySelectorAll('.home__content__project-card');
let projectViews        = document.querySelectorAll('.home__content__project-card-opened__div');
let goToProjectButtons  = document.querySelectorAll('.home__content__project-card-opened__goto');

//* VARIABLES GLOBALES
let click = false;


cardProjects.forEach((project) => { 
    // Je récupère toutes mes cartes de projet, et je range chacune d'elle dans la variable projet
    
    projectViews.forEach((view) => {
        // Je récupère toutes mes vues d'ensemble, et je range chacune d'elle dans la variable view

        goToProjectButtons.forEach((button) => {
            // Je récupère tous les boutons qui redirigent vers le projet de la carte cliquée

            //? FONCTIONS
            function toggleCardAndView() { 
                // Fonction pour cacher la carte de projet cliquée et afficher sa vue d'ensemble
                // et manipulation inverse
                
                if(click === false){
                    project.classList.add('project-card-hidden');
                    view.classList.remove('view-hidden');
                    button.classList.remove('view-hidden');

                    click = true;
                } else {
                    project.classList.remove('project-card-hidden');
                    view.classList.add('view-hidden');
                    button.classList.add('view-hidden');

                    click = false;
                }
            }


    //? TRAITEMENT
    project.addEventListener('click', toggleCardAndView);
    view.addEventListener('click', toggleCardAndView);
    button.addEventListener('click', () => {
        console.log("redirection à définir par la suite");
        toggleCardAndView();
    })



        });
    });
});