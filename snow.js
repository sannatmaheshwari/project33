class Snow{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.snow = Bodies.circle(x,y,40,options)
        this.radius = 40
        World.add(world,this.snow)
        this.snowImage = loadImage("snow4.webp")
    }
update(){
    if(this.snow.position.y>height){
        Matter.Body.setPosition(this.snow, {x:random(0,1200), y:random(0,300)})
    }
}
    display(){
       imageMode(CENTER)
       image(this.snowImage,this.snow.position.x,this.snow.position.y,this.radius,this.radius)
    }
}