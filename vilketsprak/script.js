var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var start = document.querySelector("#startbutton");
var clock = document.getElementById('clock');
var bild1 = document.getElementById('bild1');
var bild2 = document.getElementById('bild2');
var listamedbilder;
var listamedalla;
var listamednamn;
var buttonlist;
var buttonen; // the correct button
var poangdisp = document.getElementById('poang');
var clocktime;
var timer;
var thebutton; // index of correct answer
var poang;
button1.style.display = 'none';
button2.style.display = 'none';
button3.style.display = 'none';
button4.style.display = 'none';
document.getElementById('button1').disabled = true;
document.getElementById('button2').disabled = true;
document.getElementById('button3').disabled = true;
document.getElementById('button4').disabled = true;
button1.addEventListener("click", function(){
  button1click()
});
button2.addEventListener("click", function(){
  button2click()
});
button3.addEventListener("click", function(){
  button3click()
});
button4.addEventListener("click", function(){
  button4click()
});
start.addEventListener("click", function(){
  starta()
});

function starta(){
  button1.style.display = 'inline';
  button2.style.display = 'inline';
  button3.style.display = 'inline';
  button4.style.display = 'inline';
  createlistamedbilder();
  document.getElementById('button1').disabled = false;
  document.getElementById('button2').disabled = false;
  document.getElementById('button3').disabled = false;
  document.getElementById('button4').disabled = false;
  document.getElementById('h1').innerHTML = " Vilket spr&aringk &aumlr det h&aumlr?";
  start.style.display = 'none';
  poang = 0;
  clocktime = 10;
  update();
}

function clockfunc(){
  if (clocktime < 0){
    if(listamedbilder.length){
      timeOut();
    }
    if(listamedbilder.length == 0){
      return;
    }
  }else{
    if (clocktime < 4){
      clock2.style.color = "#FF0000";
    }else{
      clock2.style.color = "#FFFFFF";
    }
    if(listamedbilder.length== 0){
      return;
    }
    clock2.innerHTML = clocktime;
    clocktime = clocktime - 1;
    timer = setTimeout(clockfunc, 1000);
  }
}

function update(){
    document.getElementById('button1').disabled = false;
    document.getElementById('button2').disabled = false;
    document.getElementById('button3').disabled = false;
    document.getElementById('button4').disabled = false;
    poangdisp.innerHTML = poang;
    if(listamedbilder.length == 0){
      gameover();
    }else{
      clocktime = 10;
      clockfunc();
      updatepicture();
    }
}

function updatepicture(){
  buttonlist = [button1, button2, button3, button4]; //väljer knapp och sparar plats och knapp
  thebutton = Math.floor(Math.random()*4) + 1;
  buttonen = buttonlist[thebutton - 1];

  var num = Math.floor(Math.random()*listamedbilder.length); //väljer bild och lägger in
  if(listamedbilder[num] == "Scratch.png"||listamedbilder[num] == "Whitespace.png"){
    bild1.style.display = 'none';
    bild2.style.display = 'block';
    bild2.src = listamedbilder[num];
  }else{
    bild2.style.display = 'none';
    bild1.style.display = 'block';
    bild1.innerHTML = listamedbilder[num];
  }


  buttonlist[thebutton - 1].innerHTML = listamednamn[num];

  var tabortnamn = listamednamn[num]; // det namn som ska tas bort från listan med namn för resten av knapparna

  listamednamn.splice(num, 1); //tar bort den bild som används
  listamedbilder.splice(num, 1);

  listamedalla = ["ArnoldC", "Html", "Java", "LOLCODE", "Python", "Scratch", "Whitespace", "Haskell", "Malbogle aka helvetets &aringttonde krets", "Power shell", "unity", "COBOL"];
  buttonlist.splice(thebutton - 1, 1); // tar bort knappen som är rätt
  listamedalla.splice(listamedalla.indexOf(tabortnamn), 1);
  for (i = 0; i < 3; i++){
    var rand = Math.floor(Math.random(listamedalla.length));
    buttonlist[i].innerHTML = listamedalla[rand];
    listamedalla.splice(rand,1);
  }
}

function gameover(){
  button1.style.display = 'none';
  button2.style.display = 'none';
  button3.style.display = 'none';
  button4.style.display = 'none';
  clocktime = 10;
  document.getElementById('button1').disabled = true;
  document.getElementById('button2').disabled = true;
  document.getElementById('button3').disabled = true;
  document.getElementById('button4').disabled = true;
  document.getElementById('button1').innerHTML = "";
  document.getElementById('button2').innerHTML = "";
  document.getElementById('button3').innerHTML = "";
  document.getElementById('button4').innerHTML = "";
  document.getElementById('h1').innerHTML = "";
  bild1.innerHTML = "Du fick: " + poang + " po&auml;ng!" + "<br>" + "f&ouml;r badge beh&ouml;ver du 10 po&auml;ng" + "<br>" + "KTHX BYE";
  bild2.display = 'none';
  bild1.display = 'block';
  start.innerHTML = "Starta om";
  start.style.visibility= 'visible';
  if(poang > 9){
    alert("badge: hejsanworld");
  }
}

