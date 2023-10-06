class CollisionBlock {
    constructor({position, color, type}){
      this.position = position;
      this.width = 32 ;
      this.height = 32;
      this.color = color;
      this.type =type;
    }
    draw() {
      c.fillStyle = this.color
      c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update(){
      this.draw()
    }
  }

 export {CollisionBlock };
import { c } from "../script.js";