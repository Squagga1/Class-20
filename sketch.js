function setup() {
  createCanvas(800,400);
  fixed=createSprite(400, 200, 50, 100);
  moving=createSprite(200,200,100,50)
}

function draw() {
  background("pink"); 
  moving.x=mouseX 
  moving.y=mouseY
  drawSprites();
}