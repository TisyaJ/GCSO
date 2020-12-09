var car, wall;
var speed, weight;
var Deformation;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
  car.velocityX = speed;
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor = "grey";
 
}

function draw() {
  background(20,40,60);  

  if (wall.x-car.x < car.width/2 + wall.width/2)  {
      
      car.velocityX=0;
      Deformation = 0.5*weight*speed*speed/22509;

      if (Deformation<100) 
      {
        car.shapeColor = "green";
      } 
      else if (Deformation>100 && Deformation<180) 
      {
        car.shapeColor = "yellow";
      } 
      else if (Deformation>180)
      {
        car.shapeColor = "red";
      }
    }

  drawSprites();
}