var tillmorse = document.getElementById('tillmorse');
var text1 = tillmorse.querySelector('#till');
var till = tillmorse.querySelector("input");
till.addEventListener('change', update1);
function update1(e){
  var morse = till.value;
  morse = krypt(morse);
  text1.innerHTML = morse.join(' ');
}


function spliter(med){
    var spli = '';
    var lisat = med.split(spli);
    return lisat;
}
function kryptering(listamedbok){
    var lista = [];
    for (var i = 0; i < listamedbok.length; i++){
      var spli= '';
      var bokstaver = listamedbok[i].split(spli)
      for (var j = 0; j < bokstaver.length; j++){
          lista.push(bokstaver[j]);
        }
    }
    listamedbok = lista;
    for (var k = 0; k < listamedbok.length; k++){
        listamedbok[k] = kryptera(listamedbok[k]);
      }
    return listamedbok;
  }

function kryptera(bok){
    var bok = bok.toLowerCase();
    if (bok == " "){
      return " ";
    }
    if (bok == "e"){
        return ".";
      }
    if (bok == "t"){
        return "-";
      }
    if (bok == "i"){
        return "..";
      }
    if (bok == "a"){
        return ".-";
      }
    if (bok == "n"){
        return "-.";
      }
    if (bok == "m"){
        return "--";
      }
    if (bok == "s"){
        return "...";
      }
    if (bok == "u"){
        return "..-";
      }
    if (bok == "r"){
        return ".-.";
      }
    if (bok == "w"){
        return ".--";
      }
    if (bok == "d"){
        return "-..";
      }
    if (bok == "k"){
        return "-.-";
      }
    if (bok == "g"){
        return "--.";
      }
    if (bok == "o"){
        return "---";
      }
    if (bok == "h"){
        return "....";
      }
    if (bok == "v"){
        return "...-";
      }
    if (bok == "f"){
        return "..-.";
      }
    if (bok == "l"){
        return ".-..";
      }
    if (bok == "p"){
        return ".--.";
      }
    if (bok == "j"){
        return ".---";
      }
    if (bok == "b"){
        return "-...";
      }
    if (bok == "x"){
        return "-..-";
      }
    if (bok == "c"){
        return "-.-.";
      }
    if (bok == "y"){
        return "-.--";}
    if (bok == "z"){
        return "--..";
      }
    if (bok == "q"){
        return "--.-";
      }
}

function krypt(morsekod){
  return kryptord = kryptering(spliter(morsekod));
}
