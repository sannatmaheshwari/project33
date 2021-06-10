 const Engine = Matter.Engine
 const World = Matter.World
 const Bodies = Matter.Bodies
var snow1 = []

 function preload(){
bg = loadImage("snow3.jpg")
 }
 
 function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(1200,600);

  if(frameCount%100===0){
    for(var i = 0; i<100;i++){
      snow1.push(new Snow(random(0,1200),random(0,300)))
    }
  }
 
}

function draw() {
  Engine.update(engine);
  background(bg);  

  for(var i=0;i<100;i++){
    snow1[i].display()
    snow1[i].update()
  }
}