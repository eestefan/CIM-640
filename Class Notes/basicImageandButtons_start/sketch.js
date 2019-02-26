/* "Up-Close Sloth" by marissa_strniste, "Baby sloth, being cute" by Dave Gingrich is licensed under CC BY-SA 2.0. To view a copy of this license, visit: https://creativecommons.org/licenses/by-sa/2.0*/


var slothBaby;
var slothAdult;

var babyButton;
var adultButton;

//this will load the baby image
var currentImage = 1;

function preload(){
  slothBaby = loadImage("assets/slothbaby.jpg");
  slothAdult = loadImage("assets/slothadult.jpg");

}

function setup() {
  // put setup code here
  createCanvas(500,500);
  babyButton = createButton("Baby Sloth");
  babyButton.position(10,40);
  //this next code (mousePressed) is going to create the action
  //this is option one of creating an option
  babyButton.mousePressed(function(){
    currentImage = 0;
  });

  adultButton = createButton("Adult Sloth");
  adultButton.position(100,40);
  adultButton.mousePressed(adultChange);


}

function draw() {
  // put drawing code here
  if(currentImage == 0){
    image(slothBaby,0,20,slothBaby.width/2,slothBaby.height/2);
  }else if(currentImage == 1){
    image(slothAdult,0,20,slothAdult.width/2,slothAdult.height/2);
  }



}
//this is a option 2 on writing the code like babyButton avobe in the setup
function adultChange(){
  currentImage = 1;
}
