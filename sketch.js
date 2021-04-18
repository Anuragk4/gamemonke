
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  FoodGroup=new Group()
  obstacleGroup=new Group()
  
  varsurvivalTime=0
}



function setup() {
 monkey=createSprite(80,315,20,20) 
monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4

  
 banana=createSprite(670,Math.round(random(170,230)),10,10)
  banana.addImage(bananaImage)
  banana.velocityX=-3
  banana.scale=0.07
  banana.lifetime=250
  FoodGroup.add(banana)
  
  
  if(frameCount%300===0){
  var obstacle = createSprite(400,310,10,40);
     obstacle.X =  Math.round(random,(1,6))
   obstacle.velocityX = -6;
  obstacle.addImage(obstaceImage)
   
  
  obstacle.scale=0.2
  obstacle.lifetime=300
  FoodGroup.add(banana)
}
}



function draw() {
background(255)
  
  if(keyDown("space")){
monkey.velocityY=-12
  }
  
  monkey.velocityY = monkey.velocityY +0.8
  monkey.collide(ground)
  
  if(ground.x<0){
  ground.x=ground.width/2
    
    
  }
  
  drawSprites()
  stroke("white")
  textSize(20)
  fill("white")
  
  stroke("black")
    textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50 )
}






