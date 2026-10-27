function setup() {
createCanvas(600, 600);
strokeWeight(5);
angleMode(DEGREES)
}

function draw() {
background('#EEFF00');

  // Draw first whip

  let lineX = 300;
  let lineY = 300;

  // Calculate angle with lines and mouse
  for (var i = 20; i < 400; i += 8) {
  let angle = atan2(mouseY - lineY, mouseX - lineX);
  
  translate(lineY, lineX)
  rotate(angle);
  stroke('#6C5FFF');
  line(i, 40, i + 60, 80);
  }
}
