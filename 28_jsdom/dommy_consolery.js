// Team Imperium Ascension :: FMC, RL
// SoftDev pd02
// K28 -- Building Castles in the Sand
// 2023-04-17m
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO");

// is var always needed??
var i = "hello"; // i may be redefined to an object that's not a string
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30; // does not change the value of j outside the function
  return j+x; // uses the j value defined in the function
};


//instantiate an object
var o = { 'name' : 'Thluffy',
          age : 1024,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) {
            return x+30;
          }
        };

// variables can be accessed with o.VAR_NAME
// variables can be modified with o.VAR_NAME = NEW_VALUE
//     can even change variable type
// func can be called with o.func


var addItem = function(text) {
  // getElement = one element
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li"); // creates an element with the property li, so it continues numbering the list
  newitem.innerHTML = text;
  list.appendChild(newitem);
};

// Adding Text
var addText = function(id, text) {
  var list = document.getElementById(id);
  var newitem = document.createElement("text"); // creates an element with the property li, so it continues numbering the list
  newitem.innerHTML = text; 
  list.appendChild(newitem); 
};


var removeItem = function(n) { // standard index convention starting at 0
  // getElements = zero or more elements
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};


var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    // element.classList.add() is very smart, it only adds the class if the element doesn't have it already
    items[i].classList.add('red'); // appends red to the class list
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

//insert your implementations here for...
// FIB

var fib = function(n) {
  if (n == 0) {
      return 0;
  }
  if (n == 1) {
      return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

// FAC

var fact = function(n) {
  if (n > 1) {
      return n * fact(n - 1);
  } else {
      return 1;
  }
};

// GCD

var gcd = function(m, n) {
  if (m % n == 0) {
    return n;
  }
  return gcd(n, m % n);
};
