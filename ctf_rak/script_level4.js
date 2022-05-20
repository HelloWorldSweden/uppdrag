console.error("FEL! FEL! FEL!\n---------------\nHemsidan måste lagas. Testa att använda funktionen laga() så kanske det löser sig\n--------------\nFEL! FEL! FEL!")

const newDesc = `
  <h2 class="center-text">
    Grattis! Du klarade nivå 3!
  </h2>
  <p id="text">
    Så, nu verkar det vara lagat. Då kan vi ju faktiskt fortsätta göra något kul. Jag har en gåta
    till dig. Svaret är lösenordet på den här nivån.
  </p>
  <p class="center-text">
    <b>
      På vad dricker utomjordingarna sitt te?
    </b>
  </p>`

const laga = () => {
  const descDiv = document.getElementById("description")

  console.group("Status")
  console.log("Funnet fel:")
  setTimeout(() => {
    console.log("Påbörjar utförande av åtgärd")
    setTimeout(() => {
      console.log("...")
      setTimeout(() => {
        console.log("Hemsidan är nu lagad.")
        console.groupEnd()
        descDiv.innerHTML = newDesc
      }, 2000)
    }, 2000)
  }, 1000)

  return {fel: "Rymdskrot fast i servern", åtgärd: "plockar bort"}
}
