// Global Variables
var backgroundColor = "indigo";//strings
var circleBase = 100;
var circleOffset = 100;
var circleY = 325;
var quadOffset = 50;
var y = "yellow";
var r = "red";
var ballPosX = 0;
var ballPosY = 0;

var instruction = "SCROLL RIGHT!";
var instructionTwo = "SCROLL IT BACK!"



function setup() {
  // put setup code here
  createCanvas (800,1000);

}

function draw() {
    // put drawing code here

    background(backgroundColor);




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
    fill(r);
    strokeWeight(2);
    noStroke();
    triangle(375,375,400,315,425,375);

    strokeWeight(3);
    //horizontal yellow line

    noStroke();
    fill(y);
    textSize(21);
    text(instruction,20,400);
    fill(236,0,140);
    text(instructionTwo,605,400)

    //bottom yellow box
    fill(y);
    quad(0,800,800,800,1000,1000,0,1000);
    //  stroke(y);
    //line(0,800,800,800);



    //diagonal yellow line right to left
    line(533,0,195,800);

    fill(r);
    strokeWeight(2);
    noStroke();
    //top center triangle
    triangle(300,0,500,0,400,250);





    //scrolling ball
    fill(y);
    ballPosX = mouseX;
    eballPosY = mouseY;
    ellipse(mouseX,mouseY,48,48);

    if(mouseX > width/2){
      //run this code
      console.log("To the Right of the Pink Triangle");
      //ball turns pink moving to the right and crosses the pink triangle
      fill(236,0,140);
      stroke(236,0,140);
      ellipse(mouseX,mouseY,48,48);
    }

    if(mouseX < width/2){
      //run this code
      console.log("To the Left of the Pink Triangle");
      //ball turns pink moving to the right and crosses the pink triangle
      fill(y);
      stroke(y);
      ellipse(mouseX,mouseY,48,48);
    }

}

//end of draw loop

function mousePressed(){
  backgroundColor = "yellow";
}

function mouseReleased(){
  backgroundColor = "indigo";
}
