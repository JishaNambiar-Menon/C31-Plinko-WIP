class Ground{
    constructor(x,y){
        var options={
            isStatic:true
        }
        
        this.width=800;
        this.height=20;
        this.x=x
        this.y=y
        this.body = Bodies.rectangle(this.x,this.y,800,20,options);
        World.add(world,this.body);
        
    }

    display(){
        
        rectMode(CENTER);
        fill("white")
        var pos=this.body.position;
        rect(pos.x,pos.y,800,20)
        
    }
}