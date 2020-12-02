function setup() {
	createCanvas(400, 400);
	background(100);
}

function draw() {
	ellipse(40, 30, 43, 43);
}

function mousePressed() {
	background(255, 30, 10);
	console.log('in');
	fill(100);
}
