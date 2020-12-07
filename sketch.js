var mr, fr;

function setup() {
  createCanvas(800,400);
  fr=createSprite(400, 200, 50, 50);
  fr.shapeColor="green";
  mr=createSprite(200,400,80,30);
  mr.shapeColor="green";
  mr.debug="true";
  fr.debug="true";
}

function draw() {
  background(255,255,255); 
  mr.x= World.mouseX;
  mr.y = World.mouseY; 
  console.log(mr.x-fr.x);

  if(mr.x-fr.x<fr.width/2  + mr.width/2 
    && fr.x-mr.x<fr.width/2 + mr.width/2
    && mr.y-fr.y<fr.heigth/2 + mr.heigth/2 
    && fr.y-mr.y< fr.heigth/2 + mr.heigth/2){
    mr.shapeColor="red";
    fr.shapeColor="red";
      }
      else{
        mr.shapeColor="green";
        fr.shapeColor="green";
      }
  drawSprites();
}