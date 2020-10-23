
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png")
}



function setup() {
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
    
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  
  score=0;
}


function draw() {
createCanvas(400,400);
  background("white");
  
  

  ground = createSprite(400,350,400,10);
  ground.velocityX= -4;
  ground.x=ground.width/2
  
  if(keyDown("SPACE")){
    monkey.velocityY= -12
  }
  
  if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
    
  }
   monkey.velocityY= monkey.velocityY+0.5;
  monkey.collide(ground);
 
    
spawnbanana();
spawnobstacles();
  
  drawSprites();
  
}

function spawnbanana(){
  if(World.frameCount%80===0){
  banana = createSprite(200,200);
  banana.addImage(bananaImage);
  banana.scale =0.1;
  banana.velocityX = -4;
  banana.y = Math.round(random(120,200));
  banana.lifetime = 50;
  bananaGroup.add(banana);
  }
}

function spawnobstacles(){
  if(World.frameCount%300===0){
   obstacle = createSprite(100,330);
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.1;
   obstacle.velocityX =-4;
   obstacle.lifetime = 80;
   obstacleGroup.add(obstacle);
  } 
}



