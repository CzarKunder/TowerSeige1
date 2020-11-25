class Box{
    constructor(x,y){
        var options={
          density:0.2,
          restitution:1.0,
          friction:0.8
        }
      this.width=50;
      this.height=50;
      this.body=Bodies.rectangle(x,y,50,50,options);
      World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
        var pos=this.body.position
        rect(pos.x,pos.y,50,50,);
    }
}
