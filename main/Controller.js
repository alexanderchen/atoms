// Controller class controls the overall the thing. It creates Dots.
function Controller() {
	
	// Array of my Shape objects
	this.arrShape = [];
	
	// Current data source
	this.arrData = LINE_DATA_HELIUM;
	// how many total shapes do I haave
	this.totalShapes = this.arrData.length;

	this.init();
  
	/*
	// Caption settings
	this.isCaptionFading = false;
	this.wantToFadeCaption = false;
	this.captionOpacity = 1.0;
	this.captionOpacityFadeSpeed = 0.06;
	
	// How many recorded layers do we currently have
	this.layers = 0;
	
	// What state am I in - default to recording off
	this.state = RECORDING_OFF;
	*/
}

Controller.prototype.init = function() {

	var shape, url;
	
	for (var i = 0; i < this.arrData.length; i++) {
		// Create shape and add it to the array
		shape = new Shape(this, i);
		this.arrShape.push(shape);
		shape.init();
	}	
	
	// Tremolo (frequency in Hz, depth) effect
	var tremolo = new Tone.Tremolo(3, 0.3).toMaster().start();
	// Creaate synth
	this.synth = new Tone.PolySynth().connect(tremolo);
	//this.synth.triggerAttack("C1");
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