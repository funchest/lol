class obstacle{
  /*   x y
      static function move
  */
  constructor(hole){
    this.margin = height/10;
    this.x=width;
    this.width = 50;
    this.hole=hole;
    this.y=0;
    this.holeStart=Math.floor(Math.random() * (height-hole-this.margin*2) + this.margin);
  }

  display(){
    fill(126);
    rect(this.x,this.y,this.width,this.holeStart);
    rect(this.x,this.holeStart+this.hole,this.width,height);
    this.x -= 5;
  }
}
