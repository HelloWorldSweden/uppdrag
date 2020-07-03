var gameBox = document.querySelector("#hanoiGameBox");
var towerElements = gameBox.querySelectorAll(".tower");
var blockElements = gameBox.querySelectorAll(".block");

var moves = 0;

var box = gameBox.getBoundingClientRect();
var Yref = box.top;
var Xref = box.left;

function relativeXY(event){
    return[event.clientX - Xref, event.clientY - Yref];
}

console.log(Yref + " " + Xref);


towers = []
towerElements.forEach((element, index) => {
    towers.push({
        element: element,
        blocks: [],
        index: index
    })
});

blocks = []
blockElements.forEach((element,index) => {
   element.style.setProperty("--i", 40 + (index+1)*30+"px");
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

console.log(blocks);
console.log(towers);



function lock(event, block){
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
            // if(y > 100){
            //     diffX = 0;
            // }else{
            //     diffX = x - block.x;
            // }
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
            if(95 < x && x < 155){
                switch_tower(block, block.tower, 0);
            } else if (250 < x && x < 310){
                switch_tower(block, block.tower, 1);
            } else if (420 < x && x < 480){
                switch_tower(block, block.tower, 2);
            }
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
        console.log("To: " + towers[toTowerIndex].blocks[0].size);
        console.log(towers[fromTowerIndex].blocks[0]);
        block.tower = toTowerIndex;
        moves++;
    }
}

blocks.forEach(block => {
    block.element.addEventListener("mousedown", (e) => lock(e, block));
});

document.addEventListener("mousemove", move);
document.addEventListener("mouseup", release);