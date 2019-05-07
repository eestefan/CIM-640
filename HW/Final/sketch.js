//Illustrations by Elizabeth Estefan.
//birdSound 58568__morgantj__birdschirping.mp3 provided by morgantj https://freesound.org/people/morgantj/sounds/58568/
//catSound 412016__skymary__cat-purring-and-meow.wav provided by skymary https://freesound.org/people/skymary/sounds/412016/
//dogSound 231762__davidmenke__fx-dog-barking.wav provided by davidmenke https://freesound.org/people/davidmenke/sounds/231762/
//pigSound 233183__jarredgibb__pig-multiple-snorts-2-2-pigs-96khz.wav provided by JarredGibb https://freesound.org/people/JarredGibb/sounds/233183/
//cowSound 242492__klankbeeld__mooing-cow-170713-0299.wav provided by Klankbeeld https://freesound.org/people/klankbeeld/sounds/242492/
//chickenSound 316920__rudmer-rotteveel__chicken-single-alarm-call.wav provided by Rudmer_Rotteveel https://freesound.org/people/Rudmer_Rotteveel/sounds/316920/
//frogSound 67261__benboncan__frog-croaking.wav provided by Benboncan https://freesound.org/people/Benboncan/sounds/67261/
//cricketSound 362404__outdoor-recordings__cricket.wav provided by outdoor_recordings https://freesound.org/people/outdoor_recordings/sounds/362404/
//dolphinSound 391317__forpus-prod__dolphin.wav provided by Forpus_Prod https://freesound.org/people/Forpus_Prod/sounds/391317/
//whaleSound 88449__davidou__baleines.wav provided by davidou https://freesound.org/people/davidou/sounds/88449/


// Global Variables
var button;

var storybookArray = [];
var page0,page1,page2;//page3,page4,page5,page6;

var storyText = ["The Sounds Around Me","OH NO! The sounds are all mixed up!","The Sounds in My Yard","The Sounds on the Farm","The Sounds by the Pond","Until the Next Sound..."];

var currentPage = 0;
var currentImage = 0;

//Yard Sounds
var catSound;
var dogSound;
var birdSound;
//Farm Spounds
var pigSound;
var cowSound;
var chickenSound;
//pond sounds
var frogSound;
var grasshopperSound;
//Ocean sounds
var dolphinSound;
var whaleSound;

//Page2 catHitZone
var catHitZoneX = 100;
var catHitZoneY = 160;
var catHitZoneSize = 240;
//Page2 dogHitZone
var dogHitZoneX = 400;
var dogHitZoneY = 160;
var dogHitZoneSize = 240;
//Page2 birdHitZone
var birdHitZoneX = 700;
var birdHitZoneY = 50;
var birdHitZoneSize = 150;
//Page3 pigHitZone
var pigHitZoneX = 400;
var pigHitZoneY = 160;
var pigHitZoneSize = 240;
//Page3 cowHitZone
var cowHitZoneX = 100;
var cowHitZoneY = 160;
var cowHitZoneSize = 240;
//Page3 chickenHitZone
var chickenHitZoneX = 700;
var chickenHitZoneY = 50;
var chickenHitZoneSize = 150;
//Page4 frogHitZone
var frogHitZoneX = 400;
var frogHitZoneY = 160;
var frogHitZoneSize = 240;
//Page4 grasshopperHitZone
var grasshopperHitZoneX = 100;
var grasshopperHitZoneY = 160;
var grasshopperHitZoneSize = 240;


var backgroundColor = "yellow";

var homeSounds = [];

var catButton,dogButton,birdButton,pigButton,cowButton,chickenButton,frogButton,grasshopperButton,dolphinButton,whaleButton;

var dogInterface;
var catInterface;
var birdInterface;
var pigInterface;
var cowInterface;
var chickenInterface;
var frogInterface;
var grasshopperInterface;
//var dolphinInterface;
//var whaleInterface;

var currentSound = "";



