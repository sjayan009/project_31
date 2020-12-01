class Plinko
{
   constructor(x, y, radius)
   {
       var options = {

           isStatic: true       
        
       }

       this.body = Bodies.circle(x,y , 10, options);
       this.x = x;
       this.y = y;
       this.radius = radius;

       World.add(world, this.body);
   }

   display(){
    var pos =this.body.position;
    //var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    //rotate(angle);
    //rectMode(CENTER);
    //stroke(20,180,20);
    fill("white");
    ellipse(0, 0, this.radius);
    pop();
  }
};