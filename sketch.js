let myFont;
let s;
let rnd;
function setup() {
  createCanvas(400, 400);
  myFont = loadFont("Anta.ttf")
  rnd  = Math.random();
  console.log(rnd)
  s = new Square(190,190,20,20,"#00B4D8")
}

function draw() {
  background("#0077B6");
  textStuff()
  squareStuff()
}
function squareStuff(){
  s.display();
}
function textStuff(){
  push()
  fill("#CAF0F8")
  textSize(20)
  textFont(myFont)
  text("Clicker Game" , 125, 30)
}

