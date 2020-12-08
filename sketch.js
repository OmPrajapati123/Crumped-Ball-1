
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper , dustbin

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  

  dustbinSprite=createSprite(width/2, 80, 10,10);
  dustbinSprite.addImage(packageIMG)
	dustbinSprite.scale=0.2



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  paper.display()
  dustbin.display()
  
  drawSprites();
 
}


function keyPressed(){

  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(paperObject.body , paperObject.body.position,{x:85,y:-85})
  }

}


