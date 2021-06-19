
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbin;
//var groungIMG,paperIMG;

function preload()
{
	
}

function setup() {
	createCanvas(600, 400);
  
	engine = Engine.create();
	world = engine.world;
     
    var options={
    isStatic:true,
 }
    ground=Bodies.rectangle(300,390,600,10,options);
    World.add(world,ground);
 

	//Create the Bodies Here.
 
  dustbin = new Dustbin(480,348,100,80);
  paper = new Paper(30,200);

 



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

   
    dustbin.display();
    paper.display();
       




  
  text(mouseX+" , "+mouseY,mouseX,mouseY);

}

function keyPressed() {
    if (keyCode === UP_ARROW){

       Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-60});
      console.log('keyPressed');
    }


}

