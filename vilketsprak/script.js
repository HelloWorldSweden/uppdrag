var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var start = document.querySelector("#startbutton");
var clock = document.getElementById('clock');
var bild = document.getElementById('bild');
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
button1.style.visibility = 'hidden';
button2.style.visibility = 'hidden';
button3.style.visibility = 'hidden';
button4.style.visibility = 'hidden';
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
  button1.style.visibility = 'visible';
  button2.style.visibility = 'visible';
  button3.style.visibility = 'visible';
  button4.style.visibility = 'visible';
  listamedbilder=["ArnoldC.png", "Html.png", "Java.png","LOLCODE.png", "Python.png", "Scratch.png", "Whitespace.png", "Haskell.png","Malbogle(the_8th_circle_of_hell).png", "Power_shell.png","Unity.png","Cobol.png"];
  listamednamn=["ArnoldC", "Html", "Java", "LOLCODE", "Python", "Scratch", "Whitespace", "Haskell", "Malbogle aka helvetets &aringttonde krets", "Power shell", "unity", "COBOL"];
  document.getElementById('button1').disabled = false;
  document.getElementById('button2').disabled = false;
  document.getElementById('button3').disabled = false;
  document.getElementById('button4').disabled = false;
  document.getElementById('h1').innerHTML = " Vilket spr&aringk &aumlr det h&aumlr?";
  start.style.visibility = 'hidden';
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
  bild.src = listamedbilder[num];
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
  button1.style.visibility = 'hidden';
  button2.style.visibility = 'hidden';
  button3.style.visibility = 'hidden';
  button4.style.visibility = 'hidden';
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
  bild.src = "Game_Over.png"
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
