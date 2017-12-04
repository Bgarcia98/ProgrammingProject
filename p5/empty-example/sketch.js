var diam1;
var diam2;
var diam1 = 0;
var diam2 = 350;
function setup() {
    //put setup code here
    createCanvas(500,500); // canvas size
    background(51);
}
function draw() {
    //put drawing code here
//background(51); // color background
     fill('red');
        stroke("#ADD8E6");
            strokeWeight(9);
ellipse(width / 2,height / 2,diam1,diam2);
    //diam1 = diam1+5;
    fill(51);
    stroke("#ADD8E6");
            strokeWeight(9);
ellipse(width / 2,height / 2,155,155);
     fill('#FFFF00');
    stroke("#ADD8E6");
            strokeWeight(9);
triangle(250,150,350,300,150,300);
    fill("#FFFF00");
    stroke("#ADD8E6");
            strokeWeight(9);
rect(30, 20, 85, 85, 20, 15, 10, 5);
rect(80, 70, 85, 85, 20, 15, 10, 5);
rect(400, 20, 85, 85, 20, 15, 10, 5);
rect(340, 70, 85, 85, 20, 15, 10, 5);
    stroke('red');
    strokeWeight(3);
point(mouseX, mouseY, 50, 50);
    fill(51);
        stroke(51);
            strokeWeight(9);
   // ellipse (random(0,width), random(0,height),30,30)
}
function mousePressed(){
    diam1=diam1+25;
    clear();
}