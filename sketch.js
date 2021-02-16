var maxDrops = 100
var drops = []
function preload(){
//   man = loadAnimation("walking_1.png","walking_2.png","walking_3.png","walking_4.png","walking_5.png","walking_6.png"
//    ,"walking_7.png" ,"walking_8.png") 

thunder1 = loadImage("1.png");
thunder2 = loadImage("2.png");
thunder3 = loadImage("3.png");
thunder4 = loadImage("4.png");

}

function setup(){
   var canvas = createCanvas(400,400);
    
   if(frameCount%150===0){

      for(var i=0; i<maxDrops; i++){
         drops.push(new Drops(random(0,400),random(0,400)))
      }
   }
 }

function draw(){
   background("black");
   drops.display();

   
var rand = Math.round(random(1,4))
console.log(rand)
if(frameCount%80===0){
   thunderCreatedFrame=frameCount;
   thunder=createSprite(random(10,370),random(10,30),10,10)
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
   thunder.scale=random(0.3,0.6)

}

}   

