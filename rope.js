class Rope {
    constructor(body1,body2,offsetX,offsetY) 
    {
        this.offsetX = offsetX
        this.offsetY = offsetY
var options = {
bodyA:body1,
bodyB:body2,
length:4,
stiffness : 0.4


}
console.log(Constrained)
this.rope=Constrained.create(options)
World.add(world,this.rope)

 

    }
display(){
var point_a  = this.rope.body1.position
var point_b = this.rope.body2.position
line(point_a.x,point_a.y,point_b.x,point_b.y)
 
}




}