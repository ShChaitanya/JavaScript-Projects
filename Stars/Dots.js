class Dots{
  constructor(){
    this.x = random(50,350);
    this.y = random(50,350);
    this.r = random(0,10);
    this.s = random(1,30);
    this.angle = random(0,TWO_PI);
    this.w = random(1,3)
    this.bright = random(100,256)
  }
  draw(){
    stroke(random(50,255));
    strokeWeight(this.w);
    this.r = this.s * noise(this.angle);
    let x1 = this.r * sin(this.angle*TWO_PI);
    let y1 = this.r * cos(this.angle*TWO_PI);
    point(this.x+x1,this.y+y1);
    this.angle = this.angle + 0.01
  }
}