function preload(){
  storybookArray[0] = loadImage("assets/00-landing-page.png");
  storybookArray[1] = loadImage("assets/01-instructions-oink.png");
  storybookArray[2] = loadImage("assets/02-first-sound-page.png");
  storybookArray[3] = loadImage("assets/03-farm-page.png");
  storybookArray[4] = loadImage("assets/04-pond-page.png");
  storybookArray[5] = loadImage("assets/06-end-page.png");
  //storybookArray[6] = loadImage("assets/06-end-sound-page.png");

  catOverlay = loadImage("assets/meow-overlay.png")
  dogOverlay = loadImage("assets/woof-overlay.png")
  birdOverlay = loadImage("assets/tweet-overlay.png")
  pigOverlay = loadImage("assets/oink-overlay.png")
  cowOverlay = loadImage("assets/moo-overlay.png")
  chickenOverlay = loadImage("assets/cluck-overlay.png")
  frogOverlay = loadImage("assets/ribbit-overlay.png")
  grasshopperOverlay = loadImage("assets/chirp-overlay.png")


  //yard sounds
  catSound = loadSound("sounds/412016__skymary__cat-purring-and-meow-trim.m4a");
  dogSound = loadSound("sounds/231762__davidmenke__fx-dog-barking-converted.m4a");
  birdSound = loadSound("sounds/58568__morgantj__birdschirping-trim.m4a");
  //farm sounds
  pigSound = loadSound("sounds/233183__jarredgibb__pig-multiple-snorts-2-2-pigs-96khz-converted.m4a")
  cowSound = loadSound("sounds/242492__klankbeeld__mooing-cow-170713-0299-converted.m4a")
  chickenSound = loadSound("sounds/316920__rudmer-rotteveel__chicken-single-alarm-call-converted.m4a")
  //pond sounds
  frogSound = loadSound("sounds/67261__benboncan__frog-croaking-trim.m4a")
  grasshopperSound = loadSound("sounds/362404__outdoor-recordings__cricket-converted.m4a")
  //ocean sounds
  //dolphinSound = loadSound("sounds/391317__forpus-prod__dolphin-trim.m4a")
  //whaleSound = loadSound("sounds/88449__davidou__baleines-converted.m4a")

  homeSounds = [catSound,dogSound,birdSound,pigSound,cowSound,chickenSound,dolphinSound,whaleSound];


}

