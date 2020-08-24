<?php
$falseflag = false;
if(isset($_POST['password'])) {
  $password = $_POST['password'];
  if(!is_null($password)){
   if($password == "badanka"){ //Eller det lösenordet som tillhör den sidan
     header("Location: https://uppdrag.helloworld.se/ctf/level4_ciao.php"); //Redirect, ändra till den uppgift som kommer efter
   }else{
     $falseflag = true;
   }
  }
}

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>HW! CTF - Level 3</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- import the webpage's stylesheet -->
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Libre+Barcode+128+Text|Monoton&display=swap">
    <!-- add website icon -->
    <link rel="icon" href="https://cdn.glitch.com/9f283387-d235-4e18-8461-e5d9e2d2c5da%2Ffavicon.png?v=1593503631622">

  </head>
  <body class="main">
    <!-- Huvudrubrik -->
    <h1 id="head">
      Level 3
    </h1>

    <!-- Beskrivning -->
    <div class="plain-text">
      <h2 class="center-text">
        Grattis! Du klarade nivå 2!
      </h2>
      <p>
        Hade egentligen tänkt att gratta dig med en fin bild, men det verkar som
        att någon har varit inne på min sida och lagt till någon ny inställning
        så att den inte längre syns... Jag tror verkligen att du hade uppskattat
        min bild.
      </p>
      <p class="center-text">
        <b>
          Kan du hitta lösenordet till nivå 4?
        </b>
      </p>
    </div>

    <div id="hint" >
      <button onclick="showHint()" id="hint-button">VISA HINT</button>
      <p class="dold plain-text">
        <b>HINT:</b>
        <i>Det finns fler sätt att lösa den här nivån, men till en av lösningarna kan
          det vara bra att läsa om avsnittet <b>2.2 Styles</b> i DevTools-guiden.</i>
      </p>
    </div>

    <!-- Fin bild -->
    <img class="center osynlig" src="https://cdn.glitch.com/9f283387-d235-4e18-8461-e5d9e2d2c5da%2Fcode_4.png?v=1593758841182" alt="Ha, ha, den är gömd!"/>

    <!-- Rutan med input -->
    <?php
    if(!$falseflag){
      echo "<form id='form' action='https://uppdrag.helloworld.se/ctf/level3_bonjour.php#form' method='post'>";
    }else{
      echo "<form class ='formblink' id='form' action='https://uppdrag.helloworld.se/ctf/level3_bonjour.php#form' method='post'>";
    }
    ?>
        <input type="text" placeholder="Lösenord" id="password" name = "password" required="">
        <input type = "submit" id="form-button" value = "enter">
    </form>
    <script src="script.js"></script>
  </body>
</html>
