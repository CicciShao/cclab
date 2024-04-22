let balls=[];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  balls = new Ball(100, 200, 50);

}

function draw() {
  background(220);

  ballA.move();
  ballA.display();
}

class Ball {
  constructor(startX, startY, startDia) {
    this.x = startX;
    this.y = startY;
    this.xSpd = random(-3, 3);
    this.ySpd = random(-3, 3);
    this.dia = startDia;
  }
  move() {
    this.x += this.xSpd;
    this.y += this.ySpd;
  }
  display() {
    push();
    circle(this.x, this.y, this.dia);
    pop();
  }