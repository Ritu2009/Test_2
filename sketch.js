var box; //declare variable 

function setup() { //you create everything here 
  createCanvas(400, 400); //Canvas area is where you can see your output, its like a drawing area

  box= createSprite(200,200,40,40);
}

function draw() {
  background(220);
if(keyDown('left')){
  box.x=box.x-3;
}
  if(keyDown('right')){
    box.x=box.x+3;
  }
if(keyDown('up')){
  box.y=box.y-3;
}
if(keyDown('down')){
  box.y=box.y+3;
}
  drawSprites();
}