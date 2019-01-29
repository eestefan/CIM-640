// currentWidth = width; will not work outside the p5 functions
// currentHeight = height;

//global variables are available everywhere, all throughout your program
var backgroundColor = "white";
// eyePosX and eyePosY = 0 declare the variable tag name in the code
var eyePosX = 0;
var eyePosY = 0;
var eyeOffset = 20;
var eyeSize = 20;

var instruction = "Dont cross the line!";


function setup() {
  // put setup code here
  createCanvas(500,500);
  eyePosX = width/2;
  eyePosY = 100;


}

function draw() {
  // put drawing code here
  background(backgroundColor);
  text(instruction,20,20);
  line(0,height/2,width,height/2);
  eyePosX = mouseX;
  eyePosY = mouseY;
  ellipse(width/2,height/2,10,10);
  //mouseX and mouseY tells program to ask what is the position of the mouse
  ellipse(mouseX,mouseY,10,10);

  //start with point to start the drawing
  point(eyePosX,eyePosY);
  ellipse(eyePosX - eyeOffset ,eyePosY,eyeSize,eyeSize);
  ellipse(eyePosX + eyeOffset ,eyePosY,eyeSize,eyeSize);

  if(mouseY > height/2){
    //run this code
    console.log("Below line");
    //add a sadface when cross the line
    angleMode(DEGREES);
    arc(eyePosX,eyePosY + 100,100,100,180,0);
  }

  if(mouseY < height/2){
    console.log("Above line");
    //add a happy face when cross the line
    angleMode(DEGREES);
    arc(eyePosX,eyePosY + 100,100,100,0,180);

  }


}

//end of draw loop

function mousePressed(){
  backgroundColor = "blue";
}

function mouseReleased(){
  backgroundColor = "white";
}

function keyPressed(){
  console.log("letter:" + key + "keyCode:" + keyCode);
  if(key == 'a'){
    console.log("the letter is a");
  }else if(key == 'b'){
    backgroundColor = "blue";
  }else if (key == "r"){
    backgroundColor = "red";
  }else{
    backgroundColor = "green";
  }


}


  if(keyCode == 65){
    console.log("the keyCode is a");
  }

}
