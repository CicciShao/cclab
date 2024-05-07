let flames = [];
let mySound1;


function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("canvasContainer");
  background(220);
}

function preload() {
  mySound1 = loadSound("sound/startpageBGM.wav")
}


function draw() {
  background(0);



  textSize(10);
  fill(255);
  stroke(0);
  strokeWeight(4);
  // generate 2 stars every frame
  flames.push(new Flame(mouseX, mouseY, random(10, 20)));
  flames.push(new Flame(mouseX, mouseY, random(1, 10)));

  // update and display
  for (let i = 0; i < flames.length; i++) {
    let b = flames[i];
    b.move();
    b.display();

    if (mouseIsPressed) {
      b.speedUp();
      b.changeToRandom();
      // mySound1.play()
      // mySound1.setVolume(0.5)
    } else {
      text("press me!", mouseX - 25, mouseY + 30)
    }
  }

  // limit
  let maxNumber = 25;
  if (mouseIsPressed) {
    maxNumber = 150;
  }
  while (flames.length > maxNumber) {
    // remove the first (oldest) element
    flames.splice(0, 1);
  }
}

class Flame {
  constructor(initX, initY, initDia) {
    this.x = initX;
    this.y = initY;
    this.xSpd = random(-1, 1);
    this.ySpd = random(-5, 0.1);
    this.dia = initDia;
    //
    this.r = 232;
    this.g = 46;
    this.b = 13;
    this.r2 = random(255);
    this.g2 = random(255);
    this.b2 = random(255);
    //
    this.rotSpd = random(1, 2);

    this.pressed = false;
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }

  speedUp() {
    // +50%
    this.xSpd *= 1.5;
    this.ySpd *= 1.5;
  }

  changeToRandom() {
    this.xSpd = random(-1, 1) * 15;
    this.ySpd = random(-1, 1) * 15;
    this.r = this.r2;
    this.g = this.g2;
    this.b = this.b2;
  }

  display() {
    push();

    blendMode(ADD);
    translate(this.x, this.y);
    rotate(frameCount * this.rotSpd);

    fill(this.r, this.g, this.b);

    ellipse(0, 0, this.dia, this.dia * 0.25);
    ellipse(0, 0, this.dia * 0.25, this.dia);

    pop();
  }
}
