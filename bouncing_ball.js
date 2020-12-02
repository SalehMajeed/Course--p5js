const _canvas = {
	width: 600,
	height: 400,
};

const _circle = {
	x: _canvas.width / 2,
	y: _canvas.height / 2,
	x_speed: null,
	y_speed: null,
	x_direction: null,
	y_direction: null,
	size: 20,
};

function setup() {
	createCanvas(_canvas.width, _canvas.height);
	_circle.x_direction = random([-1, 1]);
	_circle.y_direction = random([-1, 1]);
	_circle.x_speed = random(1, 5);
	_circle.y_speed = random(1, 5);
	frameRate(30);
	ellipseMode(RADIUS);
}

function draw() {
	background(100);

	_circle.x = _circle.x + _circle.x_speed * _circle.x_direction;
	_circle.y = _circle.y + _circle.y_speed * _circle.y_direction;

	if (_circle.x > width - _circle.size || _circle.x < _circle.size) {
		_circle.x_direction *= -1;
	}
	if (_circle.y > height - _circle.size || _circle.y < _circle.size) {
		_circle.y_direction *= -1;
	}

	fill(255, 0, 0);
	ellipse(_circle.x, _circle.y, _circle.size, _circle.size);
}
