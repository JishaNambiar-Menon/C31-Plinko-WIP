const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var ball1, block,rect
var plinkos = []
var divisions=[]
var particles=[]
var divisionHeight=300

function setup() {
  createCanvas(800,windowHeight);
  engine = Engine.create();
  world = engine.world;
  //ball1 = new Circle(400,0)


  block1 = new Block(50,100)
  block2 = new Block(150,100)
  block3 = new Block(250,100);
  block4 = new Block(350,100)
  block5 = new Block(450,100)
  block6 = new Block(550,100)
  block7 = new Block(650,100)
  block8 = new Block(750,100)
  
  block8_5= new Block(0,200)
  block9 = new Block(100,200)
  block10 = new Block(200,200)
  block11 = new Block(300,200)
  block12 = new Block(400,200)
  block13 = new Block(500,200)
  block14 = new Block(600,200)
  block15 = new Block(700,200)
  block16 = new Block(800,200)

  
  block17 = new Block(50,300)
  block18 = new Block(150,300)
  block19 = new Block(250,300);
  block20 = new Block(350,300)
  block21= new Block(450,300)
  block22 = new Block(550,300)
  block23 = new Block(650,300)
  block24= new Block(750,300)

  block25= new Block(0,400)
  block26= new Block(100,400)
  block27 = new Block(200,400)
  block28 = new Block(300,400)
  block29 = new Block(400,400)
  block30 = new Block(500,400)
  block31 = new Block(600,400)
  block32 = new Block(700,400)
  block33 = new Block(800,400)

  rectangle =  new Roct(50,550);
  next = new Roct(150,550)
  next1 = new Roct(250,550)
  next2 = new Roct(350,550)
  next3 = new Roct(450,550)
  next4 = new Roct(550,550)
  next5 = new Roct(650,550)
  next6 = new Roct(750,550)

  gro = new Ground(400,630)
}

function draw() {
  background(0); 
  Engine.update(engine);
  
  if(frameCount%60===0){
    particles.push(new Circle(random(100,700),10,10))
  }
  
  for (var j= 0;j<particles.length;j++){
    particles[j].display();
  }

  rectangle.display()  
  next.display()
  next1.display()
  next2.display()
  next3.display()
  next4.display()
  next5.display()
  next6.display()
  gro.display()

  //fill("pink")
  //ball1.display()
  
  fill("white")
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()

  fill("green");
  block8_5.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()

  fill("orange")
  block17.display()
  block18.display()
  block19.display()
  block20.display()
  block21.display()
  block22.display()
  block23.display()
  block24.display()

  fill("lightblue")
  block25.display()
  block26.display()
  block27.display()
  block28.display()
  block29.display()
  block30.display()
  block31.display()
  block32.display()
  block33.display()

  
  
  
  
  drawSprites();
  
}
