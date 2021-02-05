class Monster{
 constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0.1,
            friction:1.0,
            density:20
        }
        this.body=Bodies.circle(x,y,r,options);
       this.x=x;
       this.y=y;
       this.r=r
       this.image=loadImage("Monster-01.png");
       World.add(world,this.body);
    }
   
display(){
       var pos=this.body.position;

    imageMode(CENTER);
    image(this.image,pos.x,pos.y,this.r+ 200,this.r+100);

   
}
}
