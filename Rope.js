class Rope{
    constructor(bodyA, bodyB, xOffset, yOffset){
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    var options ={
        bodyA: bodyA,
        bodyB: bodyB,
        pointA: {
            x:this.xOffset, 
            y:this.yOffset
        }

    }
    this.rope = Matter.Constraint.create(options);
    World.add(world, this.rope);
 }
 display(){
     var point1 = this.rope.bodyA.position;
     var point2 = this.rope.bodyB.position;
     strokeWeight(3.5);
     var roofAttachPointX = point1.x + this.xOffset ;
     var roofAttachPointY = point1.y + this.yOffset;
     line(roofAttachPointX, roofAttachPointY, point2.x, point2.y);
 }
}
