const canvasWidth = 1000;
const canvasHeight = 1000;
const petalOffset = 125;
let numPetals = 16;
let size = 100;
let myMap = 0;
let flowerColor;

let message = 'daisy',
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 160,
  x,
  y; // x and y coordinates of the text
 randomColor = 'EEC20E'
 locked = false;



function preload(){
  font = loadFont('assets/RemachineScript_Personal_Use.ttf');
}
function setup() {
  let renderer = createCanvas(1000, 1000);
  renderer.parent("canvas-container");  
  // set up the font
  textFont(font);
  flowerColor = color(random(255, 205), random(205, 255), random(205, 205),150);


  // get the width and height of the text so we can center it initially
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = 150;
  y = 200;
}

function jiggleText() {
  // check if the mouse is inside the bounding box and tickle if so
  if (
    mouseX - width / 2>= bounds.x &&
    mouseX - width / 2 <= bounds.x + bounds.w &&
    mouseY - height / 2 >= bounds.y &&
    mouseY - height / 2 <= bounds.y + bounds.h
  ) {
    x += random(-1.5, 1.5);
    y += random(-1.5, 1.5);
  }
}
function drawText() {
  // write the text in black and get its bounding box
  fill('#f6af0e');
  text(message, x, y);
  bounds = font.textBounds(message, x, y, fontsize);
  textSize(50);
}
function flower() {
  for (let x = 0; x < width; x += size + 200) {
    for (let y = 0; y < height; y += size + 200) {
      push();
      translate(x-500, y-500);
      rotate(myMap);
      fill(255);
      for (let i = 0; i <=10; i++) {
        fill(flowerColor);
        noStroke();
        ellipse(0, 30, 20, 80);
        rotate(180 / 5);
      }
      pop();

      myMap = map(mouseX * 30, mouseY * 20, 0, 0, 10);
    }
  }
}
function clicktext(){
  fill('#113f99');
  text("click on the circle to see the color change",-200,270);
 textSize(160);
}

function drawPetals() {
 // noStroke()
  stroke(255, 228, 181);
  fill(255);
  let flowerPetalDistant = 360 / numPetals;

  for (let i = 0 ; i<numPetals; ++i) {
    rotate(radians(flowerPetalDistant));
    ellipse(0, -petalOffset,60,200);
  }



}
function drawFlowerCenter() {
  fill('#' + randomColor);
  stroke(255, 218, 185);
  circle(0,0,100);
}

function mousePressed() {
  locked = true;
  mouseInFlowerCenter = (dist(mouseX, mouseY, width/2, height/2) < 50);
  if (mouseInFlowerCenter) {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
  }
}

function mouseReleased() {
  locked = false;
}


function drawFlower() {
  drawPetals()
  drawFlowerCenter();
}

function draw() {
  background(179, 211, 244);
  translate(width / 2, height / 2);
  flower();
  drawFlower()
  drawText();
  jiggleText();
  clicktext();

}