function setup() {
  // put setup code here
createCanvas (960,540);

//landing page
button1 = createButton("Home");
button1.position(50,500);
//this next code (mousePressed) is going to create the action
button1.mousePressed(function(){
  currentPage = 0;
});

button2 = createButton("Instructions");
button2.position(125,500);
button2.mousePressed(function(){
  currentPage = 1;
});

button3 = createButton("My Yard");
button3.position(233,500);
button3.mousePressed(function(){
  currentPage = 2;
});

    dogButton = createButton("Woof");
    dogButton.position(750,300);
    dogButton.size(140,55);
    dogButton.style("background-color","red");
    dogButton.style("color","white");
    dogButton.style("font-size","42px");
    //this next code (mousePressed) is going to create the action
    dogButton.mousePressed(function(){
      dogSound.play();
      currentSound = "dog";
    });

    catButton = createButton("Meow");
    catButton.position(750,365);
    catButton.size(140,55);
    catButton.style("background-color","red");
    catButton.style("color","white");
    catButton.style("font-size","42px");
//this next code (mousePressed) is going to create the action
    catButton.mousePressed(function(){
      catSound.play();
      currentSound = "cat";
    });

    birdButton = createButton("Tweet");
    birdButton.position(750,430);
    birdButton.size(140,55);
    birdButton.style("background-color","red");
    birdButton.style("color","white");
    birdButton.style("font-size","42px");
//this next code (mousePressed) is going to create the action
    birdButton.mousePressed(function(){
      birdSound.play();
      currentSound = "bird";
    });

    dogButton.hide();
    catButton.hide();
    birdButton.hide();

catInterface = new interfaces(catHitZoneX,catHitZoneY,catHitZoneSize, catHitZoneSize+80, "cat", homeSounds[1]);
dogInterface = new interfaces(dogHitZoneX,dogHitZoneY,dogHitZoneSize, dogHitZoneSize+80, "dog", homeSounds[2]);
birdInterface = new interfaces(birdHitZoneX,birdHitZoneY,birdHitZoneSize, birdHitZoneSize+50, "bird", homeSounds[0]);

button4 = createButton("On the Farm");
button4.position(320,500);
button4.mousePressed(function(){
  currentPage = 3;
});

    pigButton = createButton("Oink");
    pigButton.position(750,300);
    pigButton.size(140,55);
    pigButton.style("background-color","red");
    pigButton.style("color","white");
    pigButton.style("font-size","42px");
    //this next code (mousePressed) is going to create the action
    pigButton.mousePressed(function(){
      pigSound.play();
      currentSound = "pig";
    });

    cowButton = createButton("Moo");
    cowButton.position(750,365);
    cowButton.size(140,55);
    cowButton.style("background-color","red");
    cowButton.style("color","white");
    cowButton.style("font-size","42px");
    //this next code (mousePressed) is going to create the action
    cowButton.mousePressed(function(){
      cowSound.play();
      currentSound = "cow";
    });

    chickenButton = createButton("Cluck");
    chickenButton.position(750,430);
    chickenButton.size(140,55);
    chickenButton.style("background-color","red");
    chickenButton.style("color","white");
    chickenButton.style("font-size","42px");
    //this next code (mousePressed) is going to create the action
    chickenButton.mousePressed(function(){
      chickenSound.play();
      currentSound = "chicken";
    });

    pigButton.hide();
    cowButton.hide();
    chickenButton.hide();

pigInterface = new interfaces(pigHitZoneX,pigHitZoneY,pigHitZoneSize,pigHitZoneSize+80,"pig",homeSounds[4]);
cowInterface = new interfaces(cowHitZoneX-80,cowHitZoneY-80,cowHitZoneSize+20,cowHitZoneSize+120, "cow",homeSounds[5]);
chickenInterface = new interfaces(chickenHitZoneX-40,chickenHitZoneY-40,chickenHitZoneSize+20,chickenHitZoneSize+50,"chicken",homeSounds[3]);


button5 = createButton("By the Pond");
button5.position(435,500);
button5.mousePressed(function(){
  currentPage = 4;
});

    frogButton = createButton("Ribbit");
    frogButton.position(750,300);
    frogButton.size(140,55);
    frogButton.style("background-color","red");
    frogButton.style("color","white");
    frogButton.style("font-size","42px");
    //this next code (mousePressed) is going to create the action
    frogButton.mousePressed(function(){
      frogSound.play();
      currentSound = "frog";
    });

    grasshopperButton = createButton("Chirp");
    grasshopperButton.position(750,365);
    grasshopperButton.size(140,55);
    grasshopperButton.style("background-color","red");
    grasshopperButton.style("color","white");
    grasshopperButton.style("font-size","42px");
    //this next code (mousePressed) is going to create the action
    grasshopperButton.mousePressed(function(){
      grasshopperSound.play();
      currentSound = "grasshopper";
    });

frogButton.hide();
grasshopperButton.hide();

frogInterface = new interfaces(frogHitZoneX,frogHitZoneY,frogHitZoneSize,frogHitZoneSize+50,"frog",homeSounds[7]);
grasshopperInterface = new interfaces(grasshopperHitZoneX,grasshopperHitZoneY,grasshopperHitZoneSize,grasshopperHitZoneSize+50,"grasshopper",homeSounds[6]);


button6 = createButton("Next");
button6.position(550,500);
button6.mousePressed(function(){
  currentPage = 5;
});

//button6 = createButton("In the Ocean");
//button6.position(550,500);
//button6.mousePressed(function(){
  //currentPage = 5;
//});

//dolphinButton.hide();
//whaleButton.hide();

//dolphinInterface = new interfaces(dolphinHitZoneX,dolphinHitZoneY,dolphinHitZoneSize,dolphinHitZoneSize+50,"dolphin",homeSounds[9]);
//whaleInterface = new interfaces(whaleHitZoneX,whaleHitZoneY,whaleHitZoneSize,whaleHitZoneSize+50,"whale",homeSounds[8]);

}

