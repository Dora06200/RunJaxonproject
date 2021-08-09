var path,pathImg;
var run,runner;
var left_sprite,right_sprite;
var invisible_side;
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runner = loadAnimation("Runner-1.png","Runner-2.png");
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale= 1.2;
  
  run = createSprite(80,335,85,75);
  run.addAnimation("running",runner);
  run.scale=0.1;
  
  left_sprite = createSprite(10,335,5,400);

  right_sprite = createSprite(390,335,5,400);
  
  invisible_side = createSprite(400,400,200,200);
  invisible_side.visible= false;

}

function draw() {
  background(0);
    
  run.collide(left_sprite);
  run.collide(right_sprite);

  if(keyDown(LEFT_ARROW)){
    run.x = run.x - 5;
  }

if(keyDown(RIGHT_ARROW)){
  run.x = run.x + 5;
}

  if(path.y > 400) {
    path.y = height/2;
  }
drawSprites();
}
