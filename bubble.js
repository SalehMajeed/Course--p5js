const bubble = {};
let val;

function setup() {
	val = random(0, 50);
	createCanvas(400, 400);

	for (let i = 0; i < val; i++) {
		bubble[`bubble${i}`] = new Bubble();
	}
}

function draw() {
	background(0);

	for (let i = 0; i < val; i++) {
		bubble[`bubble${i}`].move();
		bubble[`bubble${i}`].show();
	}
}

class Bubble {
	constructor(x = random(0, width), y = random(0, height), diameter = random(0, 40)) {
		this.x = x;
		this.y = y;
		this.diameter = diameter;
	}

	move() {
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(-5, 5);
	}

	show() {
		stroke(255);
		strokeWeight(4);
		noFill();
		ellipse(this.x, this.y, this.diameter);
	}
}
