const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img,polygon;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground();
  stand1 = new Stand(640,250,220,20);
  stand2 = new Stand(330,450,250,20);
 
  //level one
  block1 = new Block(240,425,30,30);
  console.log(block1);
  block2 = new Block2(270,425,30,30);
  block3 = new Block(300,425,30,30);
  block4 = new Block2(330,425,30,30);
  block5 = new Block(360,425,30,30);
  block6 = new Block2(390,425,30,30);
  block7 = new Block(420,425,30,30);
  //level two
  block8 = new Block(270,395,30,30);
  block9 = new Block2(300,395,30,30);
  block10 = new Block(330,395,30,30);
  block11 = new Block2(360,395,30,30);
  block12 = new Block(390,395,30,30);
  //level three
  block13 = new Block2(300,365,30,30);
  block14 = new Block(330,365,30,30);
  block15 = new Block2(360,365,30,30);
  //top
  block16 = new Block(330,335,30,30);

  block17 = new Block2(580,225,30,30);
  block18 = new Block(610,225,30,30);
  block19 = new Block2(640,225,30,30);
  block20 = new Block(670,225,30,30);
  block21 = new Block2(700,225,30,30);

  block22 = new Block2(610,195,30,30);
  block23 = new Block(640,195,30,30);
  block24 = new Block2(670,195,30,30);

  block25 = new Block2(640,165,30,30);




   polygon=Bodies.circle(50,200,20);
   World.add(world,polygon);

   slingShot = new Slingshot(this.polygon,{x:150,y:200})

  
   Engine.run(engine);

}

function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();

  fill("skyblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

 fill("pink");
 block22.display();
 block23.display();
 block24.display();
 
 fill("grey");
 block25.display();

 slingShot.display();




  fill("gold")
  imageMode(CENTER)
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


 function mouseReleased() {
   slingShot.fly();
 }
