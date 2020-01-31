

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(255);
  doge = loadImage("doge.png");
  imageMode:(CENTER);
}

function draw() {

  for(let i=0;i<500;i++){
    image(doge,random(width),random(height),200,200);
}
}
