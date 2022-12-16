// Code from  https://editor.p5js.org/rhymeandreason/sketches/NI74eacDH

function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 100);
  frameRate(2); //how many times it draws per second
  background(220);
}

function draw() {
  flower(random(0,400),random(0,400));
}

function flower(x, y){
  
  var size = 20;
  var stemHeight = 100;
  
  //draw the stem
  stroke(45,90,90);
  fill(45,90,90);
  strokeWeight(3);
  line(x,y, x, y+stemHeight);
  
  var leafSize = 30;
  var leafWidth = leafSize/2
  //draw leaves
  noStroke();
  ellipse(x+leafWidth,y+stemHeight/2, leafSize, leafWidth);
  ellipse(x-leafWidth,y+stemHeight/2, leafSize, leafWidth);
  
  //draw the petals
  fill(10,100,100);
  var petalSize = 25;
  for (var theta=0; theta<TWO_PI; theta+=PI/3){
    var petalx = size*cos(theta) + x;
    var petaly = size*sin(theta) + y;
    ellipse(petalx, petaly, petalSize, petalSize);
  }
  //draw the flower center
  fill(17,100,100);
  ellipse(x, y, petalSize, petalSize);
  
  
  
}