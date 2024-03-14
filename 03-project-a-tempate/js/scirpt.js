
//let canvas = createCanvas(800, 500);
//canvas.parent("p5-canvas-container")

let dia1, dia2, dia1a, dia1b, dia, dia3;
let angle1, angle2, speed1;
let starangle;
let r1, g1, b1;
let control = true;
let ra1, ra2, ra3, ra4;

function setup() {
    createCanvas(800, 500);
    dia1 = random(80, 100);
    dia2 = random(80, 100);
    dia1a = random(20, 30);
    dia1b = random(10, 15);
    angle1 = 0;
    angle2 = 0;
    speed1 = random(0.03, 0.05);
    dia3 = dia1 + 230;

    stroke(0, 255, 220);
}

function draw() {
    background(40, 55, 71, 30);
    //text("set me free and wake up", 20, 30);
    console.log(frameCount);

    push();
    let cosValue = cos(frameCount * 0.03);
    let r1 = map(mouseY, 50, 450, 0, 255);
    let g1 = map(mouseY, 50, 450, 0, 255);
    let b1 = (frameCount % 255) + 30;
    fill(r1, g1, b1);
    noStroke();

    circle(0, 500, ra1);
    if (mouseIsPressed == true) {
        ra1 = cosValue * random(150, 200);
    } else if (mouseX < 750 && mouseX > 550 && mouseY < 450 && mouseY > 50) { ra1 = cosValue * 200 }
    else {
        ra1 = cosValue * 80;
    }
    let distance1 = dist(mouseX, mouseY, 0, 500);
    if (distance1 < 50) {
        // in
        ra1 = 150;
    } else {
        // out
    }

    circle(450, 150, ra2);
    if (mouseIsPressed == true) {
        ra2 = cosValue * random(120, 160);
    } else if (mouseX < 750 && mouseX > 550 && mouseY < 450 && mouseY > 50) { ra2 = cosValue * 150 }
    else {
        ra2 = cosValue * 80;
    }
    let distance2 = dist(mouseX, mouseY, 450, 150);
    if (distance2 < 50) {
        // in
        ra2 = 150;
    } else {
        // out
    }

    circle(100, 100, ra3);
    if (mouseIsPressed == true) {
        ra3 = cosValue * random(100, 200);
    }
    else if (mouseX < 750 && mouseX > 550 && mouseY < 450 && mouseY > 50) { ra3 = cosValue * 150 } else {
        ra3 = cosValue * 50;
    }
    let distance3 = dist(mouseX, mouseY, 100, 100);
    if (distance3 < 30) {
        // in
        ra3 = 150;
    } else {
        // out
    }

    circle(400, 350, ra4);

    if (mouseIsPressed == true) {
        ra4 = cosValue * random(180, 220);
    }
    else if (mouseX < 750 && mouseX > 550 && mouseY < 450 && mouseY > 50) { ra4 = cosValue * 200 } else {
        ra4 = cosValue * 150;
    }
    let distance4 = dist(mouseX, mouseY, 400, 350);
    if (distance4 < 50) {
        // in
        ra4 = 250;
    } else {
        // out
    }

    pop();

    for (let y = 50; y <= 450; y += 50) {
        for (let x = 550; x <= 750; x += 50) {
            let sinValue = sin(frameCount * 0.03 + x * 0.01);
            let angle = map(sinValue, -1, 1, PI * 1.2, PI * 1.8);
            let freq = frameCount * 0.05;
            let amp = 50;
            let cosValue = cos(freq) * amp;

            push();
            translate(x, y);
            rotate(angle);

            let r = map(y, 50, 450, 0, 255);
            let g = map(y, 50, 450, 0, 255);
            let b = (frameCount % 255) + 30; //color

            let len = map(y, 50, 450, 30, 70); //shape

            translate(cosValue, 3);
            noStroke();
            fill(r, g, b);
            circle(20, 0, cosValue);
            //circle(0, 0, 5);
            pop();
        }
    }

    for (let angle = 0; angle < 360; angle += 60) {
        push();

        translate(200, height / 2);
        rotate(radians(angle));

        push();
        if (mouseIsPressed) {
            blendMode(ADD);
        }
        scale(0.5);
        translate(150, 0);
        if (distance1 < 50 || distance2 < 50 || distance3 < 30 || distance4 < 50) {
            rotate(frameCount * 0.1)
        } else {
            rotate(frameCount * 0.01);
        }

        ellipse(0, 0, 100, 50);
        ellipse(100, 0, 30, 20);
        ellipse(150, 0, 10, 10);

        fill(244, 208, 63, 100);
        ellipse(110, 0, 50, 10);
        fill(109, 255, 237, 50);
        ellipse(130, 100, 20, 100);
        fill(109, 255, 237)
        ellipse(180, 0, 100, 10);
        rect(200, 10, 50, 50);

        pop();

        pop();
    } // the spinning shape

    push();
    translate(mouseX, mouseY);
    rotate(frameCount * 0.05);
    if (mouseX > 0 && mouseX < 100 && mouseY > 700 && mouseY < 800) {
    }

    let r = random(frameCount * 0.3);
    let g = random(frameCount * 0.3);

    fill(r, g, 255);
    noStroke();
    ellipse(1, 2, 15, 45);
    ellipse(1, 2, 45, 15);
    pop(); //main character

    if (control == true) {
        noFill();
        let sinValue = sin(frameCount * 0.01) * 300;
        dia3 = sinValue;
        circle(200, height / 2, dia3);
        circle(200, height / 2, dia1 + 90 + random(-5, 5));
        circle(200, height / 2, dia1 + random(-5, 5));
    }

    // noFill()
    // circle(500, height/2, dia2+120)
    // circle(500, height/2, dia2+30)
    // circle(500, height/2, dia2)//circle2

    translate(200, height / 2);

    // if (mouseIsPressed) {
    //   blendMode(ADD);
    // }
    if (
        mouseX < 200 + dia1a &&
        mouseX > 200 - dia1a &&
        mouseY < 250 + dia1a &&
        mouseY > 250 - dia1a
    ) {
        let r1 = random(0, 255);
        let g1 = random(0, 255);

        fill(r1, g1, 255);
        angle1 = angle1 + speed1;
        rotate(angle1);
        translate(dia1 / 2, 0);
        circle(0, 0, dia1a); //circle1a
        noStroke();
        translate(dia1 / 2 - 1, 0);
        angle2 -= speed1;
        rotate(angle2);
        circle(0, 0, dia1b);
    } else if (mouseX < 750 && mouseX > 550 && mouseY < 450 && mouseY > 50) {
        let r = map(mouseY, 50, 450, 0, 255);
        let g = map(mouseY, 50, 450, 0, 255);
        let b = (frameCount % 255) + 30; //color

        fill(r, g, b);
        angle1 = angle1 + speed1;
        rotate(angle1);
        translate(dia1 / 2, 0);
        circle(0, 0, dia1a); //circle1a

        translate(dia1 / 2 - 1, 0);
        angle2 -= speed1;
        rotate(angle2);
        circle(0, 0, dia1b);
    } else {
        fill(255);
        angle1 = angle1 + speed1;
        if (mouseIsPressed) {
            speed1 -= 0.01;
        } else {
            speed1 = random(0.03, 0.05);
        }
        rotate(angle1);
        translate(dia1 / 2, 0);
        circle(0, 0, dia1a); //circle1a

        translate(dia1 / 2 - 1, 0);
        angle2 -= speed1;
        rotate(angle2);
        circle(0, 0, dia1b);

        //     push()
        //     dia=random(10,40)
        //     fill(255)
        //     stroke(255)
        //     if(frameCount%10==0){
        //       circle(random(width),random(height),dia)
        //     }

        //     pop()
    }

    //   angle1 = angle1 + speed1;
    //   rotate(angle1);
    //   translate(dia1 / 2, 0);
    //   circle(0, 0, dia1a); //circle1a

    //   translate(dia1 / 2 - 1, 0);
    //   angle2 -= speed1;
    //   rotate(angle2);
    //   circle(0, 0, dia1b); //circle1b

    // translate(-dia1/2,0)
    // circle(0,0,dia1b)//circle1c
}

