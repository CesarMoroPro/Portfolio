<?php require_once('./back-end/Models/Tags.php');?>

<div class="home__content__overview__div display-none">
    <div class="home__content__overview__resume"><?= $project['excerp'];?></div>
    <div class="home__content__overview__techno-tags">
        <div class="home__content__overview__techno-tags__tags"><?= $tags[0];?></div>
        <div class="home__content__overview__techno-tags__tags"><?= $tags[1];?></div>
        <div class="home__content__overview__techno-tags__tags"><?= $tags[2];?></div>
        <div class="home__content__overview__techno-tags__tags"><?= $tags[3];?></div>
        <div class="home__content__overview__techno-tags__tags"><?= $tags[4];?></div>
        <div class="home__content__overview__techno-tags__tags"><?= $tags[5];?></div>
        <div class="home__content__overview__techno-tags__tags"><?= $tags[6];?></div>
        <div class="home__content__overview__techno-tags__tags"><?= $tags[7];?></div>
    </div>
    <div class="home__content__overview__slides">Ici seront insérées les slides des screenshots</div>
</div>
<div class="home__content__overview__goto view-hidden"><button class="home__content__overview__goto__button">Voir le projet <?= $project['title'];?></button></div>