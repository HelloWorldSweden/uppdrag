function showHint() {
  var div = document.getElementById('hint');
  div.lastElementChild.classList.remove("dold")
  div.firstElementChild.classList.add("dold")
}

function blink() {
   var f = document.getElementById('form');

   f.classList.add("wrong")

   setTimeout(function() {
      f.classList.remove("wrong")
   }, 1000);
}

var tries = 0;

function toHomePage() {
  window.location.replace("index.html");
}

function evaluateForm(){
  var code = document.getElementById("code");
  const codeMatch = levels.filter(level => level.code === code.value)[0] // Find the first level that matches the code

  if (codeMatch){
    // Send to new page
    window.location.assign(codeMatch.file);
  }
  else {
    tries += 1;

    blink();
  }

  // Update tries
  //document.getElementById("tries").innerText = tries;

  // Reset values
  code.value = "";
}

var code = document.getElementById("code");
if (code){}

var inputs = code ? [code] : [];

inputs.forEach(input => {

  input.addEventListener("keyup", function(event){

    if (event.keyCode === 13){ // Using the key ENTER should invoke the button  
      document.getElementById("form-button").click();
    }

  });
});


// Om du hittat hit innebär det att du verkligen har dykt djupt i devtools
// Grattis! Vet du hur du ska utnyttja denna information för att klara uppdraget?
const levels = [
  {file: "level1_hej.html", code: "start"},
  {file: "level2_hello.html", code: "vitlöksbröd"},
  {file: "level3_bonjour.html", code: "äppelmos"},
  {file: "klar.html", code: "hacker"}
]