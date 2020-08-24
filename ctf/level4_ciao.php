<?php
$falseflag = false;
if(isset($_POST['password'])) {
  $password = $_POST['password'];
  if(!is_null($password)){
   if($password == "svamp"||$password == "en svamp"||$password == "svampen"){ //Eller det lösenordet som tillhör den sidan
     header("Location: https://uppdrag.helloworld.se/ctf/level5_privet.php"); //Redirect, ändra till den uppgift som kommer efter
   }else{
     $falseflag = true;
   }
  }
}

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>HW! CTF - Level 4</title>
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
      Level 4
    </h1>

    <!-- Beskrivning -->
    <div id="description" class="plain-text">
      <h2 class="center-text">
        Gr...attisss! Duu.. klaa..rade nnivå 3!
      </h2>
      <p>
        Deet v..erk...ar ha hääääänt någ...ot mmmmed he....msida..n. Något mmååsteeee h......a gåått s..s..s..söndeeer.
      </p>
      <p class="center-text">
        <b>
          Kaaan du hjä..hjä..hjälpa miiiig at...at..att laaga hemsss..idan?
        </b>
      </p>
    </div>

    <div id="hint" >
      <button onclick="showHint()" id="hint-button">VISA HINT</button>
      <p class="dold plain-text">
        <b>HINT:</b>
        <i>Det kan vara bra att läsa om avsnittet <b>3. Fliken - Console</b> i DevTools-guiden
          för att förstå vad du ska göra.</i>
      </p>
    </div>

    <!-- Rutan med input -->
    <?php
    if(!$falseflag){
      echo "<form id='form' action='https://uppdrag.helloworld.se/ctf/level4_ciao.php#form' method='post'>";
    }else{
      echo "<form class ='formblink' id='form' action='https://uppdrag.helloworld.se/ctf/level4_ciao.php#form' method='post'>";
    }
    ?>
        <input type="text" placeholder="Lösenord" id="password" name = "password" required="">
        <input type = "submit" id="form-button" value = "enter">
    </form>
    <script src="script.js"></script>
    <script src="script_level4.js"></script>
  </body>
</html>
