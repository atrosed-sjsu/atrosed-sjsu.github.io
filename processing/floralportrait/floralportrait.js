function setup() {
createCanvas(700, 700);
noStroke();
angleMode(DEGREES)
}

function draw() {
background('#6CEBEF');
for (var y = 0; y <= height; y += 40) {
for (var x = 0; x <= width; x += 40) {
fill('#E8F7D0');
ellipse(x, y, 40, 40);

//Draw Stem
push()
  translate(350, 600);
  fill('#50C878');
  rectMode(CENTER);
  rect(0, 0, 45, 500);
pop()

// Leaf
push()
  translate(410, 665);
  fill('#50C878');
  rotate(55);
  ellipseMode(CENTER);
  ellipse(0, 0, 45, 100);
pop()

// Draw PetalCross
push()
fill(255, 20, 147);
//Left
ellipse(150, 350, 250, 125);
//Right
ellipse(550, 350, 250, 125);
//Top
ellipse(350, 150, 125, 250);
//Bottom
ellipse(350, 550, 125, 250);
pop()

// PetalsLeftBottomAngled
push()
  translate(190, 520)
  fill(255, 20, 147);
  rotate(140);
  ellipseMode(CENTER);
  ellipse(0, 0, 250, 125);
pop()

// PetalsLeftBottomDownOneAngled
push()
  translate(210, 440)
  fill(255, 20, 147);
  rotate(175);
  ellipseMode(CENTER);
  ellipse(0, 0, 250, 125);
pop()

// PetalsLeftBottomDownTwoAngled
push()
  translate(310, 490)
  fill(255, 20, 147);
  rotate(125);
  ellipseMode(CENTER);
  ellipse(0, 0, 250, 125);
pop()

// PetalsRightBottomAngled
push()
  translate(520, 520)
  fill(255, 20, 147);
  rotate(40);
  ellipseMode(CENTER);
  ellipse(0, 0, 250, 125);
pop()

// PetalsRightBottomDownOneAngled
push()
  translate(480, 440)
  fill(255, 20, 147);
  rotate(5);
  ellipseMode(CENTER);
  ellipse(0, 0, 250, 125);
pop()

// PetalsRightBottomDownTwoAngled
push()
  translate(410, 490)
  fill(255, 20, 147);
  rotate(65);
  ellipseMode(CENTER);
  ellipse(0, 0, 250, 125);
pop()

// PetalsRightTopAngled
push()
  translate(520, 190)
  fill(255, 20, 147);
  rotate(320);
  ellipseMode(CENTER);
  ellipse(0, 0, 250, 125);
pop()

// PetalsRightTopUpOneAngled
push()
  translate(390, 210)
  fill(255, 20, 147);
  rotate(305);
  ellipseMode(CENTER);
  ellipse(0, 0, 250, 125);
pop()

// PetalsRightTopUpTwoAngled
push()
  translate(490, 280)
  fill(255, 20, 147);
  rotate(345);
  ellipseMode(CENTER);
  ellipse(0, 0, 250, 125);
pop()

// PetalsLeftTopAngled
push()
  translate(190, 190)
  fill(255, 20, 147);
  rotate(220);
  ellipseMode(CENTER);
  ellipse(0, 0, 250, 125);
pop()

// PetalsLeftTopUpOneAngled
push()
  translate(320, 210)
  fill(255, 20, 147);
  rotate(235);
  ellipseMode(CENTER);
  ellipse(0, 0, 250, 125);
pop()

// PetalsLeftTopUpTwoAngled
push()
  translate(210, 300)
  fill(255, 20, 147);
  rotate(205);
  ellipseMode(CENTER);
  ellipse(0, 0, 250, 125);
pop()

//Draw Earrings
push();
noFill();
stroke(255, 255, 0);
strokeWeight(5);
ellipse(195, 450, 75, 100);
ellipse(505, 450, 75, 100);
pop()

// Draw Head
push()
fill(217, 145, 100)
ellipse(350, 350, 300, 325);
ellipse(195, 350, 50, 75);
ellipse(505, 350, 50, 75);
pop()

//Draw MakeUpNose
push()
translate(350, 350)
fill(255, 255, 255);
stroke(255);
strokeWeight(5)
strokeJoin(ROUND)
rotate(90);
rectMode(CENTER);
rect(0, 0, 105, 15);
pop()

//Draw MakeUpEyesWhiteLeft
push()
translate(250, 325);
fill(255, 255, 255);
ellipseMode(CENTER);
ellipse(0, 0, 100, 135)
pop()

//Draw MakeUpEyesBlueLeft
push()
translate(250, 300);
fill(0, 200, 255);
ellipseMode(CENTER);
ellipse(0, 0, 80, 65)
pop()

//Draw MakeUpEyelinerLeft
push()
translate(250, 350);
fill(0, 0, 0);
rotate(175);
ellipseMode(CENTER);
ellipse(0, 0, 80, 65)
pop()

//Draw MakeUpEyesWhiteRight
push()
translate(450, 325);
fill(255, 255, 255);
ellipseMode(CENTER);
ellipse(0, 0, 100, 135)
pop()

//Draw MakeUpEyesBlueRight
push()
translate(450, 300);
fill(0, 200, 255);
ellipseMode(CENTER);
ellipse(0, 0, 80, 65)
pop()

//Draw MakeUpEyelinerRight
push()
translate(450, 350);
fill(0, 0, 0);
rotate(15);
ellipseMode(CENTER);
ellipse(0, 0, 80, 65)
pop()

 // Draw left eye

  let leftX = 250;
  let leftY = 325;

  // Calculate angle between left eye and mouse
  let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

  push();
  translate(leftX, leftY);
  fill(255);
  stroke(255, 20, 147);
  ellipse(0, 0, 100, 90);
  rotate(leftAngle);
  fill(0);
  ellipse(12.5, 0, 75, 75);
  pop();

// Draw right eye

  let rightX = 450;
  let rightY = 325;

  // Calculate angle between right eye and angle
  let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

  push();
  translate(rightX, rightY);
  fill(255);
  stroke(255, 20, 147);
  ellipse(0, 0, 100, 90);
  rotate(rightAngle);
  fill(0);
  ellipse(12.5, 0, 75, 75);
  pop();
  
  //Draw Lipstick
  push()
  translate(345, 450);
  fill(255, 255, 255, 230);
  rotate(180);
  ellipseMode(CENTER);
  ellipse(0, 0, 75, 60);
  pop();
  
  //Draw Lip one
  push();
  translate(230,380);
  noFill(0);
  rotate(0);
  stroke('#661C32');
  arc(90, 60, 50, 50, 0, 180);
  pop();
  
  //Draw Lip one
  push();
  translate(280,380);
  noFill(0);
  rotate(0);
  stroke('#661C32');
  arc(90, 60, 50, 50, 0, 180);
  pop();

    }
  }
}
