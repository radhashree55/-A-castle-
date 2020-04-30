const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var base;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  base = new Pillar2(400, 580, 600, 20);
  h1 = new Pillar2(400,470,200,200);
  h2 = new Pillar(400,470,70,200);
  h3 = new Pillar(250,420,100,300);
  h4 = new Pillar(550,420,100,300);
  h5 = new Pillar(400,270,100,200);
  h6 = new Pillar2(250,250,150,50);
  h7 = new Pillar2(550,250,150,50);
  h8 = new Pillar2(400,150,150,50);
  h9 = new Pillar(400,75,100,100);
  h10 = new Pillar(250,175,100,100);
  h11 = new Pillar(550,175,100,100);
  h12 = new Pillar2(150,450,100,250);
  h13 = new Pillar2(650,450,100,250);
}

function draw() {
  background(0);
  Engine.update(engine); 

  base.display();
  h1.display();
  h2.display();
  h3.display();
  h4.display();
  h5.display();
  h6.display();
  h7.display();
  h8.display();
  h9.display();
  h10.display();
  h11.display();
  h12.display();
  h13.display()

  drawSprites();
}