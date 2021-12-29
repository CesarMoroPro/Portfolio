<?php

$projects = [
                [
                    "titre"     => "Portfolio",
                    "resume"    => "Comme pour tout créateur, chaque projet que je réalise alimente mon portfolio. Vous vous trouvez justement sur cette réalisation.",
                    "image"     => "../front-end/assets/img/portfolio-card.jpg",
                    "url"       => "http://google.com",
                    "date"      => "28 12 2021"
                ],
                [
                    "titre"     => "Voyages",
                    "resume"    => "Des aurores boérales de Norvège aux forêts tropicales des îles d'Hawaii, parcourez ce projet pour découvrir une partie du monde.",
                    "image"     => "../front-end/assets/img/voyages-card.jpeg",
                    "url"       => "http://oclock.io",
                    "date"      => "05 09 2021"
                ],
                [
                    "titre"     => "Cinéma",
                    "resume"    => "Avec DeadPool, ça débite et ça déboite ! Wham !",
                    "image"     => "../front-end/assets/img/test6-card.jpg",
                    "url"       => "https://www.ironman.com",
                    "date"      => "01 02 2021"
                ]
];
?>


<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>César MORO : Portfolio</title>
    <!-- link main css-->
    <link rel="stylesheet" href="../front-end/css/main.css"/>
    
    <!-- link CDN swiper css-->
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
            <p class="home__content__text-normal">Bonjour à tous, et merci de vous intéresser à moi.<br> Une petite présentation personnelle s'impose, avant de découvrir les projets de développement web sur lesquels j'ai travaillé.</p>
            <p class="home__content__text-normal">Avant de m'orienter dans le développement web et web mobile, j'étais Responsble d'inventaires Europe pour une société spécialisée dans ce domaine. J'y ai offert mes services, en France comme à l'étranger, du Portugal à la Roumanie en passant par la Norvège ; Et dans différents secteurs d'activités, du petit magasin Retail au gros entrepôt de valeur marchande quelques dizaines de millions d'euros.<br>
            J'y ai développé de la rigueur, de la relation clients, et une totale autonomie. De l'autonomie, oui ! Toutefois, j'étais régulièrement amené à travailler en équipe avec mes collègues, et c'est avec plaisir que nous collaborions tous ensemble, à l'écoute des idées de chacun.</p>
            <p class="home__content__text-normal">Est ensuite venu pour moi le temps de la reconversion. Par manque de temps dans ma vie personnelle, mais également par de nouvelles envies de vivre.<br>
            J'ai suivi une formation intensive d'environ 6 mois avec l'école O'clock dont les cours sont assurés par des formateurs eux-mêmes professionnels expérimentés du développement web.<br>
            L'un des points forts de leur pédagogie : nous apprendre à apprendre. Alors, bien loin de prétendre savoir tout faire, avec du travail il est possible de faire beaucoup de choses.<br>
            Voilà pourquoi vous pouvez me faire confiance pour la création et le développement de votre projet web.</p>
        </section>

        <h3 class="home__content__title__h3"><i class="icons fas fa-laptop-code"></i>Réalisations de Développement Web</h3>
        <!--   
        <div class="global-projects">
            <div class="grid ">
                <button class="grid-item javascript"    data-filter="test-1">JavaScript</button>
                <button class="grid-item jquery"        data-filter="test-2">jQuery</button>
                <button class="grid-item swiperjs"      data-filter="test-3">Swiper</button>
                <button class="grid-item isotope"       data-filter="test-4">Isotope</button>
                <button class="grid-item sass"          data-filter="test-5">Sass</button>
            </div>
        -->

            <section class="home__content__projects">
            <?php foreach($projects as $project): ;?>
                <div class="home__content__project-card">
                    <a class="home__content__project-card__divs__div-link" href="<?= $project['url']; ?>"><div class="home__content__project-card__divs">
                        <div class="home__content__project-card__divs__div-text">
                            <p class="home__content__project-card__text transition__text__disappears"><?= $project['resume'];?></p>
                            <p class="home__content__project-card__text-date transition__date__disappears">Date de dernière mise à jour : <span class="date"><?= $project['date']; ?></span></p>
                        </div>

                        <div class="home__content__project-card__divs__div-img">
                            <h2 class="home__content__project-card__title transition__title__appears">
                                <i class="icons fa-solid fa-map-location-dot"></i>
                                    <?= $project['titre'];?>
                            </h2>
                            <img class="home__content__project-card__img unblurry" src="<?= $project['image'];?>" >
                        </div>    
                    </div></a>
                </div>
            <?php endforeach; ?>
            </section>
        </div>
    </main>

    <footer class="home__footer">
        <p id="copyright">César MORO Copyright <span class="year">'Date en JS'</class></p>
        <a class="link" href="../front-end/html/contact.html" alt="Accéder au formulaire de contact">Contact</a>
        <a class="link" href="../front-end/html/mentions_legales.html" alt="Accéder aux mentions légales">Mentions légales</a>
    </footer>

    <script type="module" src="../main.js"></script>
</body>