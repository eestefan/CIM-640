// Global Variables
var backgroundColor = "indigo";//strings
var circleBase = 100;
var circleOffset = 100;
var circleY = 325;
var quadOffset = 50;
var y = "yellow";
var r = "red";
var arcX = 250;
var arcY = 275;
var arcX2 = 550;
var arcWH = 200;


function setup() {
  // put setup code here
  createCanvas (800,800);
  background(backgroundColor);

}

function draw() {
    // put drawing code here


    fill(r);
    strokeWeight(2);
    stroke(y)
    //bottom center triangle
    triangle(300,0,500,0,400,250);
    triangle(300,800,500,800,400,550);

    fill(0,174,239);
    noStroke();
    //quad left side
    quad(0,425,200,425,250,500,0,700);

    //quad right side
    quad(600,425,800,425,800,700,550,500);

    fill(y);
    //quadOffset left side
    quad(0,425 + quadOffset,200,425+quadOffset,250,500,0,700);

    //quadoffset right side
    quad(600,425+ quadOffset,800,425+ quadOffset,800,700,550,500);

    //blue heart
    fill(0,174,239);
    strokeWeight(4);
    stroke(0,174,239);
    //blue heart left ellipse
    ellipse(300,circleY,circleBase + 100,circleBase + 100);

    //blue heart right ellipse
    ellipse(500,circleY,200,200);

    //blue heart bottom triangle
    triangle(215,375,585,375,400,625);

    //yellow heart
    fill(y);
    strokeWeight(1);
    stroke(y);
    //yellow heart left ellipse
    ellipse(325,circleY,circleBase + 50,circleBase + 50);

    //yellow heart right ellipse
    ellipse(475,circleY,150,150);

    //yellow heart bottom triangle
    triangle(270,375,530,375,400,550);

    //red heart
    fill(r);
    strokeWeight(1);
    stroke(r);

    //red heart left ellipse
    ellipse(350,circleY,circleBase,circleBase);

    //red heart right ellipes
    ellipse(450,circleY,circleBase,circleBase);

    //red heart bottom triangle
    triangle(305,345,495,345,400,475);

    //center triangle
    fill(236,0,140);
    strokeWeight(2);
    stroke(y);
    triangle(375,375,400,315,425,375);

    strokeWeight(3);
    //horizontal yellow line
    line(0,375,800,375);

    //diagonal yellow line left to right
    line(268,0,605,800);

    //diagonal yellow line right to left
    line(533,0,195,800);

    fill(r);
    strokeWeight(2);
    stroke(y);
    //top center triangle
    triangle(300,0,500,0,400,250);

    // offset curves
    noFill();
    strokeWeight(10);
    stroke(0,174,239);
    angleMode(DEGREES);
    arc(arcX,arcY,arcWH,arcWH,150,300);
    arc(arcX2,arcY,arcWH,arcWH,230,30);

    strokeWeight(5);
    arc(arcX -50,arcY -50,arcWH,arcWH,150,300);
    arc(arcX2 +50,arcY -50,arcWH,arcWH,230,30);

    strokeWeight(1);
    stroke(y);
    arc(arcX -100,arcY -100,arcWH,arcWH,150,300);
    arc(arcX2 +100,arcY -100,arcWH,arcWH,230,30);

    


















}
