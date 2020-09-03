
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,ground1,paper1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  bin1=new Bin(435,555,20,100);
  bin2=new Bin(545,595,200,20);
  bin3=new Bin(638,555,20,100);

  ground1=new Ground(355,610,790,15);

  paper1=new Paper(100,595,15,15);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX+","+mouseY,mouseX,mouseY);
  bin1.display();
  bin2.display();
  bin3.display();
  ground1.display();
  paper1.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-24.5});
  }
}


