// Show the hint-message and remove the hint-button
function showHint() {
  var div = document.getElementById('hint');
  div.lastElementChild.classList.remove("dold")
  div.firstElementChild.classList.add("dold")
}


// Change the color of the form to red during 1000 ms
function blink() {
   var f = document.getElementById('form')

   f.classList.add("wrong")

   setTimeout(function() {
      f.classList.remove("wrong")
   }, 1000)
}

// Navigate to the homepage (remove history)
function toHomePage() {
  window.location.replace("index.html")
}

// Check if the given code is a correct level-code and
// in that case, navigate to the right level.
function evaluateForm(){
  var codeElement = document.getElementById("code")
  var code = codeElement.value
  const codeMatch = levels.filter(level => level.code === code.toLowerCase())[0] // Find the first level that matches the code
  
  // Reset values
  codeElement.value = ""
  
  if (codeMatch){
    // Send to new page
    window.location.assign(codeMatch.file)
  }
  else {
    blink()
  }
}

// Listen to key stroke events in the input fields
var codeElement = document.getElementById("code")
var inputs = codeElement ? [codeElement] : []

inputs.forEach(input => {
  input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){ // Using the key ENTER should invoke the button  
      document.getElementById("form-button").click()
    }
  })
})


// Om du hittat hit innebär det att du verkligen har dykt djupt i DevTools
// Grattis! Vet du hur du ska utnyttja denna information för att klara uppdraget?
const levels = [
  {file: "Nyckel1_21_5_15.html", code: "21/5/15"},
  {file: "Nyckel2_Jordglob.html", code: "jordglob"},
  {file: "Nyckel3_Scratch.html", code: "scratch"},
  {file: "Nyckel4_Agesta.html", code: "ågesta"},
  {file: "Nyckel5_xXgrattisXx.html", code: "xxgrattisxx"},

]