let x= 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  stroke(255)
fill(255,255,0);
  circle(x,100,50,100);
  x=x+3;
  
  if(x>width){
    x=0;
  }
 
  
  stroke(0,0,250)
  fill(0,255,255)
  ellipse(200,100,100,200);
  

  
}