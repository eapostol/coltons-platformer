import { currentLevel } from "./main.js";
import { player } from "./player.js";


// const c = document.getElementById("canvas").getContext("2d");
// const player = {
//   x: 100,
//   y: 256,
//   width: 32,
//   height: 32,
//   speed: 3,
//   mass: 64,
//   yke: 0,
//   gpe: 0
// }
// let lvl;
// const main = () => {
//    gravity(player)
//    collisions(player)
//    input()
//   c.clearRect(0, 0, canvas.width, canvas.height);
//   drawLevel(lvl)
//   requestAnimationFrame(main);
// }
//   window.onload = function(){
//      lvl = levelOne;
// startGame(lvl)
// }
// const startGame = (lvl) => {
//      currentLevel = lvl;
//      console.log(lvl)
//     main();
// }
//USE A QUEUE 
//  let levelOne = {
//     0:  [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
//     1:  [5,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,5],
//     2:  [5,0,4,4,4,4,0,0,0,0,1,0,0,0,0,0,5],
//     3:  [5,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,5],
//     4:  [5,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,5],
//     5:  [5,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,5],
//     6:  [5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,5],
//     7:  [5,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,5],
//     8:  [5,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,5],
//     9:  [5,0,0,0,0,0,0,0,0,0,0,1,1,2,2,2,5],
//     10: [5,0,0,0,0,0,1,1,0,0,0,1,1,2,2,2,5],
//     11: [5,0,0,0,0,0,1,2,0,0,0,1,1,2,2,2,5],
//     12: [5,0,0,0,0,0,1,2,0,0,0,1,1,0,2,2,5],
//     13: [5,0,0,1,1,1,1,2,0,1,1,1,1,0,1,1,5],
//     14: [5,0,0,2,2,2,2,2,0,0,0,0,0,0,0,0,5],
//     15: [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
// };

// const drawLevel = (lvl) => {
  
//     Object.keys(lvl).forEach(key => {
//         for(let i = 0; i < lvl[key].length; i++){
//             if (lvl[key][i] == 1) {
//                 c.fillStyle = "green";
//                 c.fillRect(i * 32 , Number(key) * 32, 32, 32);
//             }
//             if (lvl[key][i] == 2) {
//                 c.fillStyle = "brown";
//                 c.fillRect(i * 32 , Number(key) * 32, 32, 32);
//             }
//             if (lvl[key][i] == 3) {
//                 c.fillStyle = "grey";
//                 c.fillRect(i * 32 , Number(key) * 32, 32, 32);
//             }
//             if (lvl[key][i] == 0) {
//                 c.fillStyle = "skyBlue";
//                 c.fillRect(i * 32 , Number(key) * 32, 32, 32);
//             } if (lvl[key][i] == 4) {
//                 c.fillStyle = "yellow";
//                 c.fillRect(i * 32 , Number(key) * 32, 32, 32);
//             } if (lvl[key][i] == 5) {
//                 c.fillStyle = "black";
//                 c.fillRect(i * 32 , Number(key) * 32, 32, 32);
//             }
//         };
      
//     });
//     c.fillStyle = "red";
//     c.fillRect(player.x, player.y, player.width, player.height);
    
// }



// let currentLevel;


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
    // console.log(keysDown)
   if('a' in keysDown && blockedLeft !== true){
       player.x -= 3;
     
   }  
   if ('a' in keysDown && blockedLeft !== true && 'Control' in keysDown){
    player.x -= 2;
   }
   
   if('d' in keysDown && blockedRight !== true){
       player.x += 3;
   }
   if ('d' in keysDown && blockedRight !== true && 'Control' in keysDown){
    player.x += 2;
   }

   if ('w' in keysDown && player.yke === 0) {
     player.yke += 8;
    }  
 }

 const getTile = (x,y) => {
    return(currentLevel[Math.floor(y / 32)][Math.floor(x / 32)]);
 }

//  if(obj.x > 400 and key press is d){
//          give background speed of +3
 let solidBlock = [1,5] 
let solidFloor = [4]



  //handle side to side collision 
// const collisions = (obj) => {
  
//      if ( solidBlock.includes(getTile((obj.x - obj.speed) + 1, obj.y + obj.height-1))) {
//         blockedLeft = true
//           console.log('ow my left face')
//      }  else {
//          blockedLeft = false
//      }
//       if (solidBlock.includes(getTile(((obj.x + obj.width) + obj.speed) - 1, obj.y + obj.height-1))) {
//           blockedRight = true
//             console.log('ow my right face')
//       }  else {
//           blockedRight = false
//       }

// }
const collisions = (obj) => {
    const left = Math.floor((obj.x - obj.speed) / 32);
    const right = Math.floor(((obj.x + obj.width) + obj.speed) / 32);
    const bottom = Math.floor((obj.y + obj.height - 1) / 32);
  
    if (solidBlock.includes(getTile(left * 32, bottom * 32)) ) {
      blockedLeft = true;
      console.log('ow my left face');
    } else {
      blockedLeft = false;
    }
  
    if (solidBlock.includes(getTile(right * 32, bottom * 32))) {
      blockedRight = true;
      console.log('ow my right face');
    } else {
      blockedRight = false;
    }
  }

 const calcGPE = (obj) => {
   return obj.mass * (9.8 / 1000000) * ((canvas.height - obj.height) - (obj.y / 32));
 }

//handles gravity and affecters of gravity(head collisions, atacks etc)
 function gravity(obj) {

    // This line subtracts the current vertical velocity (yke) from the player's y position.
    // This effectively moves the player up or down based on his current velocity.
    obj.y -= obj.yke;

    // This line subtracts the current gravitational force (gpe) from the player's vertical velocity (yke).
    // This is the effect of gravity on the player.
    obj.yke -= obj.gpe;

    // This line calculates the new gravitational force based on the player's mass and position.
    obj.gpe = calcGPE(obj);


   

    // handle object top collisions for fully Solid Blocks
   if (solidBlock.includes(getTile(obj.x + 32, obj.y))  ||  solidBlock.includes(getTile(obj.x , obj.y))) {
         if (obj.yke >= 0){
             obj.yke = -0.5;
             obj.y += (4);
         }
     }  


    //handle object land on floor solidFloor Blocks
    if (solidFloor.includes(getTile(obj.x + player.width , obj.y + player.height )) || solidFloor.includes(getTile(obj.x, (obj.y + player.height )))) {

        if (obj.yke <= 0){
            obj.yke = 0;
            obj.y -= (obj.y % 32);
        }
    }  

    //handle object land on the ground for fully Solid Blocks   
     if (solidBlock.includes(getTile(obj.x + player.width, (obj.y + player.height))) || solidBlock.includes(getTile(obj.x, (obj.y + player.height))) ) {
        console.log('im on the ground i guess')
        if (obj.yke <= 0){
            obj.yke = 0;
            obj.y -= (obj.y % 32);
        }
    }
    
}

export { gravity, collisions, input };