<?php
$falseflag = false;
if(isset($_POST['password'])) {
  $password = $_POST['password'];
  if(!is_null($password)){
   if($password == "datamus"){ //Eller det lösenordet som tillhör den sidan
     header("Location: https://uppdrag.helloworld.se/ctf/klar.html"); //Redirect, ändra till den uppgift som kommer efter
   }else{
     $falseflag = true;
   }
  }
}

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>HW! CTF - Level 5</title>
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
      Level 5
    </h1>

    <!-- Beskrivning -->
    <div id="description" class="plain-text">
      <h2 class="center-text">
        Grattis du klarade nivå 4!
      </h2>
      <p class="center-text">
        <b>
        Vet du vad! Det är jättejobbigt att gömma alla lösenord hela tiden :(
        </b>
      </p>
      <p class="center-text">
        <b>
          Äh! Vem bryr sig? Du kan få nästa lösenord helt enkelt bara...
        </b>
      </p>
    </div>
    <!-- Krypterat lösenord visas här -->
    <div id="prankpart" class="plain-text">
        <button id = "password" onclick = prank()>lösenord</button>
        <p class = "center-text" id = "pranktext"></p>
        <input type = "text" id = "message" placeholder = "Krypterat meddelande">
        <input type = "text" id ="key" placeholder = "Nyckel">
        <button onclick ="tryto()" class="form-button" id = "trybutton">Avkryptera</button>
        <p class="center-text" id = "resultat"></p>
    </div>
    <div id = "här_finns_det_nåt">
      <p id = "gömdig">oerwoipúwir     nyckel: 4</p>
    </div>
    <div id="hint" >
      <button onclick="showHint()" id="hint-button">VISA HINT</button>
      <p class="dold plain-text">
        <b>HINT:</b>
        <i>Kolla i elements, senare kanske nya saker dyker upp i consolen?</i>
      </p>
    </div>

    <!-- Rutan med input -->
    <?php
    if(!$falseflag){
      echo "<form id='form' action='https://uppdrag.helloworld.se/ctf/level5_privet.php#form' method='post'>";
    }else{
      echo "<form class ='formblink' id='form' action='https://uppdrag.helloworld.se/ctf/level5_privet.php#form' method='post'>";
    }
    ?>
        <input type="text" placeholder="Lösenord" id="password" name = "password" required="">
        <input type = "submit" id="form-button" value = "enter">
    </form>
    <script src="script.js"></script>
    <script src="script_level5.js"></script>
  </body>
</html>
