class box{
    constructor(x, y, width, height) { 
    var options = { 'restitution':1 }
    this.body = Bodies.rectangle(200, 200, 100, 100, options); 
    this.width = width; this.height = height; 
    World.add(world, this.body);
 }
 display (){
     var pos = this.body.position
     rectMode(CENTER);
     fill(255);
     rect(pos.x, pos.y, this.width, this.height);
    }
}
