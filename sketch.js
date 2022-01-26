'use strict';

let state = "title";
let cnv;
let points = 0;
let w;
let h;
let player;
let lives = 5;
let sugarcanes = [];
let monsters = [];
let presents = [];
let playerImg;
let liveObj;
let liveImg;
let sugarCaneImg;
let monsterImg;
let presentImg;
let bg;
let homebg;
let endbg;
let collect;
let uhh;
let difficulty;
let bgm;

function preload() {
  playerImg = loadImage('assets/santa.png');
  sugarCaneImg = loadImage('assets/candycane.png');
  monsterImg = loadImage('assets/monster.png');
  presentImg = loadImage('assets/present.png');
  liveImg = loadImage('assets/santa1.png');
  bg = loadImage('assets/background.png');
homebg = loadImage('assets/homebg.png');
endbg = loadImage('assets/endbg.png');
 // sound
 soundFormats("mp3");
 collect=loadSound("assets/collect.mp3");
 uhh = loadSound('assets/Uhh.mp3');
 bgm=loadSound("assets/bgm.mp3");

}

function setup() {
  w = 1366
  h = 784
  cnv = createCanvas(w, h);
  textFont('Comic Sans MS');
  player = new Player();
  sugarcanes[0] = new sugarCane();
  monsters[0] = new Monster();
  presents[0] = new Present();
  angleMode(DEGREES); // Change the mode to DEGREES
  imageMode(CENTER);
  rectMode(CENTER);

}

function draw() {
  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'game':
      game();
      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    case 'gameover':
      gameOver();
      cnv.mouseClicked(gameOverMouseClicked);
      break;
    default:
      break;
  }
}
function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  } else if (key = ' ') {
    player.direction = 'still'
  }
}
function keyReleased() {
  let numberKeysPressed = 0;

  if (keyIsDown(LEFT_ARROW)) {
    numberKeysPressed++;

  }
  if (keyIsDown(RIGHT_ARROW)) {
    numberKeysPressed++;
  }
  if (numberKeysPressed == 0) {
    player.direction = ' still';

  }
}
function title() {
  background(homebg);
  imageMode(CORNER);
  textSize(90);
  textAlign(CENTER);
  fill(69, 98, 196);
  text("HAPPY HOLIDAY", w / 2.5, h / 1.5);
  textSize(30);
  text("click anywhere to start", w / 2.5, h / 1.25);

}

function titleMouseClicked() {
  state = "game";
  points = 0;
  // reset all objects
  sugarcanes = []
  monsters = []
  presents = []
  lives = 5;
  liveObj = new Lives(lives);
  difficulty = 0.005;
}

function computeDifficulty() {
  if (points > 0 && points % 10 == 0) {
    difficulty = (points / 10000) + 0.01;
  }
  console.log(difficulty)
}


function game() {
  if (!bgm.isPlaying()) {
    bgm.play();
  }
  background(bg);
  imageMode(CORNER);
  computeDifficulty()
  if (random(1) <= difficulty) {
    sugarcanes.push(new sugarCane(random(20, 100)));
  }
  if (random(1) <= difficulty) {
    monsters.push(new Monster(random(40, 70)));
  }
  if (random(1) <= difficulty) {
    presents.push(new Present(random(20, 70)));
  }
  player.display();
  player.move();

  for (let i = 0; i < sugarcanes.length; i++) {
    sugarcanes[i].display();
    sugarcanes[i].move();
  }
  for (let i = 0; i < monsters.length; i++) {
    monsters[i].display();
    monsters[i].move();
  }
  for (let i = 0; i < presents.length; i++) {
    presents[i].display();
    presents[i].move();
  }
  // check collision with sugar canes
  for (let i = sugarcanes.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, sugarcanes[i].x, sugarcanes[i].y) <= (player.r + sugarcanes[i].r) / 2) {
      points++;
      collect.play();
      console.log("points =" + points);
      sugarcanes.splice(i, 1);
    } else if (sugarcanes[i].y > h) {
      sugarcanes.splice(i, 1);
      console.log("bye");
    }
  }

  // check collision with presents
  for (let i = presents.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, presents[i].x, presents[i].y) <= (player.r + presents[i].r) / 2) {
      points++;
      collect.play();
      collect.setVolume(2);
      console.log("points =" + points);
      presents.splice(i, 1);
    } else if (presents[i].y > h) {
      presents.splice(i, 1);
      console.log("bye");
    }
  }
  // check collision with monsters
  for (let i = monsters.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, monsters[i].x, monsters[i].y) <= (player.r + monsters[i].r) / 2) {
      lives--;
      uhh.play();

      liveObj.loseLife()
      console.log("lives =" + lives);
      monsters.splice(i, 1);
    } else if (monsters[i].y > h) {
      monsters.splice(i, 1);
      console.log("bye");
    }
  }
fill(17, 57, 191);
  text('Points:' + points, w /13, h/6.6);
  liveObj.display();

  if (lives <= 0) {
    state = 'gameover';
  }
}

function gameOver() {

  background(endbg);
  textSize(80);
  //  game over
  fill(255);
  text('You score:', w / 2, h/6 );
  text(points  + ' points', w / 2, h/4+20);

  textSize(30);
  text("Click anywhere to restart", w / 2, h / 3 +20);
  bgm.stop();

}

function gameOverMouseClicked() {

  state = 'title';
  points = 0;
}
