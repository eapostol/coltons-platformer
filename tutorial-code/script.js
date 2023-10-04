const c = document.getElementById("canvas").getContext("2d");
const player = {
  x: 256,
  y: 256,
  width: 32,
  height: 32,
  speed: 3,
  mass: 64,
  yke: 0,
  gpe: 0
}
function main(){
  gravity(player)
  input()
  c.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  requestAnimationFrame(main);
}
// window.onload = function(){
//   currentLevel = parse(level);
//   main();
// }

const level = 
`0000000000000000
 0000000000000000
 0010000000000000
 0000000000001111
 0000111000000000
 0000000000011111
 0000000000000000
 0000000000111111
 0000000000011000
 1110000000000000
 0001000011000110
 0001111111100000
 0000000000100000
 0000000000100000
 0000000001111110
 1111111111111111
 `;

 function parse(lvl){
  const lines = lvl.split("\n");
  const characters = lines.map(l => l.split(""));
  return characters;
}

let currentLevel;

function draw(){
  c.fillStyle = "red";
  c.fillRect(player.x, player.y, player.width, player.height);
  
  c.fillStyle = "black";
  for (let row = 0; row < currentLevel.length; row++) {
    for (let col = 0; col < currentLevel[0].length; col++) {
      if (currentLevel[row][col] === "1") {
        c.fillRect(col * 32, row * 32, 32, 32);
      }
    }
  }
}

let keysDown = {};

addEventListener("keydown", function(event){
  keysDown[event.key] = true;
});

addEventListener("keyup", function(event){
  delete keysDown[event.key];
});


function input(){
  if('a' in keysDown){
    console.log('keydown')
    if (getTile((player.x - player.speed) + 1, player.y + 16) !== "1") {
      player.x -= 3;
    }
  }
  
  if('d' in keysDown){
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
  obj.y -= obj.yke;
  obj.yke -= obj.gpe;
  obj.gpe = calcGPE(obj);
  if (getTile(obj.x, obj.y) !== "0" || getTile(obj.x + 32, obj.y) !== "0") {
    if (obj.yke >= 0){
    obj.yke = -0.5;
    obj.y += 1;
    }
  } else {
    if (getTile(obj.x + 32, (obj.y + 32)) !== "0" || getTile(obj.x, (obj.y + 32)) !== "0") {
      if (obj.yke <= 0){
        obj.yke = 0;
        obj.y -= (obj.y % 32);
      }
    }
  }
}