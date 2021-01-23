
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var  bobObject1, bobObject2, bobObject3, bobObject4, bobObject5,roof;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1500);


	engine = Engine.create();
	world = engine.world;

	bobObject1= new Bob(200,1300,100);
	bobObject2= new Bob(400,1300,100);
	bobObject3= new Bob(600,1300,100);
	bobObject4= new Bob(800,1300,100);
	bobObject5= new Bob(1000,1300,100);
	roof= new Roof(650,100,1200,100)
	rope1= new Rope(bobObject1.body,roof.body,-230*2,0);
	rope2= new Rope(bobObject2.body,roof.body,-130*2,0);
	rope3= new Rope(bobObject3.body,roof.body,-30*2,0);
	rope4= new Rope(bobObject4.body,roof.body,70*2,0);
	rope5= new Rope(bobObject5.body,roof.body,170*2,0);
	Engine.run(engine); 
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display(); 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) {                           
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position, {x:-50,y:45});

	}

}

