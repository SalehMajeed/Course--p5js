function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(100);

	stroke(4);

	fill(0);

	var x = 0;

	while (x < width) {
		ellipse(x, 200, 40, 40);
		x += 50;
	}
	for (let x = 25; x < 400; x += 50) ellipse(x, 300, 40, 40);
}

function mousePressed() {
	background(255, 30, 10);
	console.log('in');
	fill(100);
}
