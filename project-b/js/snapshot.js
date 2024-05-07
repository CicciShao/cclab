let cam;
let img;
let mode = 1; // 0: cam, 1: sticker, 2: deco

let stickerIndex = 0;
let stickers = [];
let stickerFiles = [
    "image/sticker2.png",
    "image/sticker1.png"
]

// the max width or height should be 300px



function preload() {
    for (let i = 0; i < stickerFiles.length; i++) {
        let stickerImg = loadImage(stickerFiles[i]);
        stickers.push(stickerImg);
    }
}

function setup() {
    let canvas = createCanvas(640, 480);
    canvas.parent("p5-canvas-container");
    background(255);

    cam = createCapture(VIDEO, { flipped: true }); // only support from 1.9.3
    cam.hide();
    img = createImage(640, 480); // blank image
}

function draw() {
    background(255)
    image(cam, 0, 0);

    cam.loadPixels();
    if (mode == 0) {
        // start
    } else if (mode == 1) {
        img.loadPixels();
        // now we can access the cam.pixels and img.pixels arrays!
        for (let y = 0; y < cam.height; y += 10) {
            for (let x = 0; x < cam.width; x += 10) {
                // access each pixel!
                let index = (x + y * cam.width) * 4;

                let r = cam.pixels[index + 0];
                let g = cam.pixels[index + 1];
                let b = cam.pixels[index + 2];
                let a = cam.pixels[index + 3];

                img.pixels[index + 0] = r * 1.0;
                img.pixels[index + 1] = g * 1.0;
                img.pixels[index + 2] = b * 1.0;
                img.pixels[index + 3] = 255;

                let meanValue = (r + g + b) / 3;
                if (meanValue >= 0) {
                    push()
                    translate(x, y);
                    rotate(random(2 * PI))
                    let triSize = map(meanValue, 0, 255, 0, 10)
                    scale(10 - triSize)
                    fill(r, g, b);
                    noStroke();
                    triangle(-1.73, -1, 0, 1.73, 1.73, -1)
                    // circle(x, y, 5 - map(meanValue, 0, 150, 0, 5))

                    // let mappedValue = map(meanValue, 0, 255, 0, 6);
                    // let mappedFloorValue = floor(mappedValue);
                    // textSize(5);
                    // text(mappedFloorValue, x, y);
                    pop()
                }
                // fill(255, g, b, a);
                // noStroke();
                // ellipse(x, y, 1);

            }
        }
        img.updatePixels();
    } else if (mode == 2) {
        // deco mode!
        push();
        translate(mouseX, mouseY);
        scale(0.15);
        imageMode(CENTER);
        image(stickers[stickerIndex], 0, 0);
        pop();
    }
}

function setStickerMode() {
    console.log("Sticker")
    mode = 1;
}

function applyDeco() {
    console.log("Deco")
    mode = 2;
}

function changeSticker(index) {
    stickerIndex = index;
}