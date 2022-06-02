<?php 
    require_once('./back-end/Views/Utils/Head.php');
    require_once('./back-end/Views/Layout/Header.php')    
?>

<main class="home__content">
                <section id="home__content__bio" class="hide-for-form">
                    
                    <h3 class="home__content__title__h3 hide-for-form"><i class="icons far fa-user"></i>Hello World !</h3>
                    <p class="home__content__text-normal p">Bonjour à tous, et merci de vous intéresser à moi.</br></br>
                    Et si on évitait une trop longue description de moi-même? Je comprends bien que vous ayez envie de mieux connaître le potentiel futur partenaire que je pourrais être pour vous, et c'est bien normal.</br></br>
                    Au lieu de ça, je préfère vous proposer de porter votre attention sur les projets sur lesquels j'ai travaillé, et si mon travail vous plaît, pourquoi ne pas me contacter pour en savoir plus ? </br></br>
                    Bon, d'accord, quelques mots pour déjà vous orienter : rigueur, autonomie, savoir-être, bienveillance, valeurs et relations humaines... Ce que vous retrouverez dans une lettre de motivation classique, bien que ce soit réellement vrai.</br></br>
                    Alors j'ajoute : évasion, moto, adrénaline, aventure, running, protection des océans, et d'autres mais je vais m'arrêter là. N'hésitez donc pas à me contacter !
                    
                </section>

                <h3 class="home__content__title__h3 hide-for-form"><i class="icons fas fa-laptop-code"></i>Mes réalisations</h3>

                    <section class="home__content__projects">

                        <!--//? =========== CARTES DE PROJETS DYNAMIQUES ============ -->
                        <?php 
                            for($i = 0; $i < count($projects); $i++): { 
                                $project = $projects[$i];
                        ?>
                                <div class="home__content__project-card">
                                    <!--<a class="home__content__project-card__divs__div-link" href="<?php //$project['url'];?>">-->
                                        <div class="home__content__project-card__divs">
                                            <div class="home__content__project-card__divs__div-text">
                                                <p class="home__content__project-card__text infos transition__allP__disappears"><?= $project['excerp'];?></p>
                                                <p class="home__content__project-card__text-date infos transition__allP__disappears">Date de création : <span class="colored-date transition__allP__disappears"><?= $project['date']; ?></span></p>
                                            </div>

                                            <div class="home__content__project-card__divs__div-img">
                                                <h2 class="home__content__project-card__title transition__title__appears">
                                                        <?= $project['title'] ?>
                                                </h2>
                                                <img class="home__content__project-card__img unblurry" alt="Image d'illustration de la carte" src="<?= $project['image'];?>">
                                            </div>    
                                        </div>
                                    </a>
                                </div>
                        <?php 
                            require_once('./back-end/Views/Components/projectCardView.php');     
                            } endfor; ?>
                    </section>
            </main>
        
<?php require_once('./back-end/Views/Layout/Footer.php'); ?>