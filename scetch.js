var obstacles=[];
var hole = 50;
var maxObstacles=5;
function setup(){
  createCanvas(800,600);
}
function draw(){
  background(0);
  shallIaddobstaces();
  for(var i =0 ; i<obstacles.length;i++){
    obstacles[i].display();
  }
  

}
  function go(){
    if(obstacles.length==0){
      obstacles.push(new obstacle(hole));
    }

  }


function shallIaddobstaces(){
  if(obstacles.length==0){
    obstacles.push(new obstacle(hole));
  }
  else if(obstacles.length>0&&obstacles.length<maxObstacles){
    if(obstacles[obstacles.length-1].x<width-160){
      obstacles.push(new obstacle(hole));
    }
  }
  if(obstacles[0].x<0){
    obstacles.shift();
  }
}
