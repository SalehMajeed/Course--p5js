var circle_move = {
	x: 0,
	y: 100,
	diameter: 50,
	r: 218,
	g: 160,
	b: 221,
};

var points = {
	x: 100,
	y: 50,
};

var col = {
	r: 255,
	g: 0,
	b: 0,
};
// function setup() {
// 	print('in the setup function');

// 	createCanvas(400, 400);
// 	background(0);
// }

// function draw() {
// 	// Background
// 	// background(circle_move.r, circle_move.g, circle_move.b);

// 	// rectMode(CENTER);

// 	//Rectangle
// 	// fill(0, 231, 0);
// 	// stroke(0, 0, 255);
// 	// strokeWeight(2);
// 	// rect(mouseX, 100, 20, 25, 75);

// 	//Ellipse
// 	// fill(255, 200, 200);
// 	// 	noStroke();
// 	// 	ellipse(circle_move.x, circle_move.y, circle_move.diameter, circle_move.diameter);
// 	// 	circle_move.x += 0.3;
// 	// 	circle_move.y += 0.3;

// 	// 	circle_move.r += 0.3;
// 	// 	circle_move.g += 0.3;
// 	// 	circle_move.b += 0.3;

// 	// col = map(mouseX, 0, 600, 0, 255);
// 	// background(col);

// 	//Ellipse
// 	col.r = random(100, 255);
// 	col.g = 0;
// 	col.b = random(100, 190);
// 	fill(col.r, col.g, col.b);
// 	points.x = random(0, 600);
// 	points.y = random(0, 400);
// 	// ellipse(mouseX, 200, 64, 64);
// 	// ellipse(points.x, points.y, 24, 24);
// }

// Graphics
function setup() {
	createCanvas(400, 400);
	extra_canvas = createGraphics(400, 400);
	extra_canvas.background(255, 0, 0);
	background(0);
	extra_canvas.clear();
}

function draw() {
	image(extra_canvas, 0, 0);
	extra_canvas.fill(3, 47, 8);
	let starX = random(600);
	let starY = random(400);
	ellipse(starX, starY, 10, 10);
	extra_canvas.ellipse(starX, starY, 10, 10);

	// extra_canvas.ellipse(starX, starY, 10, 10);
}
