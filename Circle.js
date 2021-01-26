class Circle{
    constructor(x,y,r){
        var options={
            
        }
        
        //this.x=x
        //this.y=y
        
        this.body= Bodies.circle(x,y,10,options);
        this.r = 10;
        this.color = color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body)
        
    }
    display(){
        var pos=this.body.position;
        var angle =  this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        fill(this.color);
       ellipseMode(RADIUS)
        ellipse(0,0,this.r,this.r);
        pop()
        
       
    }
    
}