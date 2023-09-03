var box;
var e1,e2;
var edges;
var lives=3;
function setup() {
  createCanvas(800,400);
  edges=createEdgeSprites();
  box = createSprite(400,200,30,30);
  e1=createSprite(150,100,35,35);
  e2=createSprite(700,300,35,35);
  e1.shapeColor='purple';
  e2.shapeColor='purple';
  e1.setVelocity(6,3)
  e2.setVelocity(-4,5)



}

function draw() 
{
  background('red');
  textSize(30)
  text('lives:'+lives,400,60)

  e1.bounceOff(edges);
  e2.bounceOff(edges);



  if(keyDown('right')){
    box.x=box.x+5
   
  }

  if(keyDown('left')){
    box.x=box.x-5
   
  }

  if(keyDown('up')){
    box.y=box.y-5
   
  }

  if(keyDown('down')){
    box.y=box.y+5
   
  }

  if(e1.isTouching(box) || e2.isTouching(box)){

    box.x=400;
    box.y=200;
    e1.x=100;
    e1.y=100;
    e2.x=300;
    e2.y=300;
    if(lives>0){
      lives=lives-1;
    }
    



  }
  drawSprites();



  }


