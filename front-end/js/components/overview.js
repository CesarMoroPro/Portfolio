//* RÉCUPÉRATION DE CHAQUE ÉLÉMENT DE TOUTES LES PROJECT-CARDS + OVERVIEWS
let cardProjects        = document.querySelectorAll('.home__content__project-card');
let overviews           = document.querySelectorAll('.home__content__overview__div');
let goToProjectButtons  = document.querySelectorAll('.home__content__project-card-opened__goto');

let breakPointMinWidth  = 740; // Selon la variable définie en Scss > utils > variables.scss
                                // À modifier manuellement si changement en Scss

//* VARIABLES GLOBALES
let click = false;



//* TRAITEMENT GLOBAL DES ANIMATIONS CARTES
for(let i = 0; i < cardProjects.length; i++){
    for(let j = 0; j < overviews.length; j++) {
        if(i === j){

            for(let project of cardProjects){
                // Je récupère toutes mes cartes de projet, et je range chacune d'elle dans la variable projet

                function toggleCardOverview() {
                
                    if(click === false) {

                        let overview = overviews[j];
                        // insertion de la div sous la carte de projet
                        overview.classList.remove('display-none');

                        // rendre l'overview cliquable dès le premier clic
                        overview.addEventListener('click', () => {
                            overview.classList.add('display-none');
                            click = false;
                        });
                        
                        
                        // click passe à true puisqu'on a cliqué sur la carte
                        click = true;


                    } else {
                        overviews.forEach(overview => {
                            overview.addEventListener('click', () => {
                                overview.classList.add('display-none');
                                click = false;
                            })
                        });
                    }


                }
                

                project.addEventListener('click', toggleCardOverview);

            }


        }
    }
}
    


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

