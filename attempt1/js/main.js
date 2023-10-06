import { gravity, collisions, input} from "./gameplay.js";
import { player } from "./player.js";
import { c, drawLevel } from "./levelBuild.js";
import { levelOne, convertLevel } from "./level.js";

let lvl;
let currentLevel;

  window.onload = function(){
     lvl = levelOne;
startGame(lvl)
}

const startGame = (lvl) => {
     currentLevel = convertLevel(lvl);
     console.log(currentLevel)
    main();
}

const main = () => {
  
   gravity(player)
   collisions(player)
   input()
  //  moveBackgroundHorizontal(player)
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawLevel(lvl, player)
  requestAnimationFrame(main);
}


export {currentLevel}