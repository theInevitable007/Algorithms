var fixedRect,movingRect;



function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 100, 50);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;

  movingRect = createSprite(200,100,50,100);
  movingRect.shapeColor = "red";
  movingRect.debug = true;
}


function draw() {
  background("black"); 
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2){

      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "yellow";
  }
  else{
    
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "blue";
  }

  
  

  drawSprites();
}