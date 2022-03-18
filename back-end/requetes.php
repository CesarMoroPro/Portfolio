<?php

// INCLUSION DU FORMULAIRE DE NOUVEAU PROJET
include('./admin-submit-project.php');

if(!empty($_POST)){

    $titre      = $_POST['titre'];
    $resume     = $_POST['resume'];
    $date       = $_POST['date'];
    $image      = $_POST['path-image'];
    $url        = $_POST['url'];

    // Connexion à la BDD
    $bdd = new PDO('mysql:host=localhost;dbname=Portfolio;charset=utf8', 'root', 'root');

    // Récupération en BDD
    $req = $bdd->query('SELECT * FROM Projets');
    
    /*
    echo '<br>';
    echo '<br>';
    echo '<hr />';
    echo $titre.'<br>';
    echo $resume.'<br>';
    echo $date.'<br>';
    echo $image.'<br>';
    echo $url.'<br>';
    echo '<hr />';
    */

    // Insertion en BDD
    $req = $bdd->prepare('INSERT INTO Projets(titre, resume, date, path-image, url)
                            VALUES(?, ?, ?, ?, ?)
                        ');
    $req->execute(array($titre, $resume, $date, $image, $url));
}