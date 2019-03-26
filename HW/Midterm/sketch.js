//Illustrations by Elizabeth Estefan.

// Global Variables
var storybookArray = [];
//var storybookArray[0],storybookArray[1],storybookArray[2],storybookArray[3],storybookArray[4],storybookArray[5],storybookArray[6],storybookArray[7],storybookArray[8],storybookArray[9],storybookArray[10],storybookArray[11];

var page0,page1,page2,page3,page4,page5,page6,page7;

var currentPage = 0;

var currentImage = 0;

var storyText = ["CAN YOU MEND","THIS BROKEN HEART?","HOW DO YOU?", "SPELL l-o-v-e!"];

var backgroundColor = "indigo";

var y = "yellow";
var r = "red";
var p = "magenta";
var w = "white"

var ballPosX = 0;
var ballPosY = 0;

//LOVE For Loop
var loveImageLocationX = [];
var loveImageLocationY = [];
var loveImage;
var loveImageAmount = 120;



function preload(){
  storybookArray[0] = loadImage("assets/heart0.png");
  storybookArray[1] = loadImage("assets/heart1.png");
  storybookArray[2] = loadImage("assets/heart2.png");
  storybookArray[3] = loadImage("assets/heart3.png");
  storybookArray[4] = loadImage("assets/heart4.png");
  storybookArray[5] = loadImage("assets/LOVEsmall.png");
  storybookArray[6] = loadImage("assets/heart5.png");
  storybookArray[7] = loadImage("assets/L.png");
  storybookArray[8] = loadImage("assets/O.png");
  storybookArray[9] = loadImage("assets/V.png");
  storybookArray[10] = loadImage("assets/E.png");

  loveImage = loadImage("assets/LOVEsmall.png")

}


function setup() {
  // put setup code here
  createCanvas (800,1000);

  //LOVE for loop
  for (var i = 0; i < loveImageAmount; i++){
    loveImageLocationX[i] = random(0, width);
    loveImageLocationY[i] = random(0, - 800);
  }

  button1 = createButton("Press Me");
  button1.position(150,850);
  //this next code (mousePressed) is going to create the action
  button1.mousePressed(function(){
    currentPage = 1;
  });

  button2 = createButton("Now Me");
  button2.position(width/2-25,850);
  button2.mousePressed(function(){
    currentPage = 2;
  });

  button3 = createButton("Don't Forget Me");
  button3.position(width-200,850);
  button3.mousePressed(function(){
    currentPage = 3;
  });

  button4 = createButton("And Me...");
  button4.position(150,900);
  button4.mousePressed(function(){
    currentPage = 4;
  });

  button5 = createButton("And Me...");
  button5.position(width/2-25,900);
  button5.mousePressed(function(){
    currentPage = 5;
  });

  button6 = createButton("All Together Now");
  button6.position(width-200,900);
  button6.mousePressed(function(){
    currentPage = 6;
  });

  button7 = createButton("How Do You SPELL L-O-V-E?");
  button7.position(width/2-80,950);
  button7.mousePressed(function(){
    currentPage = 7;
  });


}

function draw() {
    // put drawing code here

    background(backgroundColor);


    if(currentPage == 0){
      image(storybookArray[6],0,0);
      stroke(w);
      fill(w);
      strokeWeight(4);
      textSize (54);
      text(storyText[0],200,120);
      textSize (64);
      text(storyText[1],54,200);
    }else if(currentPage == 1){
      image(storybookArray[0],0,0);
    }else if(currentPage == 2){
      image(storybookArray[1],0,0);
    }else if(currentPage == 3){
      image(storybookArray[2],0,0);
    }else if(currentPage == 4){
      image(storybookArray[3],0,0);
    }else if(currentPage == 5){
      image(storybookArray[4],0,0);
    }else if(currentPage == 6){
      //loveImage For Loop
      for(var i = 0; i < loveImageAmount; i++){
        image(loveImage,loveImageLocationX[i], loveImageLocationY[i], 120, 120);

        if(loveImageLocationY[i] < height - 20){
          // keep the hearts going down
          loveImageLocationY[i]++; //same thing as saying the U location for index 0, increase it by 1
          //makes the hearts come down, adds hearts by 1
          loveImageLocationX[i] = loveImageLocationX[i] + sin(radians(frameCount));
        }
      }
    }else if(currentPage == 7){
      fill(w);
      stroke(w);
      strokeWeight(4);
      textSize (64);
      text(storyText[2],170,120);
      textSize (100);
      text(storyText[3],70,220);
      //image(storybookArray[6],0,0);

      if(keyIsPressed == true && key == 'l'){
        image(storybookArray[7],0,0);
        //keyReleased to undo image?
      }else if(keyIsPressed == true && key == 'o'){
        image(storybookArray[8],0,0);
        //keyReleased to undo image?
      }else if(keyIsPressed == true && key == 'v'){
          image(storybookArray[9],0,0);
          //keyReleased to undo image?
      }else if(keyIsPressed == true && key == 'e'){
          image(storybookArray[10],0,0);
          //keyReleased to undo image?
      }


    }


    //bottom yellow box
    fill(y);
    noStroke();
    quad(0,800,800,800,1000,1000,0,1000);

    //moving ball-mouseX,mouseY-change color at width/2
    ballPosX = mouseX;
    ballPosY = mouseY;
    ellipse(mouseX,mouseY,48,48);

    if(mouseX > width/2){
      //run this code
      //ball turns red moving to the right and crosses the width/2
      fill(r);
      noStroke();
      ellipse(mouseX,mouseY,48,48);
    }

    if(mouseX < width/2){
      //run this code
      //ball turns pink moving to the left and crosses the width/2
      fill(p);
      noStroke();
      ellipse(mouseX,mouseY,48,48);
    }







}

//end of draw loop

//mouse press background change color
function mousePressed(){
  backgroundColor = "yellow";

}

function mouseReleased(){
  backgroundColor = "indigo";
}

function keyPressed(){

  if(key == 'l'){
    image(storybookArray[7],0,0);
    //keyReleased to undo image?
  }else if(key == 'o'){
    image(storybookArray[8],0,0);
    //keyReleased to undo?
  }else if (key == "v"){
    image(storybookArray[9],0,0);
    //keyReleased to undo?
  }else if (key == "e"){
    image(storybookArray[10],0,0);
    //keyReleased to undo?
  }else{
    //currentImage =
    //image(storybookArray[6],0,0)
    backgroundColor = (p);
  }

}

function keyReleased(){
//Image(storybookArray[6],0,0);
//image(storybookArray[6],0,0);
  backgroundColor = "indigo";
}
