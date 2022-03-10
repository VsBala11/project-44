const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var Ob1Image,Ob1
var Ob2Image,Ob2
var Ob3Image,Ob3
var Ob4Image,Ob4
var Ob5Image,Ob5
var Ob6Image,Ob6
var Platform1Image,Platform1
var Platform2Image,Platform2
var catSitImage,catSit
var catStandImage,catStand
var catTailMoveImage,catTailMove
var cat

function preload(){

Ob1Image= loadImage("../assets/Ob1.png");
Ob2Image= loadImage("../assets/Ob2.png");
Ob3Image= loadImage("../assets/Ob3.png");
Ob4Image= loadImage("../assets/Ob4.png");
Ob5Image= loadImage("../assets/Ob5.png");
Ob6Image= loadImage("../assets/Ob6.png");
Platform1Image= loadImage("../assets/Platform_1.png");
Platform2Image= loadImage("../assets/Platform_2.png");
catSitImage= loadImage("../assets/Cat_Sit.png");
catStandImage= loadImage("../assets/Cat_Stand.png");
catTailMoveImage= loadAnimation("../assets/Cat_Fly1.png","../assets/Cat_Fly2.png");


catSitImage.playing=true;
catStandImage.playing=true;
catTailMoveImage.playing=true;


}


function setup() 
{
  
  createCanvas(500,700);
  

  

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  if(isMobile){
    canH=displayHeight;
    canW=displayWidth;
    createCanvas(displayWidth+80,displayHeight);
  }
  
  else{
    canW=windowWidth;
    canH=windowHeight;
    createCanvas(windowWidth,windowHeight);
  }

  engine = Engine.create();
  world = engine.world;

  cat = createSprite(170,620,100,100);
  cat.scale = 0.2;


    catSit.addImage("catSit",catSitImage);
    catStand.addImage("catStand",catStandImage);
    catTailMove.addAnimation("catTailMove",catTailMoveImage);
    cat.changeAnimation("catTailMove")
  

    
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  


}


function draw (){
    background("#130642")  

    Engine.update(engine);

    drawSprites();











}