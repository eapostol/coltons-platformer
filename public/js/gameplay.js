const c = document.getElementById("canvas").getContext("2d");
const player = {
  x: 100,
  y: 256,
  width: 32,
  height: 32,
  speed: 3,
  mass: 64,
  yke: 0,
  gpe: 0
}
let lvl;
function main(){
   gravity(player)
   input()
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawLevel(lvl)
  requestAnimationFrame(main);
}
window.onload = function(){
     lvl = levelOne;
startGame(lvl)
}
const startGame = (lvl) => {
     currentLevel = lvl;
     console.log(lvl)
    main();
}

 const levelOne = {
    1:  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    2:  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    3:  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    4:  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1],
    5:  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
    6:  [0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,2],
    7:  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2],
    8:  [0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,2],
    9:  [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,2],
    10: [0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
    11: [0,0,0,0,0,0,1,1,1,1,1,0,2,2,2,2,2],
    12: [0,0,0,0,0,0,1,2,2,2,1,0,2,2,2,2,2],
    13: [0,0,0,0,0,0,1,2,2,2,1,0,2,2,2,2,2],
    14: [1,0,0,1,1,1,1,2,2,2,1,1,1,1,1,1,1],
    15: [2,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    16: [2,0,0,2,3,3,3,3,3,3,3,3,3,3,3,3,3]
};

const drawLevel = (lvl) => {
  
    Object.keys(lvl).forEach(key => {
        for(let i = 0; i < lvl[key].length; i++){
            if (lvl[key][i] == 1) {
                c.fillStyle = "green";
                c.fillRect(i * 32, Number(key) * 32, 32, 32);
            }
            if (lvl[key][i] == 2) {
                c.fillStyle = "brown";
                c.fillRect(i * 32, Number(key) * 32, 32, 32);
            }
            if (lvl[key][i] == 3) {
                c.fillStyle = "grey";
                c.fillRect(i * 32, Number(key) * 32, 32, 32);
            }
            if (lvl[key][i] == 0) {
                c.fillStyle = "skyBlue";
                c.fillRect(i * 32, Number(key) * 32, 32, 32);
            } if (lvl[key][i] == 4) {
                c.fillStyle = "yellow";
                c.fillRect(i * 32, Number(key) * 32, 32, 32);
            }
        };
      
    });
    c.fillStyle = "red";
    c.fillRect(player.x, player.y, player.width, player.height);
    
}



let currentLevel;

 function parse(lvl){
  const lines = lvl.split("\n");
  const characters = lines.map(l => l.split(""));
  return characters;
}

 let keysDown = {};

 addEventListener("keydown", function(event){
   keysDown[event.key] = true;
 });

 addEventListener("keyup", function(event){
   delete keysDown[event.key];
 });
let blockedLeft 
let blockedRight 
 function input(){
   if('a' in keysDown&& blockedRight !== true){
     console.log('keydown')
     if (getTile((player.x - player.speed) + 1, player.y + 16) !== "1") {
       player.x -= 3;
     }
   }
   
   if('d' in keysDown && blockedLeft !== true){
     console.log('keydown')
     if (getTile(((player.x + player.width) + player.speed) - 1, player.y + 16) !== "1") {
       player.x += 3;
     }
   }
   if ('w' in keysDown && player.yke === 0) {
     if (getTile(player.x,player.y - 1) !== "1" && getTile(player.x + 32,player.y - 1) !== "1"){
     player.yke += 8;
     }
 }  
 }

 function getTile(x,y){
   return(currentLevel[Math.floor(y / 32)][Math.floor(x / 32)]);
 }

 function calcGPE(obj) {
   return obj.mass * (9.8 / 1000000) * ((canvas.height - obj.height) - (obj.y / 32));
 }

 function gravity(obj) {
    // This line subtracts the current vertical velocity (yke) from the player's y position.
    // This effectively moves the player up or down based on his current velocity.
    obj.y -= obj.yke;

    // This line subtracts the current gravitational force (gpe) from the player's vertical velocity (yke).
    // This is the effect of gravity on the player.
    obj.yke -= obj.gpe;

    // This line calculates the new gravitational force based on the player's mass and position.
    obj.gpe = calcGPE(obj);

    // This block checks if the player is touching any obstacles in the current column.
    // If the player is touching an obstacle, it adjusts the player's vertical position and velocity.
    
    if (getTile(obj.x + 32, obj.y) === 1 || getTile(obj.x , obj.y) === 1) {

        if (obj.yke >= 0){
            obj.yke = -0.5;
            obj.y += 1;
        }
    }  
   //handle side to side collision 
    if ( getTile(obj.x +32, obj.y) === 1) {
       blockedLeft = true
        // console.log('ow my left face')
    }  else {
        blockedLeft = false
    }
    if (getTile(obj.x  -2, obj.y) === 1 ) {
        blockedRight = true
        // console.log('ow my right face')
    }  else {
        blockedRight = false
    }


    //handle wooden blocks
    if (getTile(obj.x + 32, obj.y) === 4) {  
    } else if (getTile(obj.x, (obj.y + 32)) === 4) {

        if (obj.yke <= 0){
            obj.yke = 0;
            obj.y -= (obj.y % 32);
        }
    }  
        // This block checks if the player is touching any obstacles in the next row.
        // If the player is touching an obstacle, it adjusts the player's vertical position and velocity.

    //handle feet on the ground    
    if (getTile(obj.x + 32, (obj.y + 32)) === 1 || getTile(obj.x, (obj.y + 32)) ===1) {
        // console.log('im on the ground i guess')
        if (obj.yke <= 0){
            obj.yke = 0;
            obj.y -= (obj.y % 32);
        }
    }
    
}
