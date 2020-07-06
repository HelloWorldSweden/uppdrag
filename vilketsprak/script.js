var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var start = document.querySelector("#startbutton");
var clock = document.getElementById('clock');
var bild = document.getElementById('bild');
var buttonlist;
var buttonen; // the correct button
var poangdisp = document.getElementById('poang');
var livdisp = document.getElementById("liv");
var clocktime;
var timer;
var thebutton; // index of correct answer
var liv;
var poang;
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
  document.getElementById('button1').disabled = false;
  document.getElementById('button2').disabled = false;
  document.getElementById('button3').disabled = false;
  document.getElementById('button4').disabled = false;
  start.style.visibily = 'hidden';
  liv = 3;
  poang = 0;
  clocktime = 10;
  update();
}

function clockfunc(){
  if (clocktime < 0){
    if(liv > 0){
      timeOut();
    }
    if(liv<1){
      return;
    }
  }else{
    if(liv == 0){
      return;
    }
    clock.innerHTML = "Tid: " + clocktime;
    clocktime = clocktime - 1;
    timer = setTimeout(clockfunc, 1000);
  }
}

function update(){
    livdisp.innerHTML = "Liv: " + liv;
    poangdisp.innerHTML = "Po&auml;ng: " + poang;
    if(liv < 1){
      gameover();
    }else{
      clocktime = 10;
      clockfunc();
      updatepicture();
    }
}

function updatepicture(){
  var listamedbilder=["ArnoldC.png", "Html.png", "Java.png","LOLCODE.png", "Python.png", "Scratch.png", "Whitespace.png", "Haskell.png"];
  var listamednamn=["ArnoldC", "Html", "Java", "LOLCODE", "Python", "Scratch", "Whitespace", "Haskell"];
  var num = Math.floor(Math.random()*listamedbilder.length);
  bild.src = listamedbilder[num];
  thebutton = Math.floor(Math.random()*4) + 1;
  buttonlist = [button1, button2, button3, button4];
  buttonen = buttonlist[thebutton - 1];
  buttonlist[thebutton - 1].innerHTML = listamednamn[num];
  buttonlist.splice(thebutton - 1, 1);
  listamednamn.splice(num, 1);
  for (i = 0; i < 3; i++){
    var rand = Math.floor(Math.random(listamednamn.length));
    buttonlist[i].innerHTML = listamednamn[rand];
    listamednamn.splice(rand,1);
  }
}

function gameover(){
  clocktime = 10;
  document.getElementById('button1').disabled = true;
  document.getElementById('button2').disabled = true;
  document.getElementById('button3').disabled = true;
  document.getElementById('button4').disabled = true;
  start.innerHTML = "Starta om";
  start.style.visibily = 'visible';
}

function incorrectanswer(button){
  clearTimeout(timer);
  lightgreen(buttonen);
  lightred(button);
  liv = liv - 1;

  setTimeout(() => update(), 1000);
}

function timeOut() {
  clearTimeout(timer);
  lightgreen(buttonen);
  liv = liv - 1;

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
