//note: use ctrl/Cmd + t to auto format your code (indentations)

var img;
//var img2;
//var img3;
var initials ='ar'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

let button; //https://p5js.org/reference/p5/createButton/

function preload() {
  // preload() runs once, it may make you wait
  //  img = loadImage('cat.png');  // cat.jpg needs to be next to this .js file
  // you can link to an image on your github account
  img = loadImage('https://arao-sjsu.github.io/images/cat.jpg');
  //  img2 = loadImage('https://arao-sjsu.github.io/images/round.png');
  //  img3 = loadImage('https://veryprofessional3d.github.io/images/rainbow.gif');
}

function setup() {
  createCanvas(600, 600);  // canvas size
  background(255);   // use our background screen color

  button = createButton('clear canvas');
  button.position(500, 645);
  //call clear_print() when the button is pressed
  button.mousePressed(clear_print);

  button = createButton('save img');
  button.position(500, 620);
  //call saveme() when the button is pressed
  button.mousePressed(saveme);
  
  button = createButton('help text');
  button.position(500, 670);
  //call helptext() when the button is pressed
  button.mousePressed(helpText);
  
  //want to style your buttons?? https://editor.p5js.org/msboyles/sketches/Vdfl8pLCB_
  //use css - https://editor.p5js.org/kjhollen/sketches/58WL8zYu1
  
  helpText();
  
 
}

function draw() {

  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
  }
  if (mouseIsPressed) {
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic functionx

  if (toolChoice == '1' ) {  // thin rounded brush

    strokeWeight(1);
    stroke(0);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '2') { // dark ultramarine gpen two
    var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
    var easing = 0.05;
    strokeWeight(weight);
    stroke(41, 0, 135);
    line(mouseX, mouseY, pmouseX, pmouseY) * easing;
  } else if (toolChoice == '3') { // royale vessel sketch brush
    var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(weight);
    stroke(61, 45, 225, 85);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') { //rainbow brush
  // find the hue, which is a number from 0 to 360
    var hue = (frameCount * 10) % 360
  // set the color and brush style
    var hsbaColor = color(`hsba(${hue}, 100%, 100%, 0.6)`)

    var weight = dist(mouseX, mouseY, pmouseX, pmouseY)
    strokeWeight(weight)
    stroke(hsbaColor)
    line(mouseX, mouseY, pmouseX, pmouseY)
  } else if (key == '5') { // pink fountain pen
    stroke('#E808C4') //color and brush style of the pen
    strokeWeight(1)
    const width = 1.56
    const lerps = 16 // the number of times we lerp the line for loops
      
    for (let i = 0; i <= lerps - 1; i++) { // repeat the slanted line with lerping
    const x = lerp(mouseX, pmouseX, i / lerps)// find the lerped x and y coordinates between the mouse points
    const y = lerp(mouseY, pmouseY, i / lerps)
    
     line(x - width, y - width, x + width, y + width)// draw a slanted line
    }
  } else if (toolChoice == '6') { // highlighter slashes
    translate(mouseX, mouseY) // move the origin (0,0) to the current mouse point
    const angle = Math.atan2(mouseY - pmouseY, mouseX - pmouseX)// find the angle of the direction the mouse is moving and then rotate the canvas by that angle
    rotate(angle) 
    fill(230, 255, 10, 100) // edit stroke color
    noStroke()
  const minSize = 2 // set minumum width and height of the toothpick-shaped ellipse
  
  const distance = dist(mouseX, mouseY, pmouseX, pmouseY) // find the distance between current mouse point and previous mouse point
  
  ellipse(0, 0, distance * 15 + minSize, minSize)// draw the line
  } else if (toolChoice == '7') { // rainbow bubbles
    var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
    stroke(random(255), random(255), random(255), random(255)); //random RGBA colors
    strokeWeight(1.5);
    fill(random(255), random(255), random(255), random(255)); //random RGBA colors
    
      circle(mouseX, mouseY, pmouseX/ 20, pmouseY/ 20);
  } else if (toolChoice == '8') { // pink diamonds
    translate(mouseX, mouseY) // move the origin (0,0) to the current mouse point
    noStroke();
    fill(random(255), random(20), random(147), 80);
    rotate(70);
    rect(0, 0, 20, 20);
  } else if (toolChoice == '9') { // rainbow stars
    translate(mouseX, mouseY)
    noStroke();
    strokeWeight(1);
    fill(random(255), random(255), random(255), 255);
    star(0, 0, 20, 10, 10);
  } else if (toolChoice == '0') { // blue crystals

    noStroke();
    fill(random(190), random(255), 234, 90); //random blue colors
    //trangles!
    translate(mouseX, mouseY) // move the origin (0,0) to the current mouse point
    const angle = Math.atan2(mouseY - pmouseY, mouseX - pmouseX)// find the angle of the direction the mouse is moving and then rotate the canvas by that angle
    rotate(angle) 

    const distance = dist(mouseX, mouseY, pmouseX, pmouseY)
    triangle(30, 80, 50, 20, 60, 100)
    } else if (toolChoice == 'z' || toolChoice == 'Z') { // eraser
    
    erase();
    var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(weight)
    stroke(0);
    line(mouseX, mouseY, pmouseX, pmouseY);
    noErase();
      
  // } else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded

    // image(img, mouseX, mouseY, mouseX/10, mouseX/16); //what does this do?
    //  } else if (toolChoice == 'h' || toolChoice == 'H') { // g places the image we pre-loaded
    //    image(img2, mouseX-25, mouseY-25, 50, 50,20);
    //  } else if (toolChoice == 'i' || toolChoice == 'I') { // g places the image we pre-loaded
    //    image(img3, mouseX-25, mouseY-25, 50, 50,20);
  } //else if (toolChoice == 'x' || key == 'X') {

  //clearflag = 1;

  //} 
  else if (key == 'p' || key == 'P') {

    saveme();  // call saveme which saves an image of the screen
  }

function star(x, y, radius1, radius2, npoints) { // this draws the star shape for key 9
  let angle = 360 / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < 360; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

  function testbox(r, g, b) {
    // this function is called in brush #5
    x = mouseX;
    y = mouseY;
    fill(r, g, b);
    rect(x-50, y-50, 100, 100);
  }
}

function clear_print() {
  // clears the screen by resetting the background
  background(255); // set the screen back to the background color
}

function saveme() {
  //this will save the name as the intials, date, time and a millis counting number.
  // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
}

function keyPressed() { //https://p5js.org/reference/p5/keyPressed/
  if (key === 'x' || key === 'X') {
    clear_print();
  } else if (key === 'p' || key === 'P') {
    saveme();
  }
}

function helpText(){
  fill("black");
  strokeWeight(0.2);
  textSize(15);
  text('press numerical keys from 1 - 0 for different strokes', 60, 30);
  text('use buttons to save or clear canvas, or press x or p', 60, 45);
  text('try g for secret bonus', 60, 60);
  
}
