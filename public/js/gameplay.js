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
//   gravity(player)
//   input()
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawLevel(lvl)
//draw();
  requestAnimationFrame(main);
}
window.onload = function(){
    // lvl = levelOne;
startGame()
}
const startGame = (lvl) => {
    // currentLevel = parse(level);
    // console.log(currentLevel)
    console.log(lvl)
    main();
}

// const level = 
// `00000000000000111
//  00000010000000001
//  01000000000000011
//  00001000000111111
//  00111100000000011
//  00100000001111111
//  01000000000000011
//  10000000011111111
//  10000000001100011
//  11000000000000011
//  10100001100011011
//  10111111110000011
//  10000000000000011
//  10000000000000011
//  10000000111110111
//  11111111111111111`;

 const levelOne = {
    1: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    2: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    3: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    4: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    5: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    6: [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
    7: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    8: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    9: [0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],
    10: [0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
    11: [0,0,0,0,0,0,1,1,1,1,1,0,2,2,2,2,2],
    12: [0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
    13: [0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2],
    14: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    15: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    16: [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
};

const drawLevel = (lvl) => {
  
    Object.keys(lvl).forEach(key => {
        for(let i = 0; i < lvl[key].length; i++){
            if (lvl[key][i] == 1) {
                c.fillStyle = "green";
                c.fillRect(i * 32, Number(key) * 32, 32, 32);
                console.log(`${key} ${i} im green ba da di a`)
            }
            if (lvl[key][i] == 2) {
                c.fillStyle = "brown";
                c.fillRect(i * 32, Number(key) * 32, 32, 32);
                console.log(`${key} ${i} im green ba da di a`)
            }
            if (lvl[key][i] == 3) {
                c.fillStyle = "grey";
                c.fillRect(i * 32, Number(key) * 32, 32, 32);
                console.log(`${key} ${i} im green ba da di a`)
            }
            if (lvl[key][i] == 0) {
                c.fillStyle = "skyBlue";
                c.fillRect(i * 32, Number(key) * 32, 32, 32);
                console.log(`${key} ${i} im green ba da di a`)
            }
        };
      
    });
    c.fillStyle = "red";
    c.fillRect(player.x, player.y, player.width, player.height);
    
}



// drawLevel(levelOne)
let currentLevel;

 function parse(lvl){
  const lines = lvl.split("\n");
  const characters = lines.map(l => l.split(""));
  return characters;
}

function draw(){
  c.fillStyle = "red";
  c.fillRect(player.x, player.y, player.width, player.height);
  
  c.fillStyle = "black";
  for (let row = 0; row < currentLevel.length; row++) {
    for (let i = 0; i < currentLevel[0].length; i++) {
      if (currentLevel[row][i] === "1") {
        c.fillStyle = "blue";
        c.fillRect(i * 32, row * 32, 32, 32);
        console.log(`${i} ${row} im blue ba da di a`)

      }
    }
  }
}

// let keysDown = {};

// addEventListener("keydown", function(event){
//   keysDown[event.key] = true;
// });

// addEventListener("keyup", function(event){
//   delete keysDown[event.key];
// });


// function input(){
//   if('a' in keysDown){
//     console.log('keydown')
//     if (getTile((player.x - player.speed) + 1, player.y + 16) !== "1") {
//       player.x -= 3;
//     }
//   }
  
//   if('d' in keysDown){
//     console.log('keydown')
//     if (getTile(((player.x + player.width) + player.speed) - 1, player.y + 16) !== "1") {
//       player.x += 3;
//     }
//   }
//   if ('w' in keysDown && player.yke === 0) {
//     if (getTile(player.x,player.y - 1) !== "1" && getTile(player.x + 32,player.y - 1) !== "1"){
//     player.yke += 8;
//     }
// }
// }

// function getTile(x,y){
//   return(currentLevel[Math.floor(y / 32)][Math.floor(x / 32)]);
// }

// function calcGPE(obj) {
//   return obj.mass * (9.8 / 1000000) * ((canvas.height - obj.height) - (obj.y / 32));
// }

// function gravity(obj) {
//   obj.y -= obj.yke;
//   obj.yke -= obj.gpe;
//   obj.gpe = calcGPE(obj);
//   if (getTile(obj.x, obj.y) !== "0" || getTile(obj.x + 32, obj.y) !== "0") {
//     if (obj.yke >= 0){
//     obj.yke = -0.5;
//     obj.y += 1;
//     }
//   } else {
//     if (getTile(obj.x + 32, (obj.y + 32)) !== "0" || getTile(obj.x, (obj.y + 32)) !== "0") {
//       if (obj.yke <= 0){
//         obj.yke = 0;
//         obj.y -= (obj.y % 32);
//       }
//     }
//   }
// }