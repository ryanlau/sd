var c = document.getElementById("slate");

var ctx = c.getContext("2d");

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


    console.log(mouseX);
    console.log(mouseY);
}

var drawRect = function(e) {
    var mouseX = e.offsetX;
    var mouseY = e.offsetY;

    console.log(e);
    console.log(e.offsetX);
    console.log(e.offsetY);
    console.log(e);

}

var draw = (e) => {
    if (mode == "rect") {
        drawRect(e)
    } else {
        drawCircle(e)
    }
}


c.addEventListener("click", draw)

var bToggler = document.getElementById("buttonToggle");
bToggler.addEventListener('click', toggleMode);


var clearB = document.getElementById("buttonClear");
// clearB.addEventListener('click', wipeCanvas)