function incorrectanswer(button){
  clearTimeout(timer);
  lightgreen(buttonen);
  lightred(button);
  document.getElementById('button1').disabled = true;
  document.getElementById('button2').disabled = true;
  document.getElementById('button3').disabled = true;
  document.getElementById('button4').disabled = true;
  setTimeout(() => update(), 1000);
}

function timeOut() {
  clearTimeout(timer);
  lightgreen(buttonen);
  document.getElementById('button1').disabled = true;
  document.getElementById('button2').disabled = true;
  document.getElementById('button3').disabled = true;
  document.getElementById('button4').disabled = true;
  setTimeout(() => update(), 1000);
}

function correctanswer(button){
  clearTimeout(timer);
  lightgreen(button);
  poang = poang + 1;

  setTimeout(() => update(), 1000);
}

function button1click(){
  if (thebutton == 1){
    correctanswer(button1);
  }else{
    incorrectanswer(button1);
  }
}
function button2click(){
  if (thebutton == 2){
    correctanswer(button2);
  }else{
    incorrectanswer(button2);
  }
}
function button3click(){
  if (thebutton == 3){
    correctanswer(button3);
  }else{
    incorrectanswer(button3);

  }
}
function button4click(){
  if (thebutton == 4){
    correctanswer(button4);
  }else{
    incorrectanswer(button4);
  }
}

// Make the background color of `button` red for 1000ms
function lightred(button){
  button.classList.add("wrong");
  setTimeout(() => button.classList.remove("wrong"), 1000);
}

// Make the background color of `button` green for 1000ms
function lightgreen(button){
  button.classList.add("correct");
  setTimeout(() => button.classList.remove("correct"), 1000);
}
function createlistamedbilder(){
  listamedbilder = [];
  listamedbilder.push("IT'S SHOWTIME <br> TALK TO THE HAND \"hello world\" <br> YOU HAVE BEEN TERMINATED");
  listamedbilder.push("<pre> &lt;!DOCTYPE html&gt; <br> &lt;html&gt; <br> &#9; &lt;head&gt;  <br> &#9; &#9; &lt;title&gt;Hello World&lt;/title&gt;   <br> &#9; &lt;/head&gt;  <br> &#9; &lt;body&gt;  <br> &#9; &#9; &lt;p&gt;Hello World&lt;/p&gt;   <br> &#9; &lt;/body&gt;  <br> &lt;/html&gt; </pre>");
  listamedbilder.push("<pre> public class HelloWorld { <br> &#9; public static void main(String args[]) { <br> &#9; &#9; System.out.print(\"Hello World\"); <br> &#9; } <br> } </pre>");
  listamedbilder.push("<pre> HAI 1.2 <br> &#9; CAN HAS STDIO? <br> &#9; VISIBLE \"HAI WORLD!!!1!\" <br> KTHXBYE </pre>");
  listamedbilder.push("print(\"Hello World\")");
  listamedbilder.push("Scratch.png");
  listamedbilder.push("Whitespace.png");
  listamedbilder.push("main = putStrLn \"Hello, World!\"");
  listamedbilder.push("('&%:9]!~}|z2Vxwv-,POqponl$Hjig%eB@@&gt;}=&lt;M:9wv6WsU2T|nm-,jcL(I&%$#\" <br> `CB]V?Tx&lt;uVtT`Rpo3NlF.Jh++FdbCBA@?]! <br> ~|4XzyTT43Qsqq(Lnmkj\"Fhg${z@&gt;");
  listamedbilder.push("Write-Host \'Hello World!\'");
  listamedbilder.push("Debug.Log(\"Hello World\");");
  listamedbilder.push(" <pre> IDENTIFICATION DIVISION. <br> PROGRAM-ID. HELLO-WORLD. <br> * simple hello world program <br> PROCEDURE DIVISION. <br> &#9; DISPLAY 'Hello world!'. <br> &#9; STOP RUN. </pre>");
  listamednamn=["ArnoldC", "Html", "Java", "LOLCODE", "Python", "Scratch", "Whitespace", "Haskell", "Malbogle (helvetets &aringttonde krets)", "Power shell", "unity", "COBOL"];
}
