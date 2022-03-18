<!--! FORMULAIRE POUR ENREGISTRER UN NOUVEAU PROJET EN BDD -->

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Admin-Submit-Project</title>
        <link rel="stylesheet" href="main.scss">
    </head>
    <body>
        <form action="./requetes.php" method="post">
            <table>
                <input type="text"  name="titre"         placeholder="Titre du projet"               required>
                <input type="text"  name="resume"        placeholder="Résumé du projet"              required>
                <input type="date"  name="date"          placeholder="Date de création du projet"    required>
                <input type="file"  name="path-image"    placeholder="Image illustrant le projet"    required>
                <input type="url"   name="url"           placeholder="URL vers le projet"            required>
            <input type="submit">
        </form>
    </body>
</html>