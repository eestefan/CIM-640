//* "origami pig step 1-500x500px.jpg, origami pig step2-500x500px.jpg" by Elizabeth Estefan (c)2019.
//* "origami pig step 3-500x500px.jpg, origami pig step4-500x500px.jpg" by Elizabeth Estefan (c)2019.

var backgroundColor = "black";

var origamiStep1;
var origamiStep2;
var origamiStep3;
var origamiStep4;

var step1Button;
var step2Button;
var step3Button;
var step4Button;


//this will load origami pig step 4-500x500px.jpg
var currentImage = 0;

function preload(){
  origamiStep1 = loadImage("assets/origami pig step 1-500x500px.jpg");
  origamiStep2 = loadImage("assets/origami pig step 2-500x500px.jpg");
  origamiStep3 = loadImage("assets/origami pig step 3-500x500px.jpg");
  origamiStep4 = loadImage("assets/origami pig step 4-500x500px.jpg");

}


function setup() {
  // put setup code here
  createCanvas(580,630);


  step1Button = createButton("Origami? Let's Go!");
  step1Button.position(80,575);
  //this next code (mousePressed) is going to create the action
  //this is option one of creating an option
  step1Button.mousePressed(function(){
    currentImage = 0;
  });

  step2Button = createButton("Start Folding");
  step2Button.position(223,575);
  step2Button.mousePressed(function(){
    currentImage = 1;
  });

  step3Button = createButton("Progress");
  step3Button.position(340,575);
  step3Button.mousePressed(function(){
    currentImage = 2;
  });

  step4Button = createButton("Oink");
  step4Button.position(435,575);
  step4Button.mousePressed(function(){
    currentImage = 3;
  });
}

function draw() {
  // put drawing code here

  background(backgroundColor);

  if(currentImage == 0){
    image(origamiStep1,40,40,origamiStep1.width/2,origamiStep1.height/2);
  }else if(currentImage == 1){
    image(origamiStep2,40,40,origamiStep2.width/2,origamiStep2.height/2);
  }else if(currentImage == 2){
    image(origamiStep3,40,40,origamiStep3.width/2,origamiStep3.height/2);
  }else if(currentImage == 3){
    image(origamiStep4,40,40,origamiStep4.width/2,origamiStep4.height/2);
  }


}
