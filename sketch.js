function setup() {
	createCanvas(400, 400);
	print('in the setup function');
}

function draw() {
	background(220);

	// rectMode(CENTER);
	fill(0, 231, 0);
	stroke(0, 0, 255);
	strokeWeight(2);
	rect(100, 20, 25, 75);

	fill(255, 0, 0, 175);
	noStroke();
	ellipse(100, 50, 40, 30);
}
