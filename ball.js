class Ball{
    constructor(x,y,){
        this.body=Bodies.circle(x,y,20)
        World.add(world,this.body);
        this.radius=20
    }
    display(){
        push()
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y, this.radius,this.raidus);
        pop()
    }
}