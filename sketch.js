
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,ground1,paper1;
var dustbinImage

function preload(){
  dustbinImage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  bin1=new Bin(435,555,20,100);
  bin2=new Bin(545,595,200,20);
  bin3=new Bin(638,555,20,100);

  ground1=new Ground(400,610,800,15);

  paper1=new Paper(100,550,70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  text(mouseX+","+mouseY,mouseX,mouseY);
  bin1.display();
  bin2.display();
  bin3.display();
  ground1.display();
  paper1.display();
  imageMode(CENTER)
  image(dustbinImage,530,530,270,150);
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:250,y:-800});
  }
}


