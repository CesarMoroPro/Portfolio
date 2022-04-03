<?php 

require_once('projects.php');

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
    <!-- <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/> -->

    <!-- link fontawesome css-->
    <link rel="stylesheet" href="../node_modules/@fortawesome/fontawesome-free/css/all.css">

    <!-- link google fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&family=Zen+Dots&display=swap" rel="stylesheet">
</head>

<body class="home">

    <div id="global">
        <div id="screen" class="unblurryScreen">
            
            <header class="home__header">
                <div class="home__header__profil">
                    <div class="home__header__profil__id">
                        <img class="home__header__profil__id__pic" src="../front-end/assets/img/portfolio-profil-majorque.jpg" alt="Photo de profil de César MORO">
                        <div class="home__header__profil__id__name">
                            <div class="name-block">
                                <div class="underline underline__name"></div>
                                <h1 class="home__header__profil__id__name__h1 clignoteLight">César <br>&nbsp&nbsp&nbsp&nbspMORO</h1>
                            </div>    
                        </div>
                    </div>
                    <div class="home__header__profil__social">
                        <a alt="lien interne vers le formulaire de contact" class="contactForm"><i class="home__header__profil__social__fab fas fa-envelope-square"></i></a>
                        <a href="https://www.linkedin.com/in/c%C3%A9sar-moro-276b13162/" alt="lien ouvrant un nouvel onglet vers le profil LinkedIn de César MORO"><i class="home__header__profil__social__fab fab fa-linkedin"></i></a>
                        <a href="https://github.com/CesarMoroPro" alt="lien ouvrant un nouvel onglet vers le profil GitHub de César MORO"><i class="home__header__profil__social__fab fab fa-github-square"></i></a>
                    </div>
                </div>

                <div class="home__header__title">
                    <div class="overline__site-title"></div>
                    <h2 class="home__header__title__h2">Portfolio</h2>
                    <div class="underline underline__site-title"></div>

                    <div class="darkmodeSelector">
                        <p class="darkmodeSelector__button">Basculer en mode sombre</p>
                        <!-- <i id="icon--darkmode" class="pAndIcon--darkmode--off far fa-times-circle"></i> -->
                    </div>
                </div>
            </header>

            <main class="home__content">
                <section id="home__content__bio" class="hide-for-form">
                    <h3 class="home__content__title__h3 hide-for-form"><i class="icons far fa-user"></i>Hello World !</h3>
                    <p class="home__content__text-normal p">Bonjour à tous, et merci de vous intéresser à moi.<br>
                    Rigueur, relation clients, autonomie.<br>
                    Vous allez vraiment lire tout ça ? ;)
                </section>

                <h3 class="home__content__title__h3 hide-for-form"><i class="icons fas fa-laptop-code"></i>Mes réalisations</h3>
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

                        <!--//? =========== CARTES DE PROJETS DYNAMIQUES ============ -->
                        <?php 
                            for($i = 0; $i < count($projects); $i++): { 
                                $project = $projects[$i];
                        ?>
                                <div class="home__content__project-card">
                                    <a class="home__content__project-card__divs__div-link" href="<?= $project['url'];?>">
                                        <div class="home__content__project-card__divs">
                                            <div class="home__content__project-card__divs__div-text">
                                                <p class="home__content__project-card__text infos transition__allP__disappears"><?= $project['excerp'];?></p>
                                                <p class="home__content__project-card__text-date infos transition__allP__disappears">Date de création : <span class="transition__date__disappears_date"><?= $project['date']; ?></span></p>
                                            </div>

                                            <div class="home__content__project-card__divs__div-img">
                                                <h2 class="home__content__project-card__title transition__title__appears">
                                                    <i class="icons fa-solid fa-map-location-dot"></i>
                                                        <?= $project['title'] ?>
                                                </h2>
                                                <img class="home__content__project-card__img unblurry" alt="Image d'illustration de la carte" src="<?= $project['image'];?>">
                                            </div>    
                                        </div>
                                    </a>
                                </div>
                        <?php } endfor; ?>
                    </section>
            </main>
        </div>
        
    <!--! CETTE SECTION EST PAR DÉFAUT EN DISPLAY: NONE-->
        <section class="contact-form">
        

            <h3 class="home__content__title__h3 title-form">Formulaire de contact</h3>
                <i class="icons far fa-times-circle cross-to-quit"></i>

            <div class="form-fields">
                <div class="form-fields__two-fields name-fields form-fields__marges">
                    <label for="" class="form-fields__legend">Votre identité :</label>
                    <div class="form-fields__field name-fields__family"><input type="text" placeholder="Smith"></div>
                    <div class="form-fields__field name-fields__first"><input type="text" placeholder="John"></div>
                </div>

                <div class="form-fields__two-fields contact-fields form-fields__marges">
                    <label for="" class="form-fields__legend">Vos coordonnées :</label>
                    <div class="form-fields__field contact-fields__phone"><input type="number" placeholder="01 02 03 04 05"></div>
                    <div class="form-fields__field contact-fields__mail"><input type="email" placeholder="john.smith@example.com"></div>
                </div>

                <div class="form-fields__two-fields other-fields form-fields__marges">
                    <label for="" class="form-fields__legend">Pays :</label>
                    <div class="form-fields__field other-fields__country"><input type="text" placeholder="France"></div>
                </div>

                <div class="form-fields__field textarea form-fields__marges">
                    <label for="" class="form-fields__legend">Votre demande :</label>
                    <textarea placeholder="Saisissez votre demande" name="" id="" cols="30" rows="10"></textarea></div>

                <input type="submit" class="form-fields__field send-button form-fields__marges" value="Envoyer"></input>
            </div>

        </section>

        <footer class="home__footer hide-for-form">
            <p id="copyright" class="p">César MORO Web Development - Copyright <span class="year">Date en JS</span></p>
            <a class="link contactForm" href="#" alt="lien interne vers le formulaire de contact">Contact <i class="home__header__profil__social__fab__mini fas fa-envelope-square social--darkmode--off"></i></a>
            <a class="link" href="./mentions_legales.html" alt="Accéder aux mentions légales">Mentions légales</a>
        </footer>
    </div>

    <script type="module" src="../main.js"></script>
</body>