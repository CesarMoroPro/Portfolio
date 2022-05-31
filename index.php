<?php 
    require_once('./back-end/Models/Projects.php');
?>

<body class="home">

    <div id="global">
        <div id="screen" class="unblurryScreen">
            <?php
                require_once('./back-end/Views/Pages/Home.php');
            ?>
        </div>
        
        
        <?php
            require_once('./back-end/Views/Components/Contact-form.php'); 
        ?>
    </div>

    <script type="module" src="./main.js"></script>
</body>