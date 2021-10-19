//
let img1, img2;
let imageStartingXOrigin;
let outerShapeXOrigin;
let outerShapeYOrigin;
let outerShapeWidth;
let outerShapeHeight;
let innerShapeXOrigin, innerShapeYOrigin, innerShapeWidth, innerShapeHeight;
let mouseIsClicked;

let mic;
let myMap = 0;
let size = 200;
let runDistance = 800;
let backgroundColor;
let flowerColor;

function preload() {
  // preload() runs once
  img1 = loadImage("assets/Untitled_Artwork 4.png");
  img2 = loadImage("assets/Untitled_Artwork 5.png");
  img3 = loadImage("assets/Untitled_Artwork 6.png");
  img4 = loadImage("assets/Art_103 2.png");
  img5 = loadImage("assets/Uyen_Huynh_Gif1.gif");
  img6 = loadImage("assets/Untitled_Artwork 7.png");
  img7 = loadImage("assets/Untitled_Artwork 8.png");
  img8 = loadImage("assets/Egg(s).png");
}
function setUpPolaroid() {
  myPolaroid = new MyImage(
    1,
    img1,
    imageStartingXOrigin,
    height * 0.15,
    width * 0.5,
    height * 0.65,
    shapeColor1,
    outerShapeXOrigin,
    outerShapeYOrigin,
    outerShapeWidth,
    outerShapeHeight,
    innerShapeXOrigin,
    innerShapeYOrigin,
    innerShapeWidth,
    innerShapeHeight,
    new Mouth(width * 0.515, height * 0.55, 50, 50, 0, -180)
  );

  myPolaroid2 = new MyImage(
    2,
    img2,
    imageStartingXOrigin - 800,
    height * 0.15,
    width * 0.5,
    height * 0.65,
    shapeColor2,
    outerShapeXOrigin - 800,
    outerShapeYOrigin,
    outerShapeWidth,
    outerShapeHeight,
    innerShapeXOrigin,
    innerShapeYOrigin,
    innerShapeWidth,
    innerShapeHeight,
  );
  myPolaroid3 = new MyImage(
    3,
    img3,
    imageStartingXOrigin - 1600,
    height * 0.15,
    width * 0.5,
    height * 0.65,
    shapeColor3,
    outerShapeXOrigin - 1600,
    outerShapeYOrigin,
    outerShapeWidth,
    outerShapeHeight,
    innerShapeXOrigin,
    innerShapeYOrigin,
    innerShapeWidth,
    innerShapeHeight
  );
  myPolaroid4 = new MyImage(
    4,
    img4,
    imageStartingXOrigin - 2400,
    height * 0.15,
    width * 0.5,
    height * 0.65,
    shapeColor4,
    outerShapeXOrigin - 2400,
    outerShapeYOrigin,
    outerShapeWidth,
    outerShapeHeight,
    innerShapeXOrigin,
    innerShapeYOrigin,
    innerShapeWidth,
    innerShapeHeight,
    new Mouth(width * 0.51 - 2400, height * 0.49, 15, 30, 0, -180)
  );

  myPolaroid5 = new MyImage(
    5,
    img5,
    imageStartingXOrigin - 3200,
    height * 0.15,
    width * 0.5,
    height * 0.65,
    shapeColor5,
    outerShapeXOrigin - 3200,
    outerShapeYOrigin,
    outerShapeWidth,
    outerShapeHeight,
    innerShapeXOrigin,
    innerShapeYOrigin,
    innerShapeWidth,
    innerShapeHeight
  );

  myPolaroid6 = new MyImage(
    6,
    img6,
    imageStartingXOrigin - 4000,
    height * 0.15,
    width * 0.5,
    height * 0.65,
    shapeColor6,
    outerShapeXOrigin - 4000,
    outerShapeYOrigin,
    outerShapeWidth,
    outerShapeHeight,
    innerShapeXOrigin,
    innerShapeYOrigin,
    innerShapeWidth,
    innerShapeHeight
  );

  myPolaroid7 = new MyImage(
    7,
    img7,
    imageStartingXOrigin - 4800,
    height * 0.15,
    width * 0.5,
    height * 0.65,
    shapeColor7,
    outerShapeXOrigin - 4800,
    outerShapeYOrigin,
    outerShapeWidth,
    outerShapeHeight,
    innerShapeXOrigin,
    innerShapeYOrigin,
    innerShapeWidth,
    innerShapeHeight
  );
  myPolaroid8 = new MyImage(
    8,
    img8,
    imageStartingXOrigin - 5600,
    height * 0.15,
    width * 0.5,
    height * 0.65,
    shapeColor8,
    outerShapeXOrigin - 5600,
    outerShapeYOrigin,
    outerShapeWidth,
    outerShapeHeight,
    innerShapeXOrigin,
    innerShapeYOrigin,
    innerShapeWidth,
    innerShapeHeight
  );
}
function setup() {
  createCanvas(1000, 1000);

  angleMode(DEGREES);

  imageStartingXOrigin = width * 0.25;

  outerShapeXOrigin = width * 0.2;
  outerShapeYOrigin = height * 0.1;
  outerShapeWidth = width * 0.6;
  outerShapeHeight = height * 0.8;

  innerShapeXOrigin = width * 0.25;
  innerShapeYOrigin = height * 0.15;
  innerShapeWidth = width * 0.5;
  innerShapeHeight = height * 0.65;

  shapeColor1 = color(random(255, 205), random(205, 255), random(205, 205));
  shapeColor2 = color(random(255, 205), random(205, 255), random(205, 205));
  shapeColor3 = color(random(255, 205), random(205, 255), random(205, 205));
  shapeColor4 = color(random(255, 205), random(205, 255), random(205, 205));
  shapeColor5 = color(random(255, 205), random(205, 255), random(205, 205));
  shapeColor6 = color(random(255, 205), random(205, 255), random(205, 205));
  shapeColor7 = color(random(255, 205), random(205, 255), random(205, 205));
  shapeColor8 = color(random(255, 205), random(205, 255), random(205, 205));
  flowerColor = color(random(255, 205), random(205, 255), random(205, 205),150);
  backgroundColor = color(random(255, 205), random(205, 255), random(205, 205));
  setUpPolaroid();

  userStartAudio();
  mic = new p5.AudioIn();
  mic.start();

}
function flower() {
  for (let x = 0; x < width; x += size + 30) {
    for (let y = 0; y < height; y += size + 30) {
      push();
      translate(x, y);
      rotate(myMap*10);
      fill(255);
      for (let i = 0; i < 10; i++) {
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
function mouseClicked() {
  // if mouse is clicked within the polaroid frame, then set mouse is clicked to true
  if (
    mouseX > outerShapeXOrigin && // mouse is on the right of where the polaroid start
    mouseX < outerShapeXOrigin + outerShapeWidth && // mouse is on the left of where the polaroid end
    mouseY > outerShapeYOrigin && //mouse is under the upper edge of the polaroid
    mouseY < outerShapeYOrigin + outerShapeHeight //mouse is above the lower edge of the polaroid
  ) {
    // set polaroids is Running to true
    myPolaroid.setIsRunning(true);
    myPolaroid2.setIsRunning(true);
    myPolaroid3.setIsRunning(true);
    myPolaroid4.setIsRunning(true);
    myPolaroid5.setIsRunning(true);
    myPolaroid6.setIsRunning(true);
    myPolaroid7.setIsRunning(true);
    myPolaroid8.setIsRunning(true);

  } else {
    backgroundColor = color(
      random(255, 205),
      random(205, 255),
      random(205, 205)
    );
  }
}

function draw() {
  background(backgroundColor);
  flower();

  // display polaroid
  myPolaroid.display();
  myPolaroid2.display();
  myPolaroid3.display();
  myPolaroid4.display();
  myPolaroid5.display();
  myPolaroid6.display();
  myPolaroid7.display();
  myPolaroid8.display();

// Move Polaroid to the right
  if (myPolaroid.isRunning && myPolaroid2.isRunning && myPolaroid3.isRunning && myPolaroid4.isRunning && myPolaroid5.isRunning && myPolaroid6.isRunning && myPolaroid7.isRunning && myPolaroid8.isRunning) {
    myPolaroid.move(runDistance + myPolaroid.oldOuterShapeXOrigin);
    myPolaroid2.move(myPolaroid2.oldOuterShapeXOrigin + runDistance);
    myPolaroid3.move(myPolaroid3.oldOuterShapeXOrigin + runDistance);
    myPolaroid4.move(myPolaroid4.oldOuterShapeXOrigin + runDistance);
    myPolaroid5.move(myPolaroid5.oldOuterShapeXOrigin + runDistance);
    myPolaroid6.move(myPolaroid6.oldOuterShapeXOrigin + runDistance);
    myPolaroid7.move(myPolaroid7.oldOuterShapeXOrigin + runDistance);
    myPolaroid8.move(myPolaroid8.oldOuterShapeXOrigin + runDistance);
  }
}
