const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var ground;
var divisions = [];
var plinkos = [];
var particles = [];
var s1 = [];
var s2 = [];
var s3 = [];
var s4 = [];
var p1;
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height-10,width,10);
  wall1 = new Ground(10,700,20,1400)
  wall2 = new Ground(790,700,20,1400)
  
  for(a=0; a <=width; a=a+80){
    divisions.push(new Particle(a,height,10,divisionHeight )) 
   }
 
  for(b = 40; b<=width; b=b+70){
    s1.push(new Particle(b,0+70,10))
  }

  for(d = d+75; d<= width; d=d+70){
    s2.push(new Particle(d,0+140,10))
  }
  
  
 for(f=40;f<=width;f =f+70){
   s3.push(new Particle(f,0+210,10))
 }

 for(h = 75; h <= width; h = h+70){
   s4.push(new Particle(h,0+280,10))
 }

 Engine.run(engine)
}

function draw() {
  background("#ff6600");  
  Engine.update(engine)
  ground.display();
  wall1.display();
  wall2.display();
 
  if(frameCount%60 === 0){
    plinkos.push(new plinkos((random(100,700)),10,70))
   }

   for(var j=0; j<plinkos.length; j++){
    plinkos[j].display();
  }
  for(var i=0; i < divisions.length; i++){
    divisions[i].display();
  }
  for(var c=0; c<divisions.length; c++){
    divisions[c].display();
  }
  for(e = 0; e < divisions.length; e++){
    s2[e].display();
  }
  for(var g=0; g < divisions.length; g++){
    s3[g].display();
  }
  for(var j=0; j < divisions.length; j++){
    s4[j].display();
  }
}