var seasons;
var seasonType = "";


var snowLocationX = [];
var snowLocationY = [];
var snowAmount = 100;


function setup() {
  // put setup code here
  createCanvas(400,400);

  seasons = createSelect();
  seasons.position(10.10);
  seasons.option("");
  seasons.option("spring");
  seasons.option("summer");
  seasons.option("fall");
  seasons.option("winter");
  seasons.changed(function(){
    seasonType = seasons.value
  });

  for(var x = 0; x<100; x++){
    console.log(x);
  }

  for(var i = 0; i<snowAmount; i++){
    snowLocationX[i] = random(0,width);
    snowLocationY[i] = random(0,-500);
    //these are 2 arrays with 10 random numbers in them
    //random tells program to pick random set values
  }


}

function draw() {
  // put drawing code here
  background (255);
  fill ("black");
  stroke(0);
  textSize (20);
  text(seasonType, 10, 75);

  seasonType = "winter";
  //once program cycles will start at the season
  //can use this function temporarily or leave out to start at blank


//create blocks of art
if(seasonType == "spring"){
//first draw center of our flower
  line(width/2,height/2,width/2,300);
  fill("white");
  //ellipse(width/2,height/2 -20, 10,20);
  // i++ is the same as i = i + 1;

for(var i = 0; i < 24; i++){
  //runs code in here, will run # of times listed in var i times
  //in this case it will run 24 times (this makes the petals)
  push();
  translate(width/2,height/2);
  rotate(i + 30);
  ellipse(0, 10, 10, 20);
  pop();
}


fill("yellow")
  ellipse(width/2,height/2,20,20);
}else if(seasonType == "winter"){
  for(var i = 0; i < snowAmount; i++){
    fill(200);
    ellipse(snowLocationX[i], snowLocationY[i], 10,10);
    snowLocationY[i] = snowLocationY[i] + 1;
    if(snowLocationY[i] > height){
      snowLocationY[i] = random(0,-500); //keep snow from falling out of view
      snowLocationX[i] = random(0 , width);
    }
  }
}
}
