class SLING {
    constructor(body,point){
        this.point=point
        var option={
            bodyA:body,
            pointB:point,
            stiffness:0.01,
            length:10

        }
     this.sling=Constraint.create(option)
     World.add(world,this.sling)

    }
    display(){
        if(this.sling.bodyA!==null)
     line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.point.x,this.point.y)

    }
    fly(){
        this.sling.bodyA=null;
    }
}