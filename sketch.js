var hero;
var heroImg
var bg
var bgImg
var ground
var enemyImg

function preload () {
  heroImg = loadAnimation ("contrap.png","standing.png");
  bgImg=loadImage("contrabg3.8.png");
  groundImg=loadImage("ground2.png")
  enemyImg=loadImage("alien.png");
}

function setup()
{
  createCanvas(windowWidth,windowHeight);
  bg=createSprite (width/2,height/2+313,width,height);
  
  hero=createSprite(100,displayHeight/2,10,40);
  hero.addAnimation("heroImg",heroImg);
  bg.addImage(bgImg);
  bg.velocityX=-5
  bg.scale=1.9

  ground=createSprite(width/2,height-100,width,10)
  ground.addImage(groundImg)
}

function draw() 
{
  background(51);

   drawSprites();
 if(keyDown("space")){
   hero.velocityY=-14

   

   }
   hero.velocityY=hero.velocityY+0.5
   hero.collide(ground);
   if(bg.x<0){
bg.x=bg.width/2
   }
   enemy();

   if (keyWentDown(RIGHT_ARROW)){
var bullet=createSprite(300,hero.y,30,10)
bullet.velocityX=5
   }
 } 

 function enemy(){
   if(World.frameCount%300===0){
var enemy=createSprite(width,height-300,30,30);
enemy.addImage(enemyImg);
enemy.velocityX=-3;

   }
 }



