<!DOCTYPE html>
<?php 
include "./php/database.php";
header("Content-Type: text/html;charset=utf-8");
$conn = OpenCon();
$conn->query("SET NAMES 'utf8'");  // permet d'éviter les problèmes de carractère comme les accents ou autres

$querie = "SELECT * FROM projects";
?>


<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/41b0df0c75.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/style.css">
    <title>Antoine PAUTHIER | Portefolio</title>
</head>
<body>
    <header>
        <div class="containerHam">
            <h1 class="name">antoine.</h1>
            <nav class="hamburger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </nav>
        </div>
    </header>
    <div class="wrapperNavContainer">
        <div class="navBarContainer">
                <div class="navBar">
                    <div class="navElem"> <a href="#accueil">accueil</a></div>
                    <div class="navElem"> <a href="#apropos">à propos</a></div>
                    <div class="navElem"> <a href="#projets">projets</a></div>
                    <div class="navElem"> <a href="#competences">compétences</a></div>
                </div>
                <div class="buttons">
                    <div class="button">
                        <p class="infoLike">liked !</p>
                        <a href="#">
                            <i class="fas fa-heart like"></i>
                        </a>
                    </div>
                    <div class="contact">
                       <a href="mailto:antoinepauthierusd@gmail.com
                       ?subject=Contacte via Site Web
                       &body=Merci de votre intérêt"><i class="fas fa-envelope contactIcon"></i></a> 
                    </div>
                </div>
        </div>
    </div>
    <section class="mainSection">
        <div class="mainSectionContainer"></div>
        <h1>développeur web junior</h1>
        <div class="mouse">
           <a href="#about"> <i class="fas fa-mouse fa-2x"></i></a>
        </div>
    </section>
    <section id="about" class="aboutSection">
        <div class="imgProfil">
            <img src="./img/profilTemp.png" width="30%" height="auto" alt="" srcset="">
        </div>
        <div class="presentation">
            <h1 class="presentationTitle" id="typeWriter"> <span style="opacity: 0;">empty</span></h1>
            <p class="paraPresentation">
                Depuis très jeune <span class="bold"> passionné </span>d'informatique et par les nouvelles technologies, j’ai découvert par hasard le monde du développement et plus particulièrement le monde du dévéloppement web. </br> </br>
                Par la suite, j’ai commencé à me former plus sérieusement en <span class="bold">autodidacte</span>  aux languages web de base à savoir le HTML, CSS, JAVASCRIPT, PHP. </br></br>
                Je suis actuellement en deuxième année de BTS SNIR et je compte l’année prochaine intégrée l’école <a href="https://www.ecv.fr/" target="_blank"> ECV Digital</a> pour faire un <span class="bold">mastère développement web</span> en alternance.
            </p>
        </div>
    </section>
    <div class="containerHobbies">
        <div class="hobbies">
            <div class="typeWriterHob">
                <p id="typeWriterHobText"><span style="opacity: 0;">empty</span></p>
            </div>
        </div>
    </div>
    <section class="project">
        <h1 class="titleProjectSection">mes projets</h1>
        <div class="projects">
            <?php
                $result = $conn->query($querie);
                while ($row = $result->fetch_assoc()) {

                    $tags = explode(',', $row['pj_tags']); // liste des tags récuperer en bdd
            ?>
                <div class="projectCard">
                    <div class="projectImage"> <img src=img/<?php echo $row["pj_image"]?> alt="Illustration du projet"></div>
                    <div class="tags"><span class="tag"><i class="fas fa-tags tagsIcon"></i> <?php echo $tags[0] ?></span>
                        <span class="tag"><i class="fas fa-tags tagsIcon"></i><?php echo $tags[1] ?></span>
                        <span class="tag"><i class="fas fa-tags tagsIcon"></i><?php echo $tags[2] ?></span></div>
                    <div class="projectInfo">
                        <h2 class="projectTitle"><?php echo $row["pj_nom"]?></h2>
                        <p class="projectResume"><?php echo $row["pj_resume"]?></p>
                        <p class="status"> Statut : <?php echo $row['pj_status'] ? "fini" : "en cours" ?></p>
                        <button class="projectButton"><a href="<?php echo $row["pj_href"]?>" target="_blank" class="projectLink">Voir le projet</a></button>
                    </div>

                </div>
            <?php  
            }  
            ?>
        </div>
    </section>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mobile-detect/1.4.4/mobile-detect.min.js"></script>
    <script src="./js/typeWriter.js"></script>
    <script src="./js/script.js"></script>

</body>
</html>