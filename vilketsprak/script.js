var start = document.querySelector("#startbutton");
var clock = document.getElementById('clock');
var bild1 = document.getElementById('bild1');
var bild2 = document.getElementById('bild2');
var listamedbilder;
var listamedalla;
var listamednamn;
var thebutton; // index of correct answer
var poangdisp = document.getElementById('poang');
var clocktime;
var timer;
var poang;

// button setup
const buttonlist = [1,2,3,4].map(i => document.querySelector(`#button${i}`));
buttonlist.forEach((button, i) => {
  button.style.display = 'none';
  button.disabled = true;
  button.addEventListener("click", () => buttonClick(i));
});

start.addEventListener("click", function(){
  starta();
});

function starta(){
  buttonlist.forEach(button => {
    button.style.display = 'inline';
    button.disabled = false;
  });

  createlistamedbilder();
  document.getElementById('h1').innerHTML = "Vilket spr&aring;k &auml;r det h&auml;r?";
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
    buttonlist.forEach(button => button.disabled = false);
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
  thebutton = Math.floor(Math.random()*4); //väljer knapp och sparar plats

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

  buttonlist[thebutton].innerHTML = listamednamn[num];

  var tabortnamn = listamednamn[num]; // det namn som ska tas bort från listan med namn för resten av knapparna

  listamednamn.splice(num, 1); //tar bort den bild som används
  listamedbilder.splice(num, 1);

  listamedalla = ["ArnoldC", "Html", "Java", "LOLCODE", "Python", "Scratch", "Whitespace", "Haskell", "Malbogle aka helvetets &aringttonde krets", "Power shell", "unity", "COBOL"];
  listamedalla.splice(listamedalla.indexOf(tabortnamn), 1);

  // genererar fel svar för resterande knappar
  buttonlist.forEach((button, i) => {
    if (i != thebutton) {
      var rand = Math.floor(Math.random(listamedalla.length));
      button.innerHTML = listamedalla[rand];
      listamedalla.splice(rand,1);
    }
  })
}

function gameover(){
  // remove buttons
  buttonlist.forEach((button, i) => {
    button.disabled = true;
    button.style.display = 'none';
    button.innerHTML = "";
  });

  clocktime = 10;

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
  lightgreen(buttonlist[thebutton]);
  lightred(button);
  buttonlist.forEach(button => button.disabled = true);

  setTimeout(() => update(), 1000);
}

function timeOut() {
  clearTimeout(timer);
  lightgreen(buttonlist[thebutton]);
  buttonlist.forEach(button => button.disabled = true);

  setTimeout(() => update(), 1000);
}

function correctanswer(button){
  clearTimeout(timer);
  lightgreen(button);
  poang = poang + 1;

  setTimeout(() => update(), 1000);
}

function buttonClick(index) {
  if (thebutton == index) {
    correctanswer(buttonlist[index]);
  } else {
    incorrectanswer(buttonlist[index]);
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
