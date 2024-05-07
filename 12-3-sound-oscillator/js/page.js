let noteIndex = 0;
const notes = [
  261.63,  // C4
  293.66,  // D4
  329.63,  // E4
  349.23,  // F4 
  392.00,  // G4
  440.00,  // A4
  493.88,  // B4
  523.25,  // C5
  587.33,  // D5
  659.25,  // E5
  698.46,  // F5
  783.99,  // G5
  880.00,  // A5
  987.77,  // B5
  1046.50, // C6
  1174.66, // D6
  1318.51, // E6
  1396.91, // F6
  1567.98, // G6
  1760.00, // A6
  1975.53, // B6
  2093.00  // C7
];

let osc;
let oscIsPlaying = false;

function setup() {
  let canvas = createCanvas(500, 400);
  canvas.parent("p5-canvas-container");
  background(220);

  osc = new p5.Oscillator('sine');
}

function draw() {
  let sinValue = sin(frameCount * 0.25); // -1 to 1
  let ampValue = map(sinValue, -1, 1, 0.5, 1.0, true);
  osc.amp(ampValue, 0.2);
}

function mousePressed() {
  if (oscIsPlaying == false) {
    osc.start();
    oscIsPlaying = true;
  } else {
    osc.stop();
    oscIsPlaying = false;
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    // lower note
    noteIndex--;
    if (noteIndex < 0) {
      noteIndex = 0;
    }
  }
  else if (keyCode == RIGHT_ARROW) {
    // higher note
    noteIndex++;
    if (noteIndex >= notes.length) {
      noteIndex = notes.length - 1; // last index
    }
  }
  let freqValue = notes[noteIndex];
  osc.freq(freqValue, 0.05);
}