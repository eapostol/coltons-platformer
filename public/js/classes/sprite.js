import { c } from "../script.js";
// this is for anything that will be an image put on to the game canvas
class Sprite {
    constructor({position, imageSrc}){
      this.position = position
      this.image = new Image()
      this.image.src = imageSrc
    }
    draw() {
      if (!this.image) {return}
      c.drawImage(this.image, this.position.x, this.position.y)
    }
    update() {
      this.draw()
    }
  }

export {Sprite };