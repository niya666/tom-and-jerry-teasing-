var jerry, jerry1,jerry2,jerry3;
var tom , tom1,tom2,tom3;
var gardenImage;

function preload() {

 jerry1 = loadAnimation("images/mouse1.png");
 jerry2 = loadAnimation("images/mouse2.png","images/mouse3.png");
 jerry3 = loadAnimation("images/mouse4.png");

 tom1 = loadAnimation("images/cat1.png");
 tom2 = loadAnimation("images/cat2.png","images/cat3.png");
 tom3 = loadAnimation("images/cat4.png");

gardenImage = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here.
   
  tom = createSprite(870,600,8,6);
  tom.addAnimation("tomSleeping",tom1);
  tom.scale =0.2;


  jerry = createSprite(200,600,3,2);
  jerry.addAnimation("jerryStanding",jerry1);
  jerry.scale = 0.15;

}

function draw() {

    background(gardenImage);

    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX =0;
        tom.addAnimation("tomLastImage",tom3);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage",jerry3);
        jerry.scale =0.15;
        jerry.changeAnimation("jerryLastImage");
      
        }

    drawSprites();
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -4;
        tom.addAnimation("tomRunning",tom2)
        tom.changeAnimation("tomRunning")
        jerry.addAnimation("jerryTeasing",jerry2)
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing")
    }
}
