var paper, dustbin,ground;
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

	//Create the Bodies Here.
    dustbin1=new Dustbin(200,640,200,20);
	dustbin2=new Dustbin(300,640,20,100);
	dustbin3=new Dustbin(400,640,20,100);
    ground = new Ground(600,650,800,20);
	paper=new Paper(600,640,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  ground.display();  
  drawSprites();
 
}



