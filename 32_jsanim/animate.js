// Team Imperial Ascension :: FMC, RM
// SoftDev pd2
// K32 -- Screensaver
// 2023-04-27r

var c = document.getElementById("playground");
var dotButton = document.getElementById("circle");
var dvdButton = document.getElementById("dvd");
var stopButton = document.getElementById("stop");

var ctx = c.getContext("2d");
ctx.fillStyle = "#00FFFF";

var requestID; // init global var


var clear = (e) => {
  // console.log("wiping canvas...");
  e.preventDefault(); // throws an error when the canvas is at the default state
  ctx.clearRect(0, 0, c.width, c.height);
};


var radius = 0;
var growing = true;

var drawDot = () => {
  console.log("start drawing...");
  stopIt();

  var draw = () => {
    if (radius == 250) {
      growing = false;
    }
    if (radius == 0) {
      growing = true;
    }
  
    if (growing) {
      radius = radius + 1;
    } else {
      radius = radius - 1;
    }
  
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.arc(c.width / 2, c.height / 2, radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    
    requestID = window.requestAnimationFrame(draw);
  }

  draw();
};


var dvdLogoSetup = () => {
  console.log("start drawing...");
  stopIt();

  var rectWidth = 60;
  var rectHeight = 40;

  var rectX = Math.floor(Math.random() * 440);
  var rectY = Math.floor(Math.random() * 460);

  var xVel = 1;
  var yVel = 1;

  var logo = new Image();
  logo.src = "logo_dvd.jpg";

  var dvdLogo = () => {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);

    if (rectX == 0 || rectX == 440) {
      xVel = -xVel;
    }
    if (rectY == 0 || rectY == 460) {
      yVel = -yVel;
    }
    
    rectX = rectX + xVel;
    rectY = rectY + yVel;
    requestID = window.requestAnimationFrame(dvdLogo);
  } 

  dvdLogo();
}


var stopIt = () => {
  // console.log("stopping it...");
  console.log(requestID);
  window.cancelAnimationFrame(requestID)
};


dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);
dvdButton.addEventListener("click", dvdLogoSetup);