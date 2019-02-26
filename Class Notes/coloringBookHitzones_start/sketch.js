//colorbook - 1st need a pen after teh

var brushColor = 0;
var brushSize = 10;

var circleButtonX = 100;
var circleButtonY = 450;
var circleButtonSize = 100;

var rectButtonX = 200;
var rectButtonY = 400;
var rectButtonSize = 100;

var incButton;

var robot;

function preload(){

  robot = loadImage("assets/robot.png");

}

function setup() {
  // put setup code here
  createCanvas(500,500);
  noStroke();
  incButton = createButton("Increase Brush Size");
  incButton.position(350,450);
  incButton.mousePressed(function(){
    //brushSize = brushSize + 1;
    //brushSize++;
    //brushSize = brushSize + 10;
    brushSize+=10;

  });
}

function draw() {
  // put drawing code here
  fill(brushColor);
  ellipse(mouseX,mouseY,brushSize,brushSize);

  image(robot,100,0);

  //interface
  fill(127);
  ellipse(circleButtonX,circleButtonY,circleButtonSize,circleButtonSize);
  fill(0);
  text("clear",circleButtonX-10,circleButtonY);
  //adding the logic for the circular button
  var circleDist = dist(circleButtonX,circleButtonY,mouseX,mouseY);
  console.log("circleDist:" + circleDist);

  //can use either < 50 or circleButtonSize/2
  //making backgroun 225 floods the background with white erasing all that was drawn
  if(circleDist < circleButtonSize/2 && mouseIsPressed == true){
    background(255);
    //better to make the button click so not lose everything
  }

  //draw rectangle
  fill(255,0,0);
  rect(rectButtonX,rectButtonY,rectButtonSize,rectButtonSize);
  fill(0);
  text("red",rectButtonX + 50,rectButtonY + 50);
  //code to see if mouse in rectangle -
  if(mouseX > rectButtonX && mouseX < rectButtonX + rectButtonSize && mouseY > rectButtonY && mouseY < rectButtonY + rectButtonSize && mouseIsPressed == true){
    brushColor = color(255,0,0);
  }



}








//end of code
