function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

var video;

var bap;

var bapIMG;



function setup() {
  createCanvas(640, 500);
  background(51);
  video = createCapture(VIDEO);
  

 bap = createSprite(20,20,39,30);
  bap.shapeColor = "blue";
  
 
  
}

function draw() {
  image(video, 0, 0);
  
  fill("yellow");
  textSize(20)
  text("SUBSCRIBE TO Versatile MC", 100, 30);
  
  
  
  drawSprites();
  
}