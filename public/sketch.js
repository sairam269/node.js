var socket;

function setup(){
	createCanvas(400,400);
	background(50);
	socket=io.connect("http://localhost:3000/");
	socket.on('mouse',newDrawing);
}

function newDrawing(data){
	noStroke();
	fill(255,0,0);
	console.log(mouseX+" : "+mouseY);
	ellipse(data.x,data.y,20,20);
}

function mouseDragged(){
	console.log(mouseX+" : "+mouseY);
	var data={
		x:mouseX,
		y:mouseY
	}
	socket.emit('mouse',data);
	noStroke();
	fill(255,255,255);
	ellipse(mouseX,mouseY,20,20);
}

function draw(){
	
}