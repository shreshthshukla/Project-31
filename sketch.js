const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var thunderCreatedFrame=0;
var thunder;
var maxDrops = 100
var drops = []
var man, manI;
var clouds;
var circle;
function preload(){
  manI = loadAnimation("walking_8.png","walking_7.png","walking_6.png","walking_5.png","walking_4.png","walking_3.png"
   ,"walking_2.png" ,"walking_1.png") 

thunder1 = loadImage("1.png");
thunder2 = loadImage("2.png");
thunder3 = loadImage("3.png");
thunder4 = loadImage("4.png");

clouds = loadImage("Cloud.png")

}

function setup(){
   engine = Engine.create();
   world = engine.world;
   var canvas = createCanvas(windowWidth,windowHeight);

   var options = {
      isStatic: true,
  }
  man = createSprite(width/2,height/2+120);
  man.addAnimation("moving",manI);
  man.scale="0.5"

  cloud = createSprite(width/1.7,height/14,20,20);
  cloud.addImage(clouds);
  cloud.scale="3";

  cloud2 = createSprite(width/3,height/14,20,20);
  cloud2.addImage(clouds);
  cloud2.scale="3";

  cloud3 = createSprite(width/12,height/14,20,20);
  cloud3.addImage(clouds);
  cloud3.scale="3";

  cloud4 = createSprite(width/1.2,height/14,20,20);
  cloud4.addImage(clouds);
  cloud4.scale="3";

  if(frameCount%150===0){

      for(var i=0; i<maxDrops; i++){
         drops.push(new Drops(random(0,width-50),random(0,200)))
      }
   }

   var options = {
      isStatic: true,
  }
  circles = Bodies.circle(width/2,height/2,40,options);
  World.add(world,circles)

 }
 

function draw(){
   Engine.update(engine);
   background("black");

   var rand = Math.round(random(1,4))
//console.log(rand)
if(frameCount%80===0){
   thunderCreatedFrame=frameCount;
   thunder=createSprite(random(50,width-50),random(220,250),10,10)
   switch(rand){
      case 1: thunder.addImage(thunder1);
      break;
      case 2: thunder.addImage(thunder2);
      break;
      case 3: thunder.addImage(thunder3);
      break;
      case 4: thunder.addImage(thunder4);
      default: break;   
   }
   thunder.scale=random(0.3,0.5)

}

if(thunderCreatedFrame + 10 ===frameCount && thunder){
   thunder.destroy();
}
for(var i = 0; i<maxDrops; i++){
   drops[i].showDrops();
   drops[i].updateY()
   
}

// circles.display();

drawSprites();
text(mouseX+","+mouseY,200,200)
}   

