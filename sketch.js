const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1, box2, box3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height, width, 10);
	groundSprite.shapeColor = "white";


	box1 = new Box(400, 690, 80, 10);
	box2 = new Box(355, 655, 10, 80);
	box3 = new Box(450, 655, 10, 80);

	

	packageBody = Bodies.circle(width/2, 200, 5 , {isStatic:true, restitution:1});
	World.add(world, packageBody);
	

	ground = Bodies.rectangle(width/2, 680, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y
  groundSprite.x = ground.position.x
  groundSprite.y = ground.position.y
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
}

function keyPressed() {
	
 if (keyCode === DOWN_ARROW) {
	console.log("Hello");
	Matter.Body.setStatic(packageBody, false);
}
}



