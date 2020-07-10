var hintbutton = document.getElementById('hint-button');
var messageform = document.getElementById('message');
var keyform = document.getElementById('key');
var trybutton = document.getElementById('trybutton');
var pranktext = document.getElementById('pranktext');
var resultat = document.getElementById('resultat');
var formbutton = document.getElementById('form-button');
var toggle1 = 0;
var toggle2 = 0;
hidestuff();

var inputs = [messageform, keyform].filter(form => form)
inputs.forEach(input => {
  input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){ // Using the key ENTER in the form should invoke the button
      document.getElementById("trybutton").click()
    }
  })
})

function prank(){
  pranktext.innerHTML = "Här har du: mj}jv~| <br> HAHA! Så enkelt är det inte, jag har krypterat meddelandet! <br> För att klara nivån måste du hitta nyckeln till krypteringen"
  showstuff();
}

function tryto(){
  setTimeout(() => {
    resultat.innerHTML ="-";
    setTimeout(() => {
      resultat.innerHTML ="- -";
      setTimeout(() => {
        resultat.innerHTML ="- - -";
        setTimeout(() => {
          resultat.innerHTML = avkryptera(messageform.value, keyform.value);
        }, 500)
      }, 500)
    }, 500)
  }, 500)
}

function avkryptera(message, key){
  var avkrypteradlista = [];
  for (i = 0; i < message.length; i++){
    avkrypteradlista.push(String.fromCharCode(message.charCodeAt(i)-key));
  }
  return avkrypteradlista.join("");
}

function showstuff(){
  hintbutton.style.display = 'block';
  messageform.style.display = 'block';
  keyform.style.display = 'block';
  trybutton.style.display = 'block';
  hintbutton.addEventListener('click',function(){
    consolelog1();
  })
}

function hidestuff(){
  hintbutton.style.display = 'none';
  messageform.style.display = 'none';
  keyform.style.display = 'none';
  trybutton.style.display = 'none';
  formbutton.addEventListener('click',function(){
    consolelog2();
  })

}

function consolelog1(){
  if (toggle2 == 1){
    toggle1 = toggle1 + 1;
  }
  if(toggle1 == 2){
      console.log("vksmtvìzA   nyckel:  8");
  }
}

function consolelog2(){
  if(toggle2 == 0){
    toggle1 = toggle1 + 1;
    toggle2 = toggle2 + 1;
  }
  console.log("~|muzïrsx~   nyckel:   10");
}
