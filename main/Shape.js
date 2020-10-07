// set constants to define wht mode this shape is in
var MODE_OFF = 0;
var MODE_ATTACK = 1;
var MODE_RELEASE = 2;

// Shape class
// indexPm:    Index number of this shape (0, 1, 2, 3...) - corresponds to below file number.
function Shape(controllerPm, indexPm) {
	this.controller = controllerPm;
	this.index = indexPm;
	// my position as a ratio along the spectrum
	this.positionRatio = (this.controller.arrData[this.index][0] - LINE_POSITION_MIN) / (LINE_POSITION_MAX - LINE_POSITION_MIN);
	// How thick to set the lines, as a ratio of the window size
	this.widthBaseRatio = 0.006;
	// minimum width in pixels - so lines always stay visible
	this.minWidth = 3;
	// Easing after being triggered. Ratio 0 to 1. Close it is to 1, the faster it'll snap back.
	this.easeAttack = 0.6;
	this.easeRelease = 0.08;
	
	this.ease;
	// What target width am I currently trying to get to
	this.widthTarget;
	// How much to expand my width when I'm hit (multiplier of original width);
	this.ratioExpanded = 3.0;
	// base RGB color
	this.colorBase = color(
		this.controller.arrData[this.index][1] * 255,
		this.controller.arrData[this.index][2] * 255,
		this.controller.arrData[this.index][3] * 255
	);
	// how much the stripe should oscillate when held, as an additive amount based on base width
	// e.g. 0.1 means it'll vibrate/oscillate 10% of base width amount when held.
	// increase it to make the oscillataion amount more obvious. Set to 0 if you want none.
	this.oscillationRatio = 0.09;
	// oscillation speed. Set the range here. Increase to make it oscillate faaster.
	// Set the min/max range so the lower lines will vibrate slightly slower than the higher ones.
	this.oscillationSpeedMax = 1.0;
	this.oscillationSpeedMin = 0.9;
	this.oscillationSpeed;
	// initialize the counter, always set this to 0
	this.oscillationCounter = 0;

	
	// what mode are we in
	this.mode = MODE_OFF;
}

// Initialize this shape
Shape.prototype.init = function() {
	// set my oscillation speed based on where I am on the spectrum
	// my ratio within the lineup
	this.oscillationSpeed = lerp(this.oscillationSpeedMin, this.oscillationSpeedMax, (this.index / (this.controller.totalShapes - 1)));
}

// Update this shape
Shape.prototype.update = function() {
	

	this.x = (LEFT_MARGIN_RATIO * w) + this.positionRatio * (w * (1 - (LEFT_MARGIN_RATIO + RIGHT_MARGIN_RATIO)));
	this.y = h * TOP_MARGIN_RATIO;
	
	// Set the base width based on window size
	this.widthBase = w * this.widthBaseRatio;
	// make sure it's visible
	if (this.widthBase < this.minWidth) this.widthBase = this.minWidth;
	
	// initialize width
	if (this.width == null) this.width = this.widthBase;
	if (this.widthTarget == null) this.widthTarget = this.widthBase;
	
	// set ease amount
	this.ease = this.mode == MODE_ATTACK ? this.easeAttack : this.easeRelease;
	// Ease the current width back to the base
	// if it's close enough, set it
	if (Math.abs(this.width - this.widthTarget) < 1) {
		this.width = this.widthTarget;
		// are we eaasing back to idle state
		if (this.mode == MODE_RELEASE) {
			this.mode = MODE_OFF;
		}
	} else {
		// ease back
		this.width = this.width + (this.widthTarget - this.width) * this.ease;
	}

	// add visual oscillation effect
	if (this.mode == MODE_ATTACK) {
		// add oscillation amount
		this.oscillationCounter +=- this.oscillationSpeed;
		var add = Math.sin(this.oscillationCounter) * (this.widthBase * this.oscillationRatio); 
		this.width += add;
	}
		
	
	this.height = (1 - TOP_MARGIN_RATIO - BOTTOM_MARGIN_RATIO) * h;
}

// Render this shape
Shape.prototype.render = function() {
	blendMode(SCREEN);
	fill(this.colorBase);
	rect(
		this.x - this.width/2, // top left corner x
		this.y, // top left corner y
		this.width,
		this.height
	);
}

// Note down event for this shape (e.g. user clicked down)
Shape.prototype.noteDown = function() {
	// Ease towards the larger size
	this.widthTarget = this.widthBase * this.ratioExpanded;
	this.mode = MODE_ATTACK;
}

// Note up event for this shape (e.g. user pressed a key or released the mouse)
Shape.prototype.noteUp = function() {
	// restore back to original size
	this.widthTarget = this.widthBase;	
	this.mode = MODE_RELEASE;
}


