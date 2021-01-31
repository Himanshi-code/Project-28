
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	
	

	mango1=new mango(1100,100,30);
	mango2=new mango(900,150,30)
	mango3=new mango(900,200,30)
	mango4=new mango(1200,150,30)
	mango5=new mango(1020,200,30)
	treeObj=new tree(1050,580);
	stoneObj=new Stone(230,390)
	slingshot=new Slingshot(stoneObj.body,{x:230,y:390});
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  
  slingshot.display();
  treeObj.display();
  mango1.display();
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  groundObject.display();
  stoneObj.display();

  detectCollision(stoneObj,mango1)
  detectCollision(stoneObj,mango2)
  detectCollision(stoneObj,mango3)
  detectCollision(stoneObj,mango4)
  detectCollision(stoneObj,mango5)


}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function detectCollision(lstone,lmango){
mangobodyposition=lmango.body.position
stonebodyposition=lstone.body.position

var distance= dist(stonebodyposition.x,stonebodyposition.y,mangobodyposition.x,mangobodyposition.y)
if(distance<=lmango.r+15){
	Matter.Body.setStatic(lmango.body,false)
}

}

function keyPressed(){
	if(keyCode===32){
		slingshot.attach(stoneObj.body);
	}
}