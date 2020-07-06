var button1 = document.querySelector("#button1");
var button2 = document.querySelector("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector("#button4");
var start = document.querySelector("#startbutton");
var clock = document.getElementById('clock');
var poangdisp = document.getElementById('poang');
var livdisp = document.getElementById("liv");
var clocktime;
var thebutton;
var liv;
var poang;
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
  liv = 3;
  poang = 0;
  clocktime = 10;
  update();
  document.getElementById('button1').disabled = false;
  document.getElementById('button2').disabled = false;
  document.getElementById('button3').disabled = false;
  document.getElementById('button4').disabled = false;
}

function clockfunc(){
  if (clocktime < 0){
    if(liv > 0){
      incorrectanswer();
    }
  }else{
    clock.innerHTML = clocktime;
    clocktime = clocktime - 1;
    setTimeout(clockfunc, 1000);
  }
}

function update(){
    livdisp.innerHTML = liv;
    poangdisp.innerHTML = poang;
    if(liv < 1){
      gameover();
    }else{
      clocktime = 10;
      clockfunc();
      updatepicture();
    }
}

function updatepicture(){
  listamedbilder=[Whitespace.png];
  listamednamn=[whitespace];
  tal = 0;
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
