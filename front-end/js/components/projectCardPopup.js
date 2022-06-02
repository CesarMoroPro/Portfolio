//* IMPORT DE LA FONCTION CRÉANT LE CONTENU HTML D'UNE POPUP
import { createPresentationCard } from './presentationCard.js';

//* RÉCUPÉRATION DE CHAQUE ÉLÉMENT DE TOUTES LES PROJECT-CARDS
let cardProjects        = document.querySelectorAll('.home__content__project-card');
let titleRealisations   = document.getElementById('title-real');
let projectNewDivs      = document.querySelectorAll('.home__content__project-card-opened__div');
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


                // rendre la popup cliquable pour repasser click à false
                popup.addEventListener('click', () => {
                    click = false;
                    popup.classList.add('display-none');
                    project.classList.remove('display-none');
                })
            }
        }

        function newDiv() {
            projectNewDivs.forEach((div) => {
                // Je récupère toutes mes vues d'ensemble, et je range chacune d'elle dans la variable view
                div.classList.add('popup');
                console.log('%c' + "nouvelle div créée", 'color: #f0f; font-size: 1.5rem; background-color:white');
            });
        };
        

        function activeButton() {
            goToProjectButtons.forEach((button) => {
                // Je récupère tous les boutons qui redirigent vers le projet de la carte cliquée

                button.addEventListener('click', () => {
                    console.log("redirection à définir par la suite");
                });
            });
        }
    }
});
