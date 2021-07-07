var bgImg;
var cat;
function preload() {
    //load the images here
    bgImg = loadImage("add image uel here");
    catimg1 = loadAnimation("image/cat1.png");
    mouseimg1 = loadAnimation("image/mouse1.png");
    catimg2 = loadAnimation("image/cat2.png");
    catimg3 = loadAnimation("image/cat3.png");
    catimg4 = loadAnimation("image/cat4.png");
    mouseimg2 = loadAnimation("image/mouse2.png");
    mouseimg3 = loadAnimation("image/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseimg2);
      mouse.changeAnimation("mouseTeasing");
      mouse.frameDelay = 25;
  }


}
