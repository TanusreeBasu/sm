
var car,wall;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(55,90)
	weight=random(400,1500)


	car=createSprite(50, 200, 50,50);   
  car.shapeColor="blue";
	car.velocityX = speed;

	


  
  	wall=createSprite(1200,200, 60, height/2)
  	wall.shapeColor="brown";
}


function draw() {
  background(255,255,255);  
  
  if(wall.x-car.x < wall.width/2+car.width/2){


    var deformation  = 0.5*weight*speed*speed/22500;
    if(deformation<100){
      car.shapeColor="green";
      car.velocityX=0;
    }
    if(deformation>100 && deformation<180){
      car.shapeColor="yellow";
      car.velocityX=0;
    }
    if(deformation>180){
      car.shapeColor="red";
      car.velocityX=0;
    }
    
    }
    drawSprites();
}