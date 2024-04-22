let names = [
  "Cicci"

];

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);
  names,push()
  
}

function draw() {
  let firstIndes = 0
  let lastIndex = names.length - 1
  text(names[lastIndex], 100, 100)

  for (let i = 0; i < 5, i++){
let x=120
let y=100+1
text(names[i],x,y);
  }
}