let myFont;
let s;
let rndX;
let rndY;
function setup() {
  createCanvas(400, 400);
  myFont = loadFont("Anta.ttf");
  generateRndNum();
  s = new Square(rndX, rndY, 20, 20, "#00B4D8");
}
function draw() {
  background("#0077B6");
  textStuff();
  squareStuff();
}

function generateRndNum() {
  rndX = Math.random() * 400;
  rndX = Math.floor(rndX);
  rndY = Math.random() * 400;
  rndY = Math.floor(rndY);
}
function squareStuff() {
  s.display();
}
function textStuff() {
  push();
  fill("#CAF0F8");
  textSize(20);
  textFont(myFont);
  text("Clicker Game", 125, 30);
}
