const c = document.getElementById("canvas").getContext("2d");


const drawLevel = (lvl, player) => {
  
    Object.keys(lvl).forEach(key => {
        for(let i = 0; i < lvl[key].length; i++){
            let digit = Number(lvl[key][i]);
            if (digit == 1) {
                c.fillStyle = "green";
            } else if (digit == 2) {
                c.fillStyle = "brown";
            } else if (digit == 3) {
                c.fillStyle = "grey";
            } else if (digit == 0) {
                c.fillStyle = "skyBlue";
            } else if (digit == 4) {
                c.fillStyle = "yellow";
            } else if (digit == 5) {
                c.fillStyle = "darkGrey";
            }
            c.fillRect(i * 64 , Number(key) * 64, 64, 64);
        };
    });
    c.fillStyle = "red";
    c.fillRect(player.x, player.y, player.width, player.height);
}

export {c, drawLevel };