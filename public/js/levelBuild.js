const c = document.getElementById("canvas").getContext("2d");

const drawLevel = (lvl, player) => {
  
    Object.keys(lvl).forEach(key => {
        for(let i = 0; i < lvl[key].length; i++){
            if (lvl[key][i] == 1) {
                c.fillStyle = "green";
                c.fillRect(i * 32 , Number(key) * 32, 32, 32);
            }
            if (lvl[key][i] == 2) {
                c.fillStyle = "brown";
                c.fillRect(i * 32 , Number(key) * 32, 32, 32);
            }
            if (lvl[key][i] == 3) {
                c.fillStyle = "grey";
                c.fillRect(i * 32 , Number(key) * 32, 32, 32);
            }
            if (lvl[key][i] == 0) {
                c.fillStyle = "skyBlue";
                c.fillRect(i * 32 , Number(key) * 32, 32, 32);
            } if (lvl[key][i] == 4) {
                c.fillStyle = "yellow";
                c.fillRect(i * 32 , Number(key) * 32, 32, 32);
            } if (lvl[key][i] == 5) {
                c.fillStyle = "black";
                c.fillRect(i * 32 , Number(key) * 32, 32, 32);
            }
        };
      
    });
    c.fillStyle = "red";
    c.fillRect(player.x, player.y, player.width, player.height);
    
}
export {c, drawLevel };