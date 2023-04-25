var c = document.getElementById("playground");
var dotButton = document.getElementById("buttonCircle");
var stopButton = document.getElementById("buttonStop");

var ctx = c.getContext("2d");

ctx.fillStyle = "red";

var requestID; 
var clear = (e) => {
    ctx.clearRect(0,0,500,500);
}

var radius = 0;
var growing = true;
var animating = false;

var drawDot = (e) => {
    if (e.type == "click" && animating) {
        return
    }
    animating = true;
    clear();
    requestID = window.requestAnimationFrame(drawDot);
    console.log(requestID);
    ctx.beginPath();
    ctx.arc(250, 250, radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.stroke();

    if (growing == true){
        radius ++;
    }
    else {
        radius --;
    }
    if (radius > 250){
        growing = false;
    }
    if (radius == 0){
        growing = true;
    }
}

var stopIt = function() {
    console.log("stopIt  invoked...")
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
    animating = false;
}

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);