import { currentLevel } from "./main.js";
import { player } from "./player.js";

 let keysDown = {};
//  let shift = 0;
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
       player.speed = 5;
       player.x -= 5;
     
   }  
   if ('a' in keysDown && blockedLeft !== true && 'Control' in keysDown){
    player.x -= 3;
    player.speed = 8;
  
    
   }
   
   if('d' in keysDown && blockedRight !== true){
       player.speed = 5;
       player.x += 5;
   }
   if ('d' in keysDown && blockedRight !== true && 'Control' in keysDown){
    player.x += 3;
    player.speed = 8;
   }

   if ('w' in keysDown && player.yke === 0) {
     player.yke += 16;
    }  
 }

 const getTile = (x,y) => {
    return(currentLevel[Math.floor(y / 64)][Math.floor(x / 64)]);
 }


// const  moveBackgroundHorizontal = (obj) =>{
//   if(obj.x > 700 && obj.speed > 0 && 'd' in keysDown){
//         //  give background speed of speed
// shift += 1;
//         console.log(obj.x, obj.speed)
// } 
// }

 let solidBlock = [1,5] 
let solidFloor = [4]



  //handle side to side collision 

const collisions = (obj) => {
    const left = Math.floor(((obj.x - 1)));
    const right = Math.floor(((obj.x + (obj.width + 2))));
    const bottom = Math.floor((obj.y + obj.height - 1));
    const top = Math.floor((obj.y  +1));
  
    if (solidBlock.includes(getTile(left - obj.speed, bottom)) || solidBlock.includes(getTile(left - obj.speed, top))  ) {
      blockedLeft = true;
      // console.log('ow my left face');
    } else {
      blockedLeft = false;
    }
  
    if (solidBlock.includes(getTile(right + obj.speed, bottom)) || solidBlock.includes(getTile(right + obj.speed, top))) {
      blockedRight = true;
      // console.log('ow my right face');
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
   if (solidBlock.includes(getTile(obj.x + obj.width, obj.y))  ||  solidBlock.includes(getTile(obj.x , obj.y))) {
         if (obj.yke >= 0){
             obj.yke = -0.5;
             obj.y += (4);
         }
     }  


    //handle object land on floor solidFloor Blocks
    if (solidFloor.includes(getTile(obj.x + obj.width , obj.y + obj.height )) || solidFloor.includes(getTile(obj.x, (obj.y + obj.height )))) {

        if (obj.yke <= 0){
            obj.yke = 0;
            obj.y -= (obj.y % 64);
        }
    }  

    //handle object land on the ground for fully Solid Blocks   
     if (solidBlock.includes(getTile(obj.x + obj.width, (obj.y + obj.height))) || solidBlock.includes(getTile(obj.x, (obj.y + obj.height))) ) {
        // console.log('im on the ground i guess')
        if (obj.yke <= 0){
            obj.yke = 0;
            obj.y -= (obj.y % 64);
        }
    }
    
}

export { gravity, collisions, input};