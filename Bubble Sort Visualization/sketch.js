let n = 200;
let lines = [];
let i = 0;
let j = 0; 
function setup() {
  createCanvas(400, 400);
    lines = new Array(n);
    for(let i=0;i<n;i++){
        lines[i]=random(height);
    }
}

function draw() {
    //frameRate();
  background(100);
     if (i < lines.length) {
    for (let j = 0; j < lines.length - i - 1; j++) {
      let a = lines[j];
      let b = lines[j + 1];
      if (a > b) {
        swap(lines, j, j + 1);
      }
    }
  } else {
    console.log("finished");
    noLoop();
  }
  i++;
    let x=0;
    for (let i = 0; i < lines.length; i++) {
    stroke(255);
    strokeWeight(3);
    line(x, height, x, height - lines[i]);
    x=x+2;
  }
}


function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
