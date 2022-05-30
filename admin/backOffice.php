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
                <div>
                    <input type="text"  name="titre"         placeholder="Titre du projet"               required>
                </div>
                <div>
                    <input type="text"  name="resume"        placeholder="Résumé du projet"              required>
                </div>
                <div>
                    <input type="date"  name="date"          placeholder="Date de création du projet"    required>
                </div>
                <div>
                    <input type="file"  name="path-image"    placeholder="Image illustrant le projet"    required>
                </div>
                <div>
                    <input type="url"   name="url"           placeholder="URL vers le projet"            required>
                </div>
            </table>
           
            <div>
                <input type="submit">
            </div>
        </form>
    </body>
</html>