class Hero {  
    constructor(x, y,r){
        var options = {
            isStatic:true,
            density:1,
            frictionAir:1
            
        }
       this.x=x
       this.y=y;
       this.r=r;
       this.image=loadImage("Superhero-01.png");
       this.body=Bodies.circle(this.x,this.y,this.r,options);
       
       World.add(world,this.body);
       
        
   }
   display(){
    var pos=this.body.position;

    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.r+ 200,this.r+100);

   
    
   }
}