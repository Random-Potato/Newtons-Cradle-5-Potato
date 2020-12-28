
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1, ball2, ball3, ball4, ball5;
var post, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new ballMake(400,350,40);
	ball2 = new ballMake(400+40,350,40);
	ball3 = new ballMake(400+80,350,40);
	ball4 = new ballMake(400-40,350,40);
	ball5 = new ballMake(350-80,250,40);
	post = new roof(400,250,40*5,20);
	World.add(world, ball1);
	World.add(world, ball2);
	World.add(world, ball3);
	World.add(world, ball4);
	World.add(world, ball5);
	World.add(world, post)

	rope1 = new Rope(ball1.body,post.body,0,0);
	World.add(world, rope1);
	rope2 = new Rope(ball2.body,post.body,40,0);
	World.add(world, rope2);
	rope3 = new Rope(ball3.body,post.body,80,0);
	World.add(world, rope3);
	rope4 = new Rope(ball4.body,post.body,-40,0);
	World.add(world, rope4);
	rope5 = new Rope(ball5.body,post.body,-80,0);
	World.add(world, rope5);

	//rope2 = new Rope(ball2.body,post.body);
	//World.add(world, rope2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(21,213,223);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  post.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball5.body, ball5.body.position, {x:-40, y:-40})
	}
}



