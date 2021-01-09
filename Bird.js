class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg = loadImage("sprites/smoke.png")
    this.trag = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){
    
      var position = [this.body.position.x,this.body.position.y]
    this.trag.push(position)
    }
    
    for(var i = 0; i<this.trag.length; i++){
      image(this.smokeimg,this.trag[i][0],this.trag[i][1])

    }
  }
}
