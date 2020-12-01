const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var divisionHeight = 300;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  //createSprite(400, 200, 50, 50);

  ground1 = new Ground(240, 785, 481, 20);
  

}

function draw() {
  background(2,2,2);
  

  Engine.update(engine);

  ground1.display();

  for(var i = 0; i <= width; i = i + 80)
  {
    divisions.push(new Divisions(i, height-divisionHeight/2, 10, divisionHeight));
  }

  for(var i = 0; i < divisions.length; i = i + 1)
  {
    divisions[i].display();
  }
  
  for( var j = 40; j <= 480; j = j + 100)
  {
    plinkos.push(new Plinko(j, 75));
  } 

  for(var j = 0; j < plinkos.length; j = j + 1)
  {
   plinkos[j].display();
  }

  for( var j = 88; j <= width - 10; j = j + 100)
  {
    plinkos.push(new Plinko(j, 175));
  }
 
  for(var j = 0; j < plinkos.length; j = j + 1)
  {
   plinkos[j].display();
  }

 for( var j = 40; j <= 480; j = j + 100)
 {
   plinkos.push(new Plinko(j, 265));
 } 

 for(var j = 0; j < plinkos.length; j = j + 1)
 {
  plinkos[j].display();
 }

 for( var j = 88; j <= width - 10; j = j + 100)
 {
   plinkos.push(new Plinko(j, 350));
 }

 for(var j = 0; j < plinkos.length; j = j + 1)
 {
  plinkos[j].display();
 }

 if(frameCount % 50 === 0)
 {
   particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10));
 }

 for(var k = 0; k < particles.length; k = k + 1)
 {
   particles[k].display();
 }


  drawSprites();
}