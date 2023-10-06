const player = {
    x: 100,
    y: 256,
    width: 20,
    height: 20,
    speed: 3,
    mass: 64,
    yke: 0,
    gpe: 0
  }

// class Player {
//   constructor(){
//     this.attributes = {
//     x: 100,
//     y: 256,
//     width: 50,
//     height: 64,
//     speed: 0,
//     mass: 64,
//     yke: 0,
//     gpe: 0,
//     blockedLeft: false
//     blockedRight: false
//    }
// }

//   draw() {
//     c.fillStyle = "red";
//     c.fillRect(this.attributes.x, this.attributes.y, this.attributes.width, this.attributes.height);
//   }


//   input(){
//     // console.log(keysDown)
//    if('a' in keysDown && blockedLeft !== true){
//        this.attributes.speed = 5;
//        this.attributes.x -= 5;    
//    }  
//    if ('a' in keysDown && blockedLeft !== true && 'Control' in keysDown){
//     this.attributes.x -= 3;
//     this.attributes.speed = 8;
//    } 
//    if('d' in keysDown && blockedRight !== true){
//        this.attributes.speed = 5;
//        this.attributes.x += 5;
//    }
//    if ('d' in keysDown && blockedRight !== true && 'Control' in keysDown){
//     this.attributes.x += 3;
//     this.attributes.speed = 8;
//    }
//    if ('w' in keysDown && player.yke === 0) {
//      this.attributes.yke += 16;
//     }  
//  }
//}



  // const player = new Player()

  export {player };