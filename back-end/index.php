<?php

$projects = [
                ["portfolio"    =>      ["titre"    => "Portfolio",
                                        "excerp"    => "Comme pour tout créateur, chaque projet que je réalise alimente mon portfolio. Vous vous trouvez justement sur cette réalisation."
                                        ],
                "voyages"       =>      ["titre"    => "Voyages",
                                        "exercp"    => "Des aurores boérales de Norvège aux forêts tropicales des îles d'Hawaii, parcourez ce projet pour découvrir une partie du monde."
                                        ],
                "cinéma"        =>      ["titre"    => "Cinéma",
                                        "excerp"    => "Avec DeadPool, ça débite et ça déboite ! Wham !"
                                        ],
                "sports"        =>      ["titre"    => "Sports",
                                        "excerp"    => "Plongez dans le Pacifique avec les requins, ou prenez de la hauteur en wingsuit au-dessus du monde"
                                        ]
                ]
];

var_dump($projects . "<br>");
echo "<br>";
// $projectsLength = count(projects);
// for (i = 0; i <= projects-length; i++){
//     $project = project[i];
// }
// var_dump(project);

?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>César MORO : Portfolio</title>
    <!-- link main css-->
    <link rel="stylesheet" href="../front-end/css/main.css"/>
    
    <!-- link swiper css-->
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>
    
    <!-- link fontawesome css-->
    <link rel="stylesheet" href="../node_modules/@fortawesome/fontawesome-free/css/all.css">

    <!-- link google fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&family=Zen+Dots&display=swap" rel="stylesheet">
</head>

<body class="home">

    <header class="home__header">
        <div class="home__header__profil">
            <div class="home__header__profil__id">
                <img class="home__header__profil__id__pic" src="../front-end/assets/img/portfolio-profil-majorque.jpg" alt="Photo de profil de César MORO">
                <div class="home__header__profil__id__name">
                    <h1 class="home__header__profil__id__name__h1 clignoteLight">César <br>&nbsp&nbsp&nbsp&nbspMORO</h1>
                </div>
            </div>
            <div class="home__header__profil__social">
            <a href="https://www.linkedin.com/in/c%C3%A9sar-moro-276b13162/" alt="lien vers le profil LinkedIn de César MORO"><i class="home__header__profil__social__fab fab fa-linkedin"></i></a>
            <a href="https://github.com/CesarMoroPro" alt="lien vers le profil GitHub de César MORO"><i class="home__header__profil__social__fab fab fa-github-square"></i></a>
            <a href="https://twitter.com/CesarMoroKraken" alt="lien vers le compte Twitter de César MORO"><i class="home__header__profil__social__fab fab fa-twitter-square"></i></a>
            </div>
        </div>

        <div class="home__header__title">
            <div class="overline__site-title"></div>
            <h2 class="home__header__title__h2">Portfolio</h2>
            <div class="underline__site-title"></div>
        </div>
    </header>


    <main class="home__content">
        <section id="home__content__bio">
            <h3 class="home__content__title__h3"><i class="icons far fa-user"></i>Mini-bio</h3>
            <p class="home__content__text-normal">Bonjour à tous, et merci de vous intéresser à moi.<br>
            Une petite présentation personnelle s'impose, avant de découvrir les projets de développement web sur lesquels j'ai travaillé.</p>
            <p class="home__content__text-normal">Avant de m'orienter dans le développement web et web mobile, j'étais Responsble d'inventaires Europe pour une société spécialisée dans ce domaine. J'y ai offert mes services, en France comme à l'étranger, du Portugal à la Roumanie en passant par la Norvège ; Et dans différents secteurs d'activités, du petit magasin Retail au gros entrepôt de valeur marchande quelques dizaines de millions d'euros.<br>
            J'y ai développé de la rigueur, de la relation clients, et une totale autonomie. De l'autonomie, oui ! Toutefois, j'étais régulièrement amené à travailler en équipe avec mes collègues, et c'est avec plaisir que nous collaborions tous ensemble, à l'écoute des idées de chacun.</p>
            <p class="home__content__text-normal">Est ensuite venu pour moi le temps de la reconversion. Par manque de temps dans ma vie personnelle, mais également par de nouvelles envies de vivre.<br>
            J'ai suivi une formation intensive d'environ 6 mois avec l'école O'clock dont les cours sont assurés par des formateurs eux-mêmes professionnels expérimentés du développement web.<br>
            L'un des points forts de leur pédagogie : nous apprendre à apprendre. Alors, bien loin de prétendre savoir tout faire, avec du travail il est possible de faire beaucoup de choses.<br>
            Voilà pourquoi vous pouvez me faire confiance pour la création et le développement de votre projet web.</p>
        </section>

        <h3 class="home__content__title__h3"><i class="icons fas fa-laptop-code"></i>Projets de Web'Developement</h3>

        <section class="home__content__projects">
            
            
                <div class="home__content__project-card">
                    <div class="home__content__project-card__divs">
                        <div class="home__content__project-card__divs__div-text">
                            <p class="home__content__project-card__text"><?= project[1]; ?></p>
                            <p class="home__content__project-card__text-date">Date de dernière mise à jour : <span class="date">25 mars 2021</span></p>
                        </div>

                        <div class="home__content__project-card__divs__div-img">
                            <h2 class="home__content__project-card__title"><i class="fa-solid fa-map-location-dot"></i>
                                <a class="link link-title" href="http://google.com" alt="lien vers le projet Porfolio">
                                    <?= project[0]; ?>
                                </a>
                            </h2>
                            <a class="home__content__project-card__img-link" href="http://google.com" alt="lien vers le projet Portfolio">
                                <img class="home__content__project-card__img" src="../front-end/assets/img/portfolio-card.jpg">
                            </a>
                        </div>    
                    </div>
                </div>

               
        </section>
    </main>

    <footer class="home__footer">
        <p id="copyright">César MORO Copyright <span class="year">'Date en JS'</class></p>
        <a class="link" href="../front-end/html/contact.html" alt="Accéder au formulaire de contact">Contact</a>
        <a class="link" href="../front-end/html/mentions_legales.html" alt="Accéder aux mentions légales">Mentions légales</a>
    </footer>

    <script type="module" src="../main.js"></script>
</body>