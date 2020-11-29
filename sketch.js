
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime;
var ground,groundImage;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
   groundImage = loadImage("ground2.png");
}



function setup() {
  createCanvas(600,200);
ground = createSprite(0,200,10,10);
  ground.velocityX = -4;
    ground.addImage(groundImage);
monkey = createSprite(80,190,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  console.log(ground.x)
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background(180);
  
  
  
  
  
  
  
  
   stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time:"+ survivalTime,100,50);
  
  
    if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
  
  
  
  
  
  
  
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.collide(ground);
  
  SpawnObstacles();
  bananas();
  drawSprites();
}
function bananas(){
  if(frameCount%80===0){
    banana = createSprite(200,50,10,20);
    banana.y = Math.round(random(100,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
  banana.x = 200;
    banana.velocityX = -6;
    banana.lifetime = 100;
    FoodGroup.add(banana);
  }
}    
    function SpawnObstacles(){
  if(frameCount%300===0){
    obstacle = createSprite(150,200,10,20);
    obstacle.y = Math.round(random(190,195));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
  
    obstacle.velocityX = -5;
    obstacle.lifetime = 120;
    obstacleGroup.add(obstacle);
  }
}    
    
    
  
  
  
  






