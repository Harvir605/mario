var PLAY = 1;
var END = 0;
var gameState = PLAY;

var mario , mario_collided, marion_running;
var coin,coin_img,coinGroup;
var ground, invisibleg;
var obstaclesGroup;
var obs1,obs2,obs3,obs1_img,obs2_img,obs3_img;

function preload(){
mario_running = loadAnimation("1.png","2.png","3.png");
coin_img = loadImage("coin.png");
obs1_img = loadImage("obs1.png")
obs2_img = loadImage("obs2.png");
obs3_img = loadImage("obs3.png");
}

function setup(){
var canvas = createCanvas(1920,1006);

// CREATING GROUNDS
ground = createSprite(960,1002,2500,10);
ground.shapeColor="teal";
ground.velocityX=-5;

invisibleg = createSprite(960,1002,2500,10);
invisibleg.visible=false;

// CREATING MARIO
mario = createSprite(150,930,10);
mario.addAnimation("running", mario_running);
mario.scale=0.8;
var coinGroup = createGroup();
}

function draw(){
background("backg.jpg");
text(mouseX+","+mouseY, 40,40)

if(gameState === PLAY){

if (keyDown("space")){
    mario.velocityY=-10;

    if (keyDown("space") && mario.y >= 139) {
        mario.velocityY = -15;
      }
      mario.velocityY = mario.velocityY + 0.8
    
}

// Gravity ADDED
mario.velocityY = mario.velocityY + 1.2;
mario.collide(invisibleg);

spawnCoin();
spawnObstacles();

if (obstaclesGroup.isTouching(mario)) {
    gameState = END;
    
  }
  if (coinGroup.isTouching(mario)) {
    coinSound.play();
    
   coinGroup[0].destroy();
    
  }
// COIN DESTROYED    
/*if (coinGroup.isTouching(mario)) {   
     coinGroup.destroy();
     mario.scale=0.8+0.1;
      
    }*/
}
// OBSTACLE CREATED
if(frameCount%250===0){
obs1 = createSprite(1920,935,10,10);
obs1.addImage(obs1_img);
obs1.scale=0.5;
obs1.velocityX=-5;
}

if(frameCount%150===0){
    obs2 = createSprite(1920,950,10,10);
    obs2.addImage(obs2_img);
    obs2.scale=0.5;
    obs2.velocityX=-5;
    }

    if(frameCount%300===0){
        obs3 = createSprite(1920,945,10,10);
        obs3.addImage(obs3_img);
        obs3.scale=0.5;
        obs3.velocityX=-5;
        }
        
if (ground.x > 50) {
    ground.x = ground.width / 2;
  }


drawSprites();
}

function spawnCoin(){

}
function spawnObstacles(){

}