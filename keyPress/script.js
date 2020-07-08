var box = document.querySelector("#gameBox");
var text = document.querySelector("#gameBox p");
var scoreBoxVals = document.querySelectorAll("#scoreBox p");
var clock = document.querySelector("#clock");
var settings = document.querySelectorAll("#settings button");
var scoreText = scoreBoxVals[0];
var livesText = scoreBoxVals[1];
var hiscoreBox = document.querySelector("#hiscoreBox");


var lives = 5;
var clockTimeout;
var started = false;
var score = 0;
var difficultySpeeds = [100, 20, 10]
var difficultyStart = [8000, 5000, 3000]
var speedLevel = 1;
var grace = false;
var symbolLevel = 0;

var hiscores = [1,2];

const grace_ms = 200;
const blink_ms = 300;
const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','å','ä','ö'];
const symbols = ['!','"','#','%','&','/','(',')','=', '[',']','{','}','+','>','<','*','\\']; 
const allSymbols = letters.concat(symbols);


function start(){
    started = true;
    lives = 5;
    score = 0;
    clearTimeout(clockTimeout);
    resetColor();  
    updateScore();
    randomLetter(true);
}

function updateScore(){
    scoreText.innerHTML = "Poäng: " + score;
    livesText.innerHTML = "Liv: " + lives;
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function resetColor(){
    box.style.setProperty("background-color", "aqua");
    text.style.setProperty("color", "black");
}

function timer(n, timeout){
    if(started){
        if(n < 0){
            randomLetter(false);
        }  else {

            if(n > 350){
                t = 100 - (n - 350);
                s = t + "% 0";
            } else if(n > 250){
                t =  100 - (n - 250);
                s = "100% 0, 100%" + t + "%";
            } else if(n > 150){
                t = n - 150;
                s = "100% 0, 100% 100%, " + t + "% 100%"
            } else if(n > 50){
                t = n - 50;
                s = "100% 0, 100% 100%, 0 100%, 0 " + t + "%";
            } else {
                t = 50 - n;
                s = "100% 0, 100% 100%, 0 100%, 0 0, " + t + "% 0"
            }
            clock.style.setProperty("clip-path", "polygon(50% 0," + s + ", 50% 50%)")
            clockTimeout = setTimeout(timer, timeout/100, n-4, timeout);
        }
    }
}

function testKey(event){
    if(started){
        event.preventDefault();
        letter = String.fromCharCode(event.keyCode);
        switch(letter){
            case '&':
                letter = '&amp;';
                break;
            case '<':
                letter = '&lt;';
                break;
            case '>':
                letter  = '&gt;';
        }
        if(letter == text.innerHTML){
            // box.style.setProperty("background-color", "green");
            text.style.setProperty("color", "green");
            setTimeout(resetColor, blink_ms);
            score += 1;
            clearTimeout(clockTimeout);
            randomLetter(true);
        } else if(!grace){


            
            clearTimeout(clockTimeout);
            randomLetter(false);
        }
    }
}


function randomLetter(success){
    if(started){
        if(!success){
            dead = loseLife();
            if(dead){
                return;
            }
        }
        updateScore();
        if(symbolLevel == 0){
            text.innerHTML = letters[Math.floor(Math.random() * letters.length)];
        } else if (symbolLevel == 1){
            text.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        } else if (symbolLevel == 2){
            text.innerHTML = allSymbols[Math.floor(Math.random() * allSymbols.length)];
        }
        let delay = difficultyStart[speedLevel]/((score+difficultySpeeds[speedLevel])/difficultySpeeds[speedLevel]);
        timer(400, delay - 100);
        grace = true;
        setTimeout(() => {grace = false}, grace_ms);
    }
}


function loseLife(){
    lives--;
    //box.style.setProperty("background-color", "red");
    text.style.setProperty("color", "red");
    if(lives <= 0){
        updateScore();
        text.style.setProperty("color", "black");
        box.style.setProperty("background-color", "red");
        clock.style.setProperty("clip-path", "polygon(50% 0, 50% 0, 50% 50%)")
        started = false;
        if (score > hiscores[hiscores.length - 1] || hiscores.length < 5){
            update_hiscore(score);
        }
        return true;
    }
    setTimeout(resetColor, blink_ms);
    return false;
}

function settingClick(element, index){
    element.parentElement.querySelector(".selected").classList.remove("selected");
    element.classList.add("selected");
    switch (index) {
        case 0:
        case 1:
        case 2:
            speedLevel = index;
            break;

        case 3:
        case 4:
        case 5:
            symbolLevel = index - 3;
            break;
    }
    load_hiscores();
}

function update_hiscore(score){
    placements = hiscoreBox.querySelector("#placements");
    hiscoreList = hiscoreBox.querySelector("#hiscores");
    if(score || score === 0){
       hiscores.push(score);
    }
    hiscores.sort((a,b) => b-a);
    if(hiscores.length > 5){
        hiscores = hiscores.slice(0,5);
    }
    placements.innerHTML = "";
    hiscoreList.innerHTML =  "";
    hiscores.forEach((score, index) => {
        placements.innerHTML += `<p>${index + 1}</p>`;
        hiscoreList.innerHTML +=  `<p>${score}</p>`;
    });
    save_hiscores();
}

function save_hiscores(){
    localStorage.setItem(`speedLevel${speedLevel}symbolLevel${symbolLevel}`, JSON.stringify(hiscores));
}

function load_hiscores(){
    hiscores = JSON.parse(localStorage.getItem(`speedLevel${speedLevel}symbolLevel${symbolLevel}`));
    
    if(!hiscores){
        hiscores = [];
    }
    update_hiscore();
}

load_hiscores();
document.addEventListener("keypress", testKey);
box.addEventListener("click", start);
settings.forEach((element, index) => {
    element.addEventListener("click", () => settingClick(element, index));
});



