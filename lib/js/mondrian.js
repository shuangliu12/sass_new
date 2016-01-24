// to do:
//  - resizing doesn't work in IE

window.onload = function() {
	var canvas = document.getElementById('myCanvas');
	// Create an empty project and a view for the canvas:
	paper.setup(canvas);

	//var page = "performing";
	//draw the vertical lines
	var numLines = 8;
	var lines = [];
	var linesDire = [];

	for (var i = 0; i < numLines; i++) {
		var x = Math.random() * paper.view.size.width;

		lines.push(new paper.Path({
			strokeColor : 'black',
			strokeWidth : Math.floor(Math.random() * 10 + 2),
			segments : [[x, 0], [x, paper.view.size.height]],
		}));

		if (i % 2 == 0) {
			linesDire.push(1);
		} else {
			linesDire.push(-1);
		}
	}

	//draw horizontal lines
	var numHori = 4;
	var horizontals = [];
	var horiDire = [];

	for (var i = 0; i < numHori; i++) {
		var y = Math.random() * paper.view.size.height;

		horizontals.push(new paper.Path({
			strokeColor : 'black',
			strokeWidth : Math.floor(Math.random() * 10 + 2),
			segments : [[0, y], [paper.view.size.width, y]],
		}));
		if (i % 2 == 0) {
			horiDire.push(1);
		} else {
			horiDire.push(-1);
		}
	}

	// draw squares
	var numSqr = 6;
	var squares = [];
	var sqrDir = [];
	var colors = ['#314b96', '#e42423', '#f3e500', '#314b96', '#e42423', '#f3e500'];
	var destinations = []
	function edge() {
		side = 250 * Math.random();
		while (side < 20) {
			side = 200 * Math.random();
		}
		return side;
	};

	for (var i = 0; i < numSqr; i++) {
		squares.push(new paper.Path.Rectangle({
			fillColor : colors[i],
			size : [edge(), edge()],
			point : [paper.view.size.width * Math.random(), paper.view.size.height * Math.random()]
		}));
		var randx = Math.random();
		var randy = Math.random();
		destinations.push([randx*paper.view.size.width, randy*paper.view.size.height]);
	}


	paper.view.onFrame = function(event) {
		//animate the vertical lines (the ones moving left and right)
		for (var i = 0; i < numLines; i++) {
			var x = lines[i].position.x;

			if (x < 0 && linesDire[i] == -1) {
				linesDire[i] = -1 * linesDire[i];
			} else if (x > paper.view.size.width && linesDire[i] == 1) {
				linesDire[i] = -1 * linesDire[i];
			}

			speed = Math.sin((i + x) / 50) + 2;
			if (speed > 0) {
				lines[i].position.x = x + speed * linesDire[i];
			} else {
				lines[i].position.x = x + -1 * speed * linesDire[i];
			}
		}

		//animate the horizontal lines (the ones moving up and down)
		for (var i = 0; i < numHori; i++) {
			var y = horizontals[i].position.y;

			if (y < 0 && horiDire[i] == -1) {
				horiDire[i] = -1 * horiDire[i];
			} else if (y > paper.view.size.height && horiDire[i] == 1) {
				horiDire[i] = -1 * horiDire[i];
			}

			horiSpeed = Math.sin((i + y) / 50) + 2;
			if (horiSpeed > 0) {
				horizontals[i].position.y = y + horiSpeed * horiDire[i];
			} else {
				horizontals[i].position.y = y + -1 * horiSpeed * horiDire[i];
			}
		}

		//animate the squares
		for (var i = 0; i < numSqr; i++) {
			// var vector = destinations[i] - squares[i].position;
			var deltaX = (destinations[i][0] - squares[i].position.x);
			var deltaY = (destinations[i][1] - squares[i].position.y);
			squares[i].position.x += deltaX/100;
			squares[i].position.y += deltaY/100;
			var distanceToDestination = Math.sqrt((deltaX*deltaX) + (deltaY*deltaY));
			if (distanceToDestination < 50) {
				var randx = Math.random();
				var randy = Math.random();
				destinations[i] = ([randx*paper.view.size.width, randy*paper.view.size.height]);
			}
		}
	}

	paper.view.draw();
}