function draw() {
  // put drawing code here
  background(backgroundColor);

  //landing page
  if(currentPage == 0){
    image(storybookArray[0],0,0);
    strokeWeight(4);
    fill("white");
    textSize (64);
    text(storyText[0],130,350);

    dogButton.hide();
    catButton.hide();
    birdButton.hide();
    pigButton.hide();
    cowButton.hide();
    chickenButton.hide();
    frogButton.hide();
    grasshopperButton.hide();

  //Instructions page
  }else if(currentPage == 1){
    image(storybookArray[1],0,0);
    fill("black");
    textSize (42);
    text(storyText[1],25,60);
    textSize (24);
    text("1. Click on an animal to listen to it. Is it the correct sound?",25,90);
    text("2. No? Choose the red button on the right with the sound you think it should be.",25,120);
    text("3. Now, click the same animal to listen to it again. Is it correct now? ",25,150);
    text("4. You will know it is correct when ",25,180);
    text("the sound appears.",50,210);

    //pigInterface.display();

    fill("black");
    textSize (32);
    text("CHOOSE",750,290);

    dogButton.hide();
    catButton.hide();
    birdButton.hide();
    pigButton.show();
    cowButton.hide();
    chickenButton.show();
    frogButton.hide();
    grasshopperButton.show();



  //Yard page
  }else if(currentPage == 2){
    image(storybookArray[2],0,0);
    textSize (42);
    text(storyText[2],25,60);
    noStroke();
    //noFill();
    //rect(catHitZoneX,catHitZoneY,catHitZoneSize,catHitZoneSize+80);
    //rect(dogHitZoneX,dogHitZoneY,dogHitZoneSize,dogHitZoneSize+80);
    //rect(birdHitZoneX,birdHitZoneY,birdHitZoneSize,birdHitZoneSize+50);

    dogInterface.display();
    catInterface.display();
    birdInterface.display();

    //fill("white");
    //rect(750,300,100,150);
    fill("black");
    textSize (32);
    text("CHOOSE",750,290);

    fill("red");
    stroke("red");
    strokeWeight("1");
    textSize (28);
    text("CAT",187,150);
    text("DOG",500,150);
    text("BIRD",850,190);

    dogButton.show();
    catButton.show();
    birdButton.show();
    pigButton.hide();
    cowButton.hide();
    chickenButton.hide();
    frogButton.hide();
    grasshopperButton.hide();

  //Farm
  }else if(currentPage == 3){
    image(storybookArray[3],0,0);
    textSize (42);
    text(storyText[3],25,60);
    noStroke();

    //rect(cowHitZoneX-80,cowHitZoneY-80,cowHitZoneSize+20,cowHitZoneSize+130);
    //rect(pigHitZoneX,pigHitZoneY,pigHitZoneSize,pigHitZoneSize+80);
    //rect(chickenHitZoneX-40,chickenHitZoneY-40,chickenHitZoneSize+20,chickenHitZoneSize+50);


    pigInterface.display();
    cowInterface.display();
    chickenInterface.display();

    fill("black");
    textSize (32);
    text("CHOOSE",750,290);

    fill("red");
    stroke("red");
    strokeWeight("1");
    textSize (28);
    text("COW",210,150);
    text("PIG",465,190);
    text("CHICKEN",790,180);

    dogButton.hide();
    catButton.hide();
    birdButton.hide();
    pigButton.show();
    cowButton.show();
    chickenButton.show();
    frogButton.hide();
    grasshopperButton.hide();

    //pond page
  }else if(currentPage == 4){
    image(storybookArray[4],0,0);
    textSize (42);
    text(storyText[4],25,60);
    noStroke();

    //rect(frogHitZoneX,frogHitZoneY,frogHitZoneSize,frogHitZoneSize+80);
    //rect(grasshopperHitZoneX,grasshopperHitZoneY,grasshopperHitZoneSize,grasshopperHitZoneSize+80);

    frogInterface.display();
    grasshopperInterface.display();

    fill("black");
    textSize (32);
    text("CHOOSE",750,290);
    fill("red");
    stroke("red");
    strokeWeight("1");
    textSize (28);
    text("FROG",200,230);
    text("GRASSHOPPER",405,230);

    dogButton.hide();
    catButton.hide();
    birdButton.hide();
    pigButton.hide();
    cowButton.hide();
    chickenButton.hide();
    frogButton.show();
    grasshopperButton.show();

    //end page
  }else if(currentPage == 5){
    image(storybookArray[5],0,0);
    strokeWeight(4);
    fill("white");
    textSize (64);
    text(storyText[5],150,350);
    noStroke();
    //noFill();
    //rect(catHitZoneX,catHitZoneY,catHitZoneSize,catHitZoneSize+80);
    //rect(dogHitZoneX,dogHitZoneY,dogHitZoneSize,dogHitZoneSize+80);
    //rect(birdHitZoneX,birdHitZoneY,birdHitZoneSize,birdHitZoneSize+50);

    frogInterface.display();
    grasshopperInterface.display();

    dogButton.hide();
    catButton.hide();
    birdButton.hide();
    pigButton.hide();
    cowButton.hide();
    chickenButton.hide();
    frogButton.hide();
    grasshopperButton.hide();

  }

    noStroke();
    fill("black");


}


