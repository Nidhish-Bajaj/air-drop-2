const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground;
var ball
var wall1
var wall2
var wall3

function setup() {
 var canvas= createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;
 var ground_options={
   isStatic:true
 }
 var wall1_options={
  isStatic:true
}
var wall2_options={
  isStatic:true
}
var wall3_options={
  isStatic:true
}
 ground=Bodies.rectangle(200,390,200,20,ground_options);
 wall1=Bodies.rectangle(150,390,20,200,wall1_options);
 wall2=Bodies.rectangle(130,390,100,20,wall2_options);
 wall3=Bodies.rectangle(170,390,100,20,wall3_options);
 World.add(world,ground,wall1,wall2wall3);
 var ball_options={
//force of bobject while falling down(speed,gravity)
  restitution:1.0
  
}
ball=Bodies.rectangle(200,100,20,ball_options);
World.add(world,ball);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}