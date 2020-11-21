
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  roof = new Roof(350,200,300,10) ;
  
    bob  = new Bob(450,500,50) ;
    bob2 = new Bob(400,500,50) ;
    bob3 = new Bob(350,500,50) ;
    bob4 = new Bob(300,500,50) ;
    bob5 = new Bob(250,500,50) ; 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display()
  bob.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  
  drawSprites();
 
}



