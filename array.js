let bubbles = [];

function setup() {
	createCanvas(500, 400);

	for (let i = 0; i < 5; i++) {
		let x = random(width);
		let y = random(height);
		let r = random(10, 50);
		let bubble = new Bubble(x, y, r);
		bubbles.push(bubble);
	}
}

function draw() {
	background(0);
	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].move();
		bubbles[i].show();
	}
}

function mousePressed() {
	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].clicked(mouseX, mouseY);
	}
}

class Bubble {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
		this.brrightness = 0;
	}

	move() {
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(-5, 5);
	}

	show() {
		stroke(255);
		strokeWeight(4);
		fill(this.brrightness, 125);
		ellipse(this.x, this.y, this.r * 2);
	}

	clicked(px, py) {
		let d = dist(px, py, this.x, this.y);
		if (d < this.r) this.brrightness = 255;
	}
}
