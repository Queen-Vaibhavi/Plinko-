class Particula{
    constructor(x,y){
     var options = {
         restitution : 0.9,
         friction : 1,
         density : 0.7

     }
     this.x = x;
     this.y = y;
     this.ra = 10;
     this.body = Bodies.circle(this.x,this.y,this.ra, options);
     World.add(world,this.body);
     this.color = color( random(0,255),random(0,255),random(0,255) );
    }
    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.ra,this.ra);
        pop();
        
    }
}
