import { gravity, collisions, input } from "./gameplay.js";
import { player } from "./player.js";
import { c, drawLevel } from "./levelBuild.js";
import { levelOne } from "./level.js";

let lvl;
let currentLevel;

const startGame = (lvl) => {
     currentLevel = lvl;
     console.log(lvl)
    main();
}

const main = () => {
   gravity(player)
   collisions(player)
   input()
  c.clearRect(0, 0, canvas.width, canvas.height);
  drawLevel(lvl, player)
  requestAnimationFrame(main);
}
  window.onload = function(){
     lvl = levelOne;
startGame(lvl)
}

export {currentLevel}