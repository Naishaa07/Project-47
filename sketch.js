const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var no=0, ground, b1, b2, b3, b4,b5,b6;
function setup(){
createCanvas(400,400)
engine = Engine.create();
world = engine.world;
ground = new Ground(200,390,400,20)
b1 = createSprite(200,20,275,40)
b2 = createSprite(200,20,225,40)
b3 = createSprite(200,20,175,40)
b4 = createSprite(200,20,125,40)
b5 = createSprite(200,20,75,40)
b6 = createSprite(200,20,25,40)
b1.velocityX=1
b1.shapeColor="blue"
b2.velocityX=1
b2.shapeColor="blue"
b3.velocityX=1
b3.shapeColor="blue"
b4.velocityX=1
b4.shapeColor="blue"
b5.velocityX=1
b5.shapeColor="blue"
b6.velocityX=1
b6.shapeColor="blue"

box6 = new Box(b1.x,20,25,40)
box5 = new Box(b1.x,20,75,40)
box4 = new Box(b1.x,20,125,40)
box3 = new Box(b1.x,20,175,40)
box2 = new Box(200,20,225,40)
box1 = new Box(200,20,275,40)


}

function draw(){
  background("yellow")
  Engine.update(engine);
  ground.display();
 
 
  if(keyWentDown("space") ){
    no = no + 1
    console.log(no)
  }

  if(no>1.9){
    box2.display();
    b2.lifetime=0
   }
   else{
     if(b2.x>288.5){
       b2.velocityX=-1
     }
     if(b2.x<112.5){
       b2.velocityX=1
     }
   b3.x=b2.x
   }

 if(no>0.9){
   box1.display();
   b1.lifetime=0
 }
else{
  if(b1.x>262.5){
    b1.velocityX=-1
  }
  if(b1.x<137.5){
    b1.velocityX=1
  }
  b2.x=b1.x
}

if(no>2.9){
   box3.display();
   b3.lifetime=0
 }
else{
  if(b3.x>313.5){
    b3.velocityX=-1
  }
  if(b3.x<87.5) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
    b3.velocityX=1
  }
  b4.x=b3.x
}

if(no>3.9){
  box4.display();
  b4.lifetime=0
}
else{
 if(b4.x>338.5){
   b4.velocityX=-1
 }
 if(b4.x<62.5) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
   b4.velocityX=1
 }
 b5.x=b4.x
}

if(no>4.9){
  box5.display();
  b5.lifetime=0
}
else{
 if(b5.x>363.5){
   b5.velocityX=-1
 }
 if(b5.x<38.5) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
   b5.velocityX=1
 }
 b6.x=b5.x
}

if(no>5.9){
  box6.display();
  b6.lifetime=0
}
else{
 if(b6.x>338.5){
   b6.velocityX=-1
 }
 if(b6.x<62.5) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
   b6.velocityX=1
 }
 b6.x=b5.x
}
 drawSprites();
}
