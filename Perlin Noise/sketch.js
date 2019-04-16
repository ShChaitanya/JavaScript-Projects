let t = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  translate(width/2,height/2);
  stroke(255)
  noFill();
  beginShape();
  for(let angle = 0;angle<TWO_PI;angle+=0.01){
    r = 400/map(noise(t),0,1,100,150);
    let x = r * 16 * pow(sin(angle), 3);
    let y = -r * (13 * cos(angle)-5*cos(2 * angle)-2*cos(3*angle)-cos(4*angle));
    vertex(x,y);
    t+=0.01;
  }
  endShape(CLOSE);
  //noLoop()
}
