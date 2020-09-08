class Paper{
    constructor(x,y,width){
       var options={
           isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
       } 
       this.body=Bodies.circle(x,y,width,options);
       this.width=width;
       this.height=0;

       World.add(world,this.body);
    }
    display(){
        var pos= this.body.position;
        ellipseMode(RADIUS);
        circle(pos.x,pos.y,this.width,0);
    }
    
}