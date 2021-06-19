class Paper {
    
    constructor(x,y){
    
         var options={
             isStatic:false,
             restitution:0.8,
             friction:0.2,
             density:1.2
         }
    
         this.width=20;
         this.height=20;
         this.image = loadImage("paper.png");  
         this.body=Bodies.circle(x,y,20,options);
         World.add(world,this.body);
   }
    
        display(){
    
           var pos=this.body.position;
           var angle=this.body.angle;
           angleMode(RADIANS);
       
           push();
          // fill("blue");
          rotate(angle);
          translate(pos.x,pos.y,20);
          imageMode(CENTER);
          image(this.image,0,0,this.width,this.height);
          
           pop();
    
    
        }

}