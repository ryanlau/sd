// Team Imperium Ascension :: FMC, RL
// SoftDev pd2
// K30 -- canvas based JS drawing
// 2023-04-25t

var c = document.getElementById("slate");

var ctx = c.getContext("2d");

ctx.fillStyle = "red"

var mode = "rect";

var toggleMode = (e) => {
    var bToggler = document.getElementById("buttonToggle");

    console.log(e);
    if (mode == "rect") {
        mode = "circle";
        bToggler.innerHTML = "Circle";
    } else {
        mode = "rect";
        bToggler.innerHTML = "Rectangle";
    }
}


var drawCircle = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;

    ctx.beginPath();
    ctx.arc(mouseX, mouseY, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

var drawRect = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;

    ctx.fillRect(mouseX, mouseY, 100, 200);
}

var draw = (e) => {
    if (mode == "rect") {
        drawRect(e);
    } else {
        drawCircle(e);
    }
}

var wipeCanvas = () => {
    ctx.clearRect(0, 0, 600, 600)
}

c.addEventListener("click", draw);

var bToggler = document.getElementById("buttonToggle");
bToggler.addEventListener('click', toggleMode);

var clearB = document.getElementById("buttonClear");
clearB.addEventListener('click', wipeCanvas);
