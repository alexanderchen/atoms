// Controller class controls the overall the thing. It creates Dots.
function Controller() {
	
	// Array of my Shape objects
	this.arrShape = [];
	// Current data source
	this.arrData;
	// initialize
	this.init();
}

Controller.prototype.init = function() {

	var shape, url;
	
	// Current data source
	this.arrData = arrLineData;
	// Create the shapes
	this.createShapes();
	// Tremolo (frequency in Hz, depth) effect
	var tremolo = new Tone.Tremolo(3, 0.3).toMaster().start();
	// Creaate synth
	this.synth = new Tone.PolySynth().connect(tremolo);
}

Controller.prototype.createShapes = function() {
	
	// Set how many total shapes we have
	this.totalShapes = this.arrData.length;	
	// Create the shapes
	for (var i = 0; i < this.arrData.length; i++) {
		// Create shape and add it to the array
		shape = new Shape(this, i);
		this.arrShape.push(shape);
		shape.init();
	}
}

Controller.prototype.update = function() {
	
}

Controller.prototype.draw = function() {

	var i, c;
	// Fill the background black
	blendMode(NORMAL); noStroke(); fill(0); rect(0, 0, width, height);
	
	var shape;
	// Update all the shapes
	for (i = 0; i < this.arrShape.length; i++) {
		shape = this.arrShape[i];
		shape.update();
		shape.render();	
	}
}

// Refresh the lines when you load a new element
Controller.prototype.refreshLines = function() {
	
	// Create new shape array
	this.arrShape = new Array();
	
	// point to the new data
	arrLineData = LINE_DATA[element][1];
	this.arrData = arrLineData;
	this.createShapes();
}

// Triggered whenever the window is resized
Controller.prototype.windowResized = function() {
	// Update all the shapes
	for (i = 0; i < this.arrShape.length; i++) {
		shape = this.arrShape[i];
		shape.windowResized();
	}	
}

// Key down controls
Controller.prototype.keyPressed = function(k) {
	// Space bar pressed
	if (k === 32) {
	}
}