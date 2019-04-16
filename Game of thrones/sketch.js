let x;
summ = 0;
let y;
let y_copy;
let i = 0;
let j = 0;
let keySorted;
let keySorted2;
let done
let x_sec = 0;
let y_min = 0;
let z_hours = 0;
function preload(){
  x = loadJSON("newepisode.json");
  y = loadJSON("char.json");
  y_copy = loadJSON("char.json");
}

function setup() {
  createCanvas(windowWidth, (15*200)+50);
  console.log(x.episodes.length);
  firstcall();
  console.log(y_copy);
}

function draw() {
  for(let o=0;o<5;o++){
    background(255);
  let start = x.episodes[i].scenes[j].sceneStart;
  let end = x.episodes[i].scenes[j].sceneEnd;
  let timedif = end - start;
  //summ = summ+timedif;
  timing(timedif);
  for(let k=0;k<x.episodes[i].scenes[j].characters.length;k++){
    y[x.episodes[i].scenes[j].characters[k].name]=y[x.episodes[i].scenes[j].characters[k].name]+timedif;
  }
  keysSorted = Object.keys(y).sort(function(a,b){return y[b]-y[a]})
  show();
  j++;
  if(j>=x.episodes[i].scenes.length-1){
    j=0;
    i++;
    if(i>=67){
      show2();
      noLoop();
      i=0;
     }
  }
  }
}


function timing(t_d){
  let hours = "";
  let minute = "";
  let second = "";
  x_sec = x_sec + t_d;
  if(x_sec>=59){ 
    y_min = y_min + int(x_sec/59) ;
    x_sec = x_sec%59;
    if(y_min>=59){
      z_hours = z_hours+int(y_min/59) ;
      y_min = y_min%59;
    }
  }
  if(x_sec<10){
    second = "0"+x_sec.toString();
  }else{
    second = x_sec.toString();
  }
  if(y_min<10){
    minute = "0"+y_min.toString();
  }else{
    minute = y_min.toString();
  }
  if(z_hours<10){
    hours = "0"+z_hours.toString();
  }else{
    hours = z_hours.toString();
  }
  noStroke();
  textSize(12);
  textAlign(CENTER);
  fill(0);
  text(hours+":"+minute+":"+second,width/2,15);
}

function show(){
  let c_nt = 30;
  for(let n=0;n<200;n++){
    let op = keysSorted[n];
    let number = y[op];
    number = map(number,0,27107,0,width-250);
    stroke(163, 202, 255);
    strokeWeight(12);
    line(0,c_nt,number,c_nt);
    noStroke();
    textSize(12);
    //textAlign(CENTER);
    fill(0);
    text(op,number+60,c_nt+4);
    c_nt=c_nt+15;
  }
}

function show2(){
  console.log("fasdfas")
  let c_nt = 30;
  for(let n=0;n<200;n++){
    let op = keySorted2[n];
    let number = y_copy[op];
    number = map(number,0,27107,0,width-250);
    stroke(163, 202, 255);
    strokeWeight(12);
    line(0,c_nt,number,c_nt);
    noStroke();
    textSize(12);
    //textAlign(CENTER);
    fill(0);
    text(op,number+60,c_nt+4);
    c_nt=c_nt+15;
  }
}


function firstcall(){
  for(let i=0;i<x.episodes.length;i++){
    for(let j=0;j<x.episodes[i].scenes.length;j++){
      let start = x.episodes[i].scenes[j].sceneStart;
      let end = x.episodes[i].scenes[j].sceneEnd;
      let timedif = end - start;
      for(let k=0;k<x.episodes[i].scenes[j].characters.length;k++){
        y_copy[x.episodes[i].scenes[j].characters[k].name]=y_copy[x.episodes[i].scenes[j].characters[k].name]+timedif;
       //console.log("done");
      }
    }
  }
  //var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
  keySorted2 = Object.keys(y_copy).sort(function(a,b){return y_copy[b]-y_copy[a]});
}
