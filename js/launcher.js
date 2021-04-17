class Launcher{
    constructor(body1,pointB){
        var options={
            bodyA:body1,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }

        this.launcher= Constraint.create(options);
        World.add(world,this.launcher);
        this.pointB=pointB;
    }

    display(){
     strokeWeight(5);
     if(this.launcher.bodyA)
     line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.pointB.x,this.pointB.y)
       }

    fly(){
        this.launcher.bodyA=null;
    }

    attach(body){
        this.launcher.bodyA=body;
    }
}