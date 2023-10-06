import { c, gravity, keys } from "../script.js";
import { collision } from "../data/collisions.js";
let blockedLeft = false;
let blockedRight = false;

// this housees the players attributes as well as can be used for making non-player objects, also this iterates over the collision checks
class Player {
    constructor({position, collisionBlocks}){
        this.collisionBlocks = collisionBlocks
      this.position = position
      this.velocity = {
       x: 25,
       y: 1
      }
      this.height = 28,
      this.width = 28
     }
  
 
    draw() {
      c.fillStyle = "red";
      c.fillRect(this.position.x, this.position.y, this.height, this.width);
      
    }
    update(){
     this.draw()
     this.position.x += this.velocity.x
     this.checkForSideCollsions()
     this.applyGravity()
     this.checkForVerticalCollsions()
    }
     applyGravity() {
        this.position.y += this.velocity.y;
        this.velocity.y += gravity
    }
    // checks side the side
checkForSideCollsions(){
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i];
            if (
                collision({
                object1: this,
                object2: collisionBlock,
            })
            ) {
//removes movement conditions from spike blocks and logs ouch                
if (collisionBlock.type == 'spikes'){
    console.log('OUCH!!')
   } else  {               
if (this.velocity.x > 0){
    this.velocity.x = 0
    this.position.x = collisionBlock.position.x - this.width -0.02
}
if (this.velocity.x < 0){
    this.velocity.x = 0
    this.position.x = 
            collisionBlock.position.x + collisionBlock.width + 0.01
     }
    }
   }
  }
 }
    // check vertical collisions
checkForVerticalCollsions(){
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i];
            if (
                collision({
                object1: this,
                object2: collisionBlock,
            })
            ) {
// currently, this is less janky solve for getting solid top block types to work
// essentialy it only has a different action if jumping up through the block, otherwise it acts the same as other blocks
 
if (collisionBlock.type == 'solidTop' && this.velocity.y < 0){
    this.position.y = collisionBlock.position.y - this.height + 0.01
} 
//removes movement conditions from spike blocks and logs ouch                
else if (collisionBlock.type == 'spikes'){
        console.log('OUCH!!')
     
} else {   
if (this.velocity.y > 0){
    this.velocity.y = 0
    this.position.y = collisionBlock.position.y - this.height -0.01
    
} 
if (this.velocity.y < 0){
    this.velocity.y = 0
    this.position.y = 
            collisionBlock.position.y + collisionBlock.height + 0.01
        }
       }    
      }
     }
    }  
}
export {Player, blockedLeft, blockedRight};

