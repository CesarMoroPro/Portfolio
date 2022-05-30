<?php 
    require_once('./back-end/Views/Utils/Doctype.php');
    require_once('./back-end/Modeles/projects.php');
?>

<body class="home">

    <div id="global">
        <div id="screen" class="unblurryScreen">
            <?php 
                require_once('./back-end/Views/Layout/Header.php'); 
                require_once('./back-end/Views/Pages/Home.php');
            ?>
        </div>
        
        
        <?php 
            require_once('./back-end/Views/Layout/Footer.php');
            require_once('./back-end/Views/Components/Contact-form.php'); 
        ?>
    </div>

    <script type="module" src="./main.js"></script>
</body>