function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();
}

function draw() {
	// draw background
	background(0, 0, 70);
	if(mouseIsPressed){
	    background(random(0, 200), random(0, 200), random(0, 200));
	}

	// draw ground, trees
	fill(10, 50, 25);
	for (var x = 0; x < 10; x++) {
		triangle((x * 64) - 50, 360, (x * 64) + 32, 200, (x * 64) + 114, 360);
	}


	fill(10, 90, 50);
	rect(0, 270, 640, 360);

	// draw ufo
	fill(100, 100, 100);
	ellipse(mouseX, mouseY - 30, 100, 50);
	ellipse(mouseX, mouseY - 40, 50, 60);

	//draw ufo windows
	fill(75, 75, 75);
	ellipse(mouseX - 50, mouseY - 30, 10, 10);
	ellipse(mouseX - 25, mouseY - 30, 10, 10);
	ellipse(mouseX, mouseY - 30, 10, 10);
	ellipse(mouseX + 25, mouseY - 30, 10, 10);
	ellipse(mouseX + 50, mouseY - 30, 10, 10);

	//make ufo flash
	if (mouseIsPressed) {

		fill(random(0, 255), random(0, 255), random(0, 255));
		ellipse(mouseX - 50, mouseY - 30, 10, 10);
		ellipse(mouseX - 25, mouseY - 30, 10, 10);
		ellipse(mouseX, mouseY - 30, 10, 10);
		ellipse(mouseX + 25, mouseY - 30, 10, 10);
		ellipse(mouseX + 50, mouseY - 30, 10, 10);
		ellipse(mouseX, mouseY - 10, 30, 5);

	//make spotlight
	  ellipse(mouseX, 310, 65, 20);
	}
}
