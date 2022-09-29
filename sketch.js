
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane, block1, block2; 
var rotator1, rotator2, rotator3;

var angle1 = 60;
var angle2 = 60;
var angle3 = 60;

var particle1, particle2, particle3, particle4, particle5;

function setup() {
	createCanvas(500 , 600);
	fill("blue")


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var option = {
		isStatic: true
	}

	var options = {
		restitution: 0.4,
		friction: 0.02
	}

	plane = Bodies.rectangle(275, 590, 550, 20, option)
	World.add(world, plane)

	block1 = Bodies.rectangle(100, 400, 150, 20, option)
	World.add(world, block1)

	block2 = Bodies.rectangle(400, 400, 150, 20, option)
	World.add(world, block2)

	rotator1 = Bodies.rectangle(275, 200, 150, 20, option)
	World.add(world, rotator1)

	rotator2 = Bodies.rectangle(275, 200, 150, 20, option)
	World.add(world, rotator2)

	rotator3 = Bodies.rectangle(275, 200, 150, 20, option)
	World.add(world, rotator3)

	particle1 = Bodies.circle(220, 10, 10, options)
	World.add(world, particle1)

	particle2 = Bodies.circle(220, 10, 10, options)
	World.add(world, particle2)

	particle3 = Bodies.circle(230, 10, 10, options)
	World.add(world, particle3)

	particle4 = Bodies.circle(240, 10, 10, options)
	World.add(world, particle4)

	particle5 = Bodies.circle(240, 10, 10, options)
	World.add(world, particle5)

    rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  background("lightgreen");
  Engine.update(engine);
  fill("brown");
  
  rect(plane.position.x, plane.position.y, 550, 20);
  rect(block1.position.x, block1.position.y, 150, 20);
  rect(block2.position.x, block2.position.y, 150, 20);

  ellipse(particle1.position.x, particle1.position.y, 10)
  ellipse(particle2.position.x, particle2.position.y, 10)
  ellipse(particle3.position.x, particle3.position.y, 10)
  ellipse(particle4.position.x, particle4.position.y, 10)
  ellipse(particle5.position.x, particle5.position.y, 10)

  Matter.Body.rotate(rotator1, angle1)
  Matter.Body.rotate(rotator2, angle1)
  Matter.Body.rotate(rotator3, angle1)

  push()
  translate(rotator1.position.x, rotator1.position.y)
  rotate(angle1)
  rect(0, 0, 150, 20);
  pop()

  push()
  translate(rotator2.position.x, rotator2.position.y)
  rotate(angle2)
  rect(0, 0, 150, 20);
  pop()

  push()
  translate(rotator3.position.x, rotator3.position.y)
  rotate(angle3)
  rect(0, 0, 150, 20);
  pop()

  angle1 += 2
  angle2 += 3
  angle3 += 4

  drawSprites();
 
}



