class Stone{
	constructor(x,y)
	{
		var options={
			restitution :0,
            friction :1,
            density: 1.2
			}
		this.x=x;
		this.y=y;	
			
		this.image=loadImage("images/stone.png")
		this.body=Bodies.rectangle(this.x, this.y,30,30, options)
		World.add(world, this.body);
	}

	display()
	{
		var stonePos=this.body.position;	
		push()
		translate(stonePos.x, stonePos.y);
		rotate(this.body.angle)
		imageMode(CENTER);
		image(this.image, 0,0,30,30)
		pop()
 }
}