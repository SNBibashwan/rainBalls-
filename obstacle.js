class Obstacle{
    constructor(x,y,w,h)
    {

        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true});
        this.w = w;
        this.h = h;
        World.add(world,this.body);
    }

    display()
    {
        var pos = this.body.position;
        push();
        noStroke();
        fill("wheat");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h);
        pop(); 
    }
};