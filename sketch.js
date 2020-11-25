const Bodies=Matter.Bodies
const World=Matter.World
const Engine=Matter.Engine
const Constraint=Matter.Constraint

var engine, world;

function setup() {
  createCanvas(1200,750);
  engine=Engine.create();
  world=engine.world;
  platform1= new Ground(width/2,height-20,width,20)
  platform2=new Ground(450,500,350,10)
  platform3=new Ground(900,350,350,10)
  box1=new Box(450,475);
  box2=new Box (500,475);
  box3=new Box(400,475);
  box4=new Box(475,425);
  box5=new Box(425,425);
  box6=new Box(450,375)
  box7= new Box(900,320);
  box8=new Box(950,320);
  box9=new Box(850,320);
  box10=new Box(925,270);
  box11=new Box(875,270);
  box12=new Box(900,220);
  ball1=new Ball(100,100);
  sling1=new Slingshot(ball1.body,{x:105,y:130})
  console.log(ball1);
  Matter.Body.setMass(ball1.body,2);
  //platform2
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  platform1.display();
  platform2.display();
  platform3.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  ball1.display();
  sling1.display();

}
function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY
  })
}
function mouseReleased(){
  sling1.fly();
}
