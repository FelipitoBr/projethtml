
<?php
    $email = $_POST["username"];
    $mdp = $_POST["password"];
    
    function compteRebours() //fonction pour controler le temps d'inactivité d'un utilisateur
    {
        $tempOffLimite = 300; //temps d'inactivité permis en secondes
        $tempActuel = time();
        $dureeCo = $tempActuel - $_SESSION["temps"];

        if($dureeCo >= $tempOffLimite && $input==0)
        {
            session_destroy();
        }
    }
    function verifieLecture($file)
    {
        if(!$file)
        {
            die("Erreur Impossible d'ouvrir PATH, chemin non trouvé");
        }
    }
    
    function confirmationLogin($email,$mdp)
    {
        $PATH = "../database/userList.txt";
        $fichierUtilisateur = fopen($PATH,"r");
        $cleValidation = 0;

        verifieLecture($fichierUtilisateur);

        while($cleValidation != 1 && $buffer=fgets($fichierUtilisateur))
        {
            if(str_contains($buffer,$email) && str_contains($buffer,$mdp))
            {
                $cleValidation = 1;
            }

        }
        if($cleValidation != 1)
        {
            header("Location:../index.html");

        }
    }
    

    if($mdp==""|| $email=="")
        header("Location:../index.html");
   
    confirmationLogin($email,$password);
    
    session_start();
    $_SESSION["duree"] = time();
    $_SESSION["connecte"] = true;

    echo "here"


?>