// Catch the Ball
let StartTime = 25;
let Timer;
let GameOver = false;
let YouWin = false;


var ballx = 300;
var bally = 300;
var xspeed = 1
var yspeed = 1
var ballSize = 150;
var score = 0;
var gameState = 'L1';

function preload() {

  img1 = loadImage('https://atrosed-sjsu.github.io/portfolio/image/clothes.png'); //target
  img2 = loadImage('https://atrosed-sjsu.github.io/portfolio/image/parts.png');
  img3 = loadImage('https://atrosed-sjsu.github.io/portfolio/image/insides.png');
  img4 = loadImage('https://atrosed-sjsu.github.io/portfolio/image/bell.png');
  img5 = loadImage('https://atrosed-sjsu.github.io/portfolio/image/thesoul.png');
}

function setup() {
  createCanvas(600, 600);
  Timer = StartTime;
  textAlign(CENTER);
  textSize(20);
} //end of setup


function draw() {
  background(220);
  
  if (gameState == 'L1'){
  levelOne();
}

if(gameState == 'L2'){
  levelTwo();
}

if(gameState == 'L3'){
  levelThree();
}

if(gameState == 'L4'){
  levelFour();
}

if (gameState == 'lose'){
  loseScreen();
}

if (gameState == 'win'){
  winScreen();
}
  
  text('Score:' + score,width/2,40);
  
}// end of draw

function levelOne(){
  let time = Timer - int(millis() / 1000);

  if (time <= 0) {
    //Reset time when time is less than 0
    // Timer = StartTime + int(millis() / 1000);
    gameState = 'lose';
    GameOver = true;
  } // lose because no time
  
  background(225, 152, 193)
  text('Collect My Clothes!',width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
      ballx = random(width);
      bally = random(height);
      score = score + 1;
  }
  
  textSize(30);
  text(time, 100, 100);
  
  if(score>= 5){
    gameState = 'L2';
  }

  imageMode(CENTER)
  image(img1, ballx, bally, ballSize, ballSize);
  
  push()
  stroke(255, 0, 0)
  line(ballx,bally,mouseX,mouseY)
  pop()
  
} // end level one


function levelTwo(){
  let time = Timer - int(millis() / 1000);

  if (time <= 0) {
    //Reset time when time is less than 0
    // Timer = StartTime + int(millis() / 1000);
    gameState = 'lose';
    GameOver = true;
  } // lose because no time
  
  background (223, 54, 124);
  text('Grab My Parts!',width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
      ballx = random(width);
      bally = random(height);
      score = score + 1;
  }
  
  textSize(30);
  text(time, 100, 100);
  
  if(score>= 10){
    gameState = 'L3'
  }
  
  //line(ballx,bally,mouseX,mouseY)
  imageMode(CENTER)
  image(img2, ballx, bally, ballSize, ballSize);
  ballx += xspeed
  bally += yspeed

  if (ballx > (width - ballSize/2) || ballx < ballSize/2){
    console.log(ballx)
    xspeed = xspeed * -1
  }

  if (bally > (height - ballSize/2) || bally < ballSize/2){
    console.log(bally)
    yspeed = yspeed * -1
  }
  
} // end level two

function levelThree(){
  let time = Timer - int(millis() / 1000);

  if (time <= 0) {
    //Reset time when time is less than 0
    // Timer = StartTime + int(millis() / 1000);
    gameState = 'lose';
    GameOver = true;
  } // lose because no time
  
  background (136, 57, 85);
  text('Make Me Real!',width/2, height-20);
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
      ballx = random(width);
      bally = random(height);
      score = score + 1;
      ballSize = ballSize - 8
  }
  
  push()
    fill(255, 0, 0, 100)
    text('DONT LET THEM RUN.',width/2, height-10);
  pop()
  
  textSize(30);
  text(time, 100, 100);
  
  if(score>= 19){
    gameState = 'L4';
  }
  
  //line(ballx,bally,mouseX,mouseY)
  imageMode(CENTER)
  image(img3, ballx, bally, ballSize, ballSize);
  ballx += xspeed
  bally += yspeed
  xspeed = xspeed +0.5
  yspeed = yspeed +0.5

  if (ballx > (width - ballSize/2) || ballx < ballSize/2){
    console.log(ballx)
    xspeed = xspeed * -1
  }

  if (bally > (height - ballSize/2) || bally < ballSize/2){
    console.log(bally)
    yspeed = yspeed * -1
  }
  
} // end level three


function levelFour(){
  let time = Timer - int(millis() / 1000);

  if (time <= 0) {
    //Reset time when time is less than 0
    // Timer = StartTime + int(millis() / 1000);
    gameState = 'lose';
    GameOver = true;
  } // lose because no time
  
  background(76, 53, 73)
  var distToBall = dist(ballx,bally,mouseX,mouseY);
  if(distToBall < ballSize/2){
      score = score + 1;
  }
  textSize(30);
  text(time, 100, 100);
  
  if(score>= 20){
    gameState = 'win';
  }

  imageMode (CENTER)
  image(img5, ballx, bally, 350, 350);
  
  push()
  fill(255, 62, 65)
  text('Bring Me To Life.',width/2, height-20);
  pop()
  
} // end level four


function loseScreen() {
    background (0)
    
  push()
    fill(255, 62, 65)
    textAlign(CENTER, CENTER);
    textSize(50);
    text("UH OH!!!", 300, 200);
    text("YOU GOT CAUGHT!", width / 2, height / 2);
  pop()
  
  push()
    fill(255, 62, 65, 150)
    textAlign(CENTER, CENTER);
    textSize(20)
    text("Try Again?", 300, 400);
    text("Press 'r' to restart the previous level", 300, 425);
  pop()

}

function winScreen() {
    background(random(255), 0, 0);
    image(img4, 300, 325, 600, 600);
    textAlign(CENTER, CENTER);
    textSize(50);
    text("You did it! Now I am whole.", width / 2, height / 2);
  push()
    textAlign(CENTER, CENTER);
    textSize(20);
    fill(255, 0, 0);
    text("But at what cost?", 300, 400);
  pop()
  }

function keyPressed() {
  if (GameOver == true) {
    //Reset when game over
    Timer = StartTime + int(millis() / 1000);
    GameOver = false;
  }

  if (key == 'r') {
    //Reset game when you press r
    Timer = StartTime + int(millis() / 1000);
    gameState = 'L1';
  }

}
