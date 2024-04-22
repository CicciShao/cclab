let sound1
let sound2

let x = 100
let y = 100
let w = 100
let h = 110

let r = 255
let g = 255
let b = 255

function preload() {
    sound1 = loadSound("assets/beat.mp3")
    sound2 = loadSound("filepath")
}
function setup() {
    let canvas = createCanvas(500, 400);
    canvas.parent("p5-canvas-container");

}

function draw() {
    background(220);
    let distance = dist(x, y, mouseX, mouseY)

    if (mouseX > x - w / 2 && mouseX < x + w / 2 && mouseY > y / 2 && mouseY < y + h / 2) {
        r = 255
        g = 255
        b = 0
        if (mouseIsPressed) {
            r = 255
            g = 0
            b = 0
            if (sound1.isPlaying() == false) {
                sound1.play()
            }
        }
    } else {
        r = 255
        g = 255
        b = 255
    }

    fill(r, g, b)
    rect(x, y, w, h)
    //
}

function mousePressed() {
    sound1.play()
}