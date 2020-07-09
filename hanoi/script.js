var gameBox = document.querySelector("#hanoiGameBox");
var towerBox = document.querySelector("#towerBox");
var scoreBox = document.querySelector("#scoreBox");
var resetButton = document.querySelector("#resetButton");
var blockSlider = document.querySelector("#blockSlider");
var towerSlider = document.querySelector("#towerSlider");

var moves = 0;

var box = gameBox.getBoundingClientRect();
var Yref = box.top;
var Xref = box.left;
var boxWidth = box.right - box.left;

var n_towers = 3;
var n_blocks = 3;

var towers = []
var blocks = []

function setup(){

    for(i = 0; i < n_towers; i++){
        let new_tower = document.createElement("div");
        towerBox.appendChild(new_tower);
        new_tower.classList.add("tower");
        new_tower.innerHTML = "<div class='stick'></div>"
    }
    var towerElements = towerBox.querySelectorAll(".tower");

    for(i = 0; i < n_blocks; i++){
        let new_block = document.createElement("div");
        towerElements[0].appendChild(new_block);
        new_block.classList.add("block");
    }
    var blockElements = towerBox.querySelectorAll(".block");


    towerElements.forEach((element, index) => {
        towers.push({
            element: element,
            blocks: [],
            index: index
        })
    });

    blockElements.forEach((element,index) => {
    element.style.setProperty("--i", 20+80*((index+1)/n_blocks) + "%");
    element.style.setProperty("height", Math.min(120/n_blocks, 30)+"px");
    block = ({
        element: element,
        size: index,
        locked: 0,
        moved: 0,
        tower: 0,
        x: 0,
        y: 0
    });
    blocks.push(block);
    towers[0].blocks.push(block);
    });

    blocks.forEach(block => {
        block.element.addEventListener("mousedown", (e) => lock(e, block));
    });
}

function complete(){
    return towers.every(tower => (tower.blocks.length == 0 || tower.index == n_towers - 1));
}

function updateScore(){
    scoreBox.querySelector("#moves").innerHTML = `Moves: ${moves}`;
}

function relativeXY(event){
    return[event.clientX - Xref, event.clientY - Yref];
}

function lock(event, block){
    event.preventDefault();
    if(legal_lift(block)){
        block.locked = true;
        [x,y] = relativeXY(event)
        block.x = x;
        block.y = y;
    }
};

function move(event){
    blocks.forEach(block => {
        if(block.locked){
            [x,y] = relativeXY(event);
            diffX = x - block.x;
            diffY = y - block.y;
            block.element.style.setProperty("transform", `translate(${diffX}px, ${diffY}px)`);
            block.moved = diffX;
        }
    });
};

function release(event){
    blocks.forEach(block => {
        if(block.locked){
            block.locked = false;
            [x,y] = relativeXY(event);
            pos = x - 50;
            tower_i = Math.min(n_towers-1, Math.floor(pos/((boxWidth-100)/n_towers)))
            switch_tower(block, block.tower, tower_i);
            block.element.style.setProperty("transform", "");
        }
    });
};

function legal_drop(block, towerIndex){
    bottom_block = towers[towerIndex].blocks[0]
    if(bottom_block == undefined){
        return true;
    } else {
        return (bottom_block.size > block.size);
    }
}

function legal_lift(block){
    return block == towers[block.tower].blocks[0];
}

function switch_tower(block, fromTowerIndex, toTowerIndex){
    if(legal_drop(block, toTowerIndex)){
        towers[fromTowerIndex].element.removeChild(block.element);
        towers[toTowerIndex].element.insertBefore(block.element, towers[toTowerIndex].element.firstChild);
        towers[toTowerIndex].blocks.unshift(towers[fromTowerIndex].blocks.shift());
        block.tower = toTowerIndex;
        moves++;
        updateScore();
        if(complete()){
            finishedText = scoreBox.querySelector("#complete");
            if (n_blocks > 2 && n_towers == 3){
                password = "flytta-rätt"
                finishedText.innerHTML = "Lösenord: " + password;
                save_password(password);
            } else {
                finishedText.innerHTML = "Så lätt ska det inte vara!" 
            }
        }
    }
}

function reset(){
    moves = 0;
    towers.forEach(tower => {
        towerBox.removeChild(tower.element);
    });
    blocks = [];
    towers = [];
    setup();
    updateScore();
    load_password();
}

function changeBlockNumber(){
    n_blocks = blockSlider.valueAsNumber;
    reset();    
}

function changeTowerNumber(){
    n_towers = towerSlider.valueAsNumber;
    reset();    
}

function save_password(pass){
    localStorage.setItem("password", pass);
}

function load_password(){
    pass = localStorage.getItem("password");
    if(pass){
        scoreBox.querySelector("#complete").innerHTML = "Lösenord: " + pass;
    }else {
        scoreBox.querySelector("#complete").innerHTML = "";
    }
}

setup();
load_password();
document.addEventListener("mousemove", move);
document.addEventListener("mouseup", release);
resetButton.addEventListener("click", reset);
blockSlider.addEventListener("input", changeBlockNumber);
towerSlider.addEventListener("change", changeTowerNumber);