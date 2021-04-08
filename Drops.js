class Drops
{
  constructor(x,y){
   this.body = Bodies.circle(x,y);
   friction:0.1;


   var maxDrops = 100;
  for(var i = 0;  i<maxDrops; i++){
    Drops.push(new createDrop(random(0,400), random(0,400)));
  }

  if(this.rain.position.y > height){

    Matter.body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
  }
  }

  
}