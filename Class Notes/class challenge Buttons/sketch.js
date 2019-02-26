var backgroundColor = "red";
var showShape
var hideShape
var showButton, hideButton;
var buttonHide
var r = "red";
var w = "white";
var showingOrHiding = 0; //0 is hiding, 1 is showing



function setup() {
  // put setup code here
  createCanvas(500,500);
  background(backgroundColor);
  noStroke();

  showButton = createButton("Show");
  showButton.position(170,450);
  showButton.mousePressed(function(){
    //set the action, what do you want the mousepress to do

      //ellipse()
      //fill("white");
      //ellipse(width/2,height/2,200,200);

      showingOrHiding = 1;
  });

  hideButton = createButton("Hide");
  hideButton.position(270,450);
  hideButton.mousePressed(function(){

    //set the action, what do you want the mousepress to do

      //ellipse()
      //fill("red");
      //ellipse(width/2,height/2,200,200);

      showingOrHiding = 0;
  });
}

function draw() {
  // put drawing code here
  background(backgroundColor);
  //ellipse(width/2,height/2,200,200);

  if(showingOrHiding == 1){
    fill(0);
    //mouseX and MouseY make the ellipse follow around the cursor
    ellipse(mouseX, mouseY,10,10);
    //ellipse(width/2,height/2,200,200); makes a circle in the middle
  }

  if(showingOrHiding == 0){

  }



}
