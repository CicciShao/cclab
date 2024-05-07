let cam;
let img;
let mode = 0; // 0:cam 1: take a photo
let date = new Date();
let now = new Date();
let input

let stickerIndex = 0;
let stickers = [];
let stickerFiles = [
    "image/sticker1.png",
    "image/sticker2.png",
    "image/sticker3.png",
    "image/sticker4.png",
    "image/sticker5.png",
    "image/sticker6.png"

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

    input = createInput();
    input.position(20, 20); // 设置输入框位置
    input.changed(updateText);

    cam = createCapture(VIDEO, { flipped: true }); // only support from 1.9.3
    cam.hide();
    img = createImage(640, 480); // blank image

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    currentDate = `${day}-${month}-${year}`;

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // // 补零
    // hours = (hours < 10 ? "0" : "") + hours;
    // minutes = (minutes < 10 ? "0" : "") + minutes;
    // seconds = (seconds < 10 ? "0" : "") + seconds;

    // 组合时间字符串
    timeString = hours + ":" + minutes + ":" + seconds;

}

function draw() {
    // background(255)


    cam.loadPixels();

    if (mode == 0) {
        // start
        image(cam, 0, 0);
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
        // } else if (mode == 2) {
        //     // deco mode!
        //     push();
        //     translate(mouseX, mouseY);
        //     scale(0.15);
        //     imageMode(CENTER);
        //     image(stickers[stickerIndex], 0, 0);
        //     pop();
        // }
    } else if (mode == 2) {
        push();
        if (mouseIsPressed == true) {


            translate(mouseX, mouseY);
            scale(0.15);
            imageMode(CENTER);
            image(stickers[stickerIndex], 0, 0);
            pop();
        }
    }

    textFont("Jersey 10");
    fill(236, 180, 32);
    stroke(167, 105, 14)
    strokeWeight(3)
    textSize(30);
    text(currentDate, 440, 470);//display date
    text(timeString, 550, 470);


}


function setReadyMode() {
    console.log("Ready")
    mode = 0;
}

function setPhotoMode() {
    console.log("Take a photo")
    mode = 1;
}

function setStickerMode() {
    console.log("Sticker")
    mode = 2;
}

// function applyDeco() {
//     console.log("Deco")
//     mode = 2;
// }

function changeSticker(index) {
    stickerIndex = index;
}

function exportPic() {
    saveCanvas("export", "jpg");
}

