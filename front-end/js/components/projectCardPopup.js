//* IMPORT DE LA FONCTION CRÉANT LE CONTENU HTML D'UNE POPUP
import { createPresentationCard } from '../exports/presentationCard.js';

//* RÉCUPÉRATION DE CHAQUE ÉLÉMENT DE TOUTES LES PROJECT-CARDS
let cardProjects        = document.querySelectorAll('.home__content__project-card');
let titleRealisations   = document.getElementById('title-real');
let goToProjectButtons  = document.querySelectorAll('.home__content__project-card-opened__goto');

let deviceWidth         = screen.width;
console.log("Dimensions Width : " + deviceWidth + "px");
let breakPointMinWidth  = 3000; // Selon la variable définie en Scss > utils > variables.scss
                                // À modifier manuellement si changement en Scss

//* VARIABLES GLOBALES
let click = false;



//* TRAITEMENT GLOBAL DES ANIMATIONS CARTES
cardProjects.forEach((project) => { 
    // Je récupère toutes mes cartes de projet, et je range chacune d'elle dans la variable projet

    project.addEventListener('click', goToEachNewDiv);


    //* FONCTION N1
    function goToEachNewDiv() {

        //* TRAITEMENT CONDITIONNEL
        if(deviceWidth < breakPointMinWidth){
            toggleCardPopup();
        } else {
            toggleCardOverview();
        }


        //* FONCTIONS N2
        function toggleCardPopup() {

            if(click === false){
                // click passe à true puisque la carte est cliquée
                click = true;

                // disparition de la carte de projet
                project.classList.add('display-none');

                // création de l'élément popup
                let popup = document.createElement('div');

                // insertion de l'élément popup à la place de la carte
                titleRealisations.append(popup);
                popup.classList.add('popup');

                // ajouter le contenu dans la popup
                createPresentationCard(popup);


                // rendre la popup cliquable pour repasser click à false et masquer la popup
                popup.addEventListener('click', () => {
                    click = false;
                    popup.remove();
                    project.classList.remove('display-none');
                })
            }
        }

        function toggleCardOverview() {
            if(click === false) {
                // click passe à true puisqu'on a cliqué sur la carte
                click = true;

                // création de la div qui doit apaparaître sous la carte de projet
                let overview = document.createElement('div');
                
                // insertion de la div sous la carte de projet
                let projectsSection = document.querySelector('.home__content__projects');
                projectsSection.append(overview);
                projectsSection.classList.add('column');
                overview.classList.add('overview');

                // ajouter le contenu dans l'overview depuis le module exporté
                createPresentationCard(overview);

                // rendre l'overview cliquable pour repasser click à false et masquer l'overview
                overview.addEventListener('click', () => {
                    overview.remove();
                    click = false;
                })

                // rendre la carte de projet cliquable pour fermer aussi l'overview
                project.addEventListener('click', () => {
                    overview.remove();
                    click = false;
                    console.log('%c' + click, 'color: #f0f; font-size: 1.5rem; background-color:white');
                })
                console.log('%c' + click, 'color: #f0f; font-size: 1.5rem; background-color:white');
            }
        }
        

        // function activeButton() {
        //     goToProjectButtons.forEach((button) => {
        //         // Je récupère tous les boutons qui redirigent vers le projet de la carte cliquée

        //         button.addEventListener('click', () => {
        //             console.log("redirection à définir par la suite");
        //         });
        //     });
        // }
    }
});
