class obstacle{
  /*   x y
      static function move
  */
  constructor(hole){
    this.x=width;
    this.hole=hole;
    this.y=0;
    this.holeStart=Math.floor((Math.random() * (height-height/5)) + height/5);
  }



  display(){
    fill(126);
    rect(this.x,this.y,20,this.holeStart);
    rect(this.x,this.holeStart+this.hole,20,height);
    this.x--;
  }
  


}
