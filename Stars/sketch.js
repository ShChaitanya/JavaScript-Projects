let n = 1500;
let dots = [];
function setup() {
  createCanvas(400, 400);
  slider = createSlider(1, 1500,10);
  slider.position(10, 400);
  slider.style('width', '350px');
  for(let i = 0;i<n;i++){
    let newDots = new Dots();
    dots.push(newDots);
  }
}

function draw() {
  n  = slider.value()
  background(0);
  for(let i=0;i<n;i++){
    let d = dots[i];
    d.draw();
  }
}