function mousePressed(){
  //catHitZone
  // if(mouseX > catHitZoneX && mouseX < catHitZoneX + catHitZoneSize && mouseY > catHitZoneY && mouseY < catHitZoneY + catHitZoneSize && mouseIsPressed == true){
  //   catSound.play();
  // }
  // //dogHitZone
  // if(mouseX > dogHitZoneX && mouseX < dogHitZoneX + dogHitZoneSize && mouseY > dogHitZoneY && mouseY < dogHitZoneY + dogHitZoneSize && mouseIsPressed == true){
  //   dogSound.play();
  // }
  // //birdHitZone
  // if(mouseX > birdHitZoneX && mouseX < birdHitZoneX + birdHitZoneSize && mouseY > birdHitZoneY && mouseY < birdHitZoneY + birdHitZoneSize && mouseIsPressed == true){
  //   birdSound.play();
  // }


  if(catInterface.check() == true){
    if(catInterface.type == currentSound){
      catInterface.S0 = homeSounds[0];
    }
  }else if(dogInterface.check() == true){
    if(dogInterface.type == currentSound){
      dogInterface.S0 = homeSounds[1];
    }
  }else if(birdInterface.check() == true){
    if(birdInterface.type == currentSound){
      birdInterface.S0 = homeSounds[2];
    }
  }else if(pigInterface.check() == true){
    if(pigInterface.type == currentSound){
      pigInterface.S0 = homeSounds[3];
    }
  }else if(cowInterface.check() == true){
    if(cowInterface.type == currentSound){
      cowInterface.S0 = homeSounds[4];
    }
  }else if(chickenInterface.check() == true){
    if(chickenInterface.type == currentSound){
      chickenInterface.S0 = homeSounds[5];
    }
  }else if(frogInterface.check() == true){
    if(frogInterface.type == currentSound){
      frogInterface.S0 = homeSounds[6];
    }
  }else if(grasshopperInterface.check() == true){
    if(grasshopperInterface.type == currentSound){
      grasshopperInterface.S0 = homeSounds[7];
    }
  }






}


class interfaces{
  constructor(tempX, tempY, tempW, tempH, tempType, tempS0){
    this.x = tempX;
    this.y = tempY;
    this.width = tempW;
    this.height = tempH;
    this.type = tempType;
    this.S0 = tempS0;
  }


  display(){
    noFill();
    rect(this.x,this.y,this.width,this.height);
  }

  check(){
    if(mouseX > this.x && mouseX < (this.x + this.width) && mouseY > this.y && mouseY < (this.y + this.height)){
        this.S0.play();
        return true;
      }else{
      return false;
    }
  }


}
