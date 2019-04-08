let width = 640;
let height = 480;
let bird = new Bird(width, height);
let endGame = false;

var obstacles=[];
var hole = 200;
var maxObstacles=5;

function setup(){
    createCanvas(width, height);
}

function draw(){
    if (bird.checkColl(obstacles)) {
        endGame = true;
        background(200, 20, 20);
        noLoop();
        return;
    }

    background(0);
    shallIaddobstaces();
    for(var i =0 ; i<obstacles.length;i++){
        obstacles[i].display();
    }

    bird.display();
}

function keyPressed() {
    if (keyCode === ENTER) {
        bird.jump();
    } else if (keyCode === BACKSPACE) {
        if (endGame) {
            endGame = false;
            bird = new Bird(width, height);
            obstacles = [];
            loop();
        }
    }
}

function shallIaddobstaces(){
    if (obstacles.length == 0) {
        obstacles.push(new obstacle(hole));
    } else if (obstacles.length > 0 && obstacles.length < maxObstacles) {
        if ( obstacles[obstacles.length-1].x < width-250) {
            obstacles.push(new obstacle(hole));
        }
    }
    if (obstacles[0].x < 0) {
        obstacles.shift();
    }
}
