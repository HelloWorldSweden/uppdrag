var franmorse = document.getElementById('franmorse');
var text2 = franmorse.querySelector('#from');
var from = franmorse.querySelector('input');
from.addEventListener('change', update2);
function update2(e){
	var morse = from.value;
  morse = oversatt(morse);
  text2.innerHTML = morse.join('');
}

function morseconverter(morsecode){
	var spli = '';
	var morselist = morsecode.split(spli);
	var l = 0;
	if (morselist[l]==" "){
		return " ";
	}
	if (morselist[l] == "-"){
		l = l + 1;
		if (l == morselist.length){
			return "T";
    }
		if (morselist[l] == "-"){
			l = l + 1;
			if (l == morselist.length){
				return "M";
      }
			if (morselist[l] == "-"){
				return "O";
      }
			if (morselist[l] == "."){
				l = l + 1;
				if (l == morselist.length){
					return "G";
        }
				if (morselist[l] == "-"){
					return "Q";
        }
				if (morselist[l] == "."){
					return "Z";
        }
      }
    }
		if (morselist[l] == "."){
			l = l + 1;
			if (l == morselist.length){
				return "N";
      }
			if (morselist[l] == "-"){
				l = l + 1;
				if (l == morselist.length){
					return "K";
        }
				if (morselist[l] == "-"){
					return "Y";
        }
				if (morselist[l] == "."){
					return "C";
        }
      }
			if (morselist[l] == "."){
				l = l + 1
				if (l == morselist.length){
					return "D";
        }
				if (morselist[l] == "-"){
					return "X";
        }
				if (morselist[l] == "."){
					return "B";
        }
      }
    }
  }
	if (morselist[l] == "."){
		l = l + 1;
		if (l == morselist.length){
			return "E";
    }
		if (morselist[l] == "-"){
			l = l + 1;
			if (l == morselist.length){
				return "A";
      }
			if (morselist[l] == "-"){
				l = l + 1
				if (l == morselist.length){
					return "W";
        }
				if (morselist[l] == "-"){
					return "J";
        }
				if (morselist[l] == "."){
					return "P";
        }
      }
			if (morselist[l] == "."){
				l = l + 1;
				if (l == morselist.length){
					return "R";
        }
				if (morselist[l] == "."){
					return "L";
        }
      }
    }
		if (morselist[l] == "."){
			l = l + 1;
			if (l == morselist.length){
				return "I";
      }
			if (morselist[l] == "-"){
				l = l + 1
				if (l == morselist.length){
					return "U";
        }
				if (morselist[l] == "."){
					return "F";
        }
      }
			if (morselist[l] == "."){
				l = l + 1;
				if (l == morselist.length){
					return "S";
        }
				if (morselist[l] == "-"){
					return "V";
        }
				if (morselist[l] == "."){
					return "H";
        }
      }
    }
  }
}
function morselistconverter(morselist){
	oversattlista = [];
	morselist = morselist.split(" ");
	for (var i = 0; i < morselist.length; i++){
		oversattlista.push(morseconverter(morselist[i]));
  }
	return oversattlista;
}
function oversatt(meddelande){
  return lista = morselistconverter(meddelande);
}
