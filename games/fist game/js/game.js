size(600, 600);
noStroke();
var buttonWidth = 50;
var position = 0;
var speed = 10;
var y = 0;
background(0, 0, 0);
fill(255, 0, 0);
rect(0, 550, 600, buttonWidth);   //button
fill(0, 0, 0);
textSize(20);
var textX = 75;
text('stroke', textX, 582);
text('noStroke', 488, 582);


draw = function () {

    textSize(20);
    var R = random(0, 255);
    var G = random(0, 255);
    var B = random(0, 255);
    fill(255, 0, 0);
    rect(0, 550, 600, buttonWidth);   //button
    fill(0, 0, 0);
    textSize(20);
    text("noStroke", 450, 582);
    text('stroke', 150, 582);
    //fill(speed,position , y);
    fill(R, B, G);// RANDOM COLOR
    ellipse(position, y, 50, 50);



    position = position + speed;
    if (position > 575) {
        speed = -10; y = y + 5;
    } else if (position < 25) {
        speed = 10; //y = y + 5;
    } else if (y > 545) {
        speed = 0;
        position = 354;
        y = 0;
    } else if (y > 525) {
        speed = 0;
        position = 354;
        y = 0;
    } else if (mouseX < 300 && mouseY > 550) {
        stroke(0, 0, 0);
    } else if (mouseX > 300 && mouseY > 450) {
        noStroke();
    }

};