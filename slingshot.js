class Slingshot {
    constructor(bodyA, pointB) {
        var options = {
          bodyA:bodyA,
          pointB:pointB,
          length:10,
          stiffness:0.04,
        }
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
    display(){
        if(this.sling.bodyA!=null){
            var pointA=this.sling.bodyA.position;
            var pointB=this.sling.pointB;
            stroke("white")
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
       
    }
     fly(){
        this.sling.bodyA=null
    }
}