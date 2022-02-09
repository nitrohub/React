const colors = ["#FFFFFF","#FF99CC","#FF6666","#CCFFCC","#CCCC99","#CC6666","#99FF33","#993399","#6666FF","#00FFCC","#3333FF","#000033","#FF0000","#00FF00","#FF00FF","#FFFF00"];

function randomColor(color){
    let randomColor = color
    while(randomColor === color)
        randomColor = colors[Math.floor(Math.random()*colors.length)];
    return randomColor;
}

export {colors,randomColor};
