var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var start = document.querySelector("#startbutton");
var clock = document.getElementById('clock');
var bild = document.getElementById('bild');
var buttonlist;
var poangdisp = document.getElementById('poang');
var livdisp = document.getElementById("liv");
var clocktime;
var thebutton;
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
  liv = 3;
  poang = 0;
  clocktime = 10;
  clockfunc();
  update();
}

function clockfunc(){
  if (clocktime < 0){
    if(liv > 0){
      incorrectanswer();
    }
    clockfunc();
  }else{
    clock.innerHTML = "Tid: " + clocktime;
    clocktime = clocktime - 1;
    setTimeout(clockfunc, 1000);
  }
}

function update(){
    livdisp.innerHTML = "Liv: " + liv;
    poangdisp.innerHTML = "Poang: " + poang;
    if(liv < 1){
      gameover();
    }else{
      clocktime = 10;
      updatepicture();
    }
}

function updatepicture(){
  var listamedbilder=["ArnoldC.png", "Html.png", "Java.png","LOLCODE.png", "Python.PNG", "Scratch.png", "Whitespace.png"];
  var listamednamn=["ArnoldC", "Html", "Java", "LOLCODE", "Python", "Scratch", "Whitespace"];
  var num = Math.floor(Math.random()*listamedbilder.length);
  bild.src = listamedbilder[num];
  thebutton = Math.floor(Math.random()*4) + 1;
  var buttonlist = [button1, button2, button3, button4];
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
}

function incorrectanswer(){
  liv = liv - 1;
  update();
}

function correctanswer(){
  poang = poang + 1;
  update();
}

function button1click(){
  if (thebutton == 1){
    correctanswer();
  }else{
    incorrectanswer();
  }
}
function button2click(){
  if (thebutton == 2){
    correctanswer();
  }else{
    incorrectanswer();
  }
}
function button3click(){
  if (thebutton == 3){
    correctanswer();
  }else{
    incorrectanswer();
  }
}
function button4click(){
  if (thebutton == 4){
    correctanswer();
  }else{
    incorrectanswer();
  }
}
