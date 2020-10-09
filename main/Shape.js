// set constants to define wht mode this shape is in.
// Note these don't correlate to the synthesizer attack/sustain/release values.
// These are animation-based states, for the shape to ease to a larger size, be held, then released.
var MODE_OFF = 0;
var MODE_ATTACK = 1;
var MODE_SUSTAIN = 2;
var MODE_RELEASE = 3;

// Shape class
// indexPm:    Index number of this shape (0, 1, 2, 3...) - corresponds to below file number.
function Shape(controllerPm, indexPm) {
	this.controller = controllerPm;
	this.index = indexPm;
	// my position as a ratio along the spectrum
	this.positionRatio = (this.controller.arrData[this.index][0] - LINE_POSITION_MIN) / (LINE_POSITION_MAX - LINE_POSITION_MIN);
	// How thick to set the lines, as a ratio of the window size
	this.widthBaseRatio = 0.002;
	// minimum width in pixels - so lines always stay visible
	this.minWidth = 2;
	// Easing after being triggered. Ratio 0 to 1. Close it is to 1, the faster it'll snap back.
	this.easeAttack = 0.6;
	this.easeRelease = 0.08;
	
	this.ease;
	// What target width am I currently trying to get to
	this.widthTarget;
	// How much to expand my width when I'm hit (multiplier of original width);
	this.ratioExpanded = 3.0;
	// My opacity
	this.opacity = this.controller.arrData[this.index][4];
	// base RGB color
	this.colorBase = color(
		this.controller.arrData[this.index][1] * 255 * this.opacity,
		this.controller.arrData[this.index][2] * 255 * this.opacity,
		this.controller.arrData[this.index][3] * 255 * this.opacity
	);

	// how much the stripe should oscillate when held, as an additive amount based on base width
	// e.g. 0.1 means it'll vibrate/oscillate 10% of base width amount when held.
	// increase it to make the oscillataion amount more obvious. Set to 0 if you want none.
	this.oscillationRatio = 0.11;
	// oscillation speed. Set the range here. Increase to make it oscillate faaster.
	// Set the min/max range so the lower lines will vibrate slightly slower than the higher ones.
	this.oscillationSpeedMax = 0.9;
	this.oscillationSpeedMin = 0.7;
	this.oscillationSpeed;
	// initialize the counter, always set this to 0
	this.oscillationCounter = 0;
	// How big is the trigger hit area of the mouse to my shape
	// Number of pixels from my central axis which will trigger hitting me
	this.hitWidth = 20;
	
	// what mode are we in
	this.mode = MODE_OFF;
	// Is this shape currently being held by a key press event or a mouse event
	this.isHeldByKey = false;
	this.isHeldByMouse = false;
}

// Initialize this shape
Shape.prototype.init = function() {
	// set my oscillation speed based on where I am on the spectrum
	// my ratio within the lineup
	this.oscillationSpeed = lerp(this.oscillationSpeedMin, this.oscillationSpeedMax, (this.index / (this.controller.totalShapes - 1)));
}

// Update this shape
Shape.prototype.update = function() {
	
	
	// Check if mouse is hovered over me
	if (Math.abs(mouseX - this.x) < this.hitWidth) {
		// am I on already?
		if (!this.isOn()) {
			this.noteDown();
		}
	// Mouse is not over me - check if the key is holding me down
	} else {
		// If I'm on, and I'm not currently being held by the key event, lift me up
		if (this.isOn() && !this.isHeldByKey) {
			this.noteUp();
		}
	}

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
	this.ease = ((this.mode == MODE_ATTACK) || (this.mode == MODE_SUSTAIN)) ? this.easeAttack : this.easeRelease;
	// Ease the current width to its current target state
	// if it's close enough, set it
	if (Math.abs(this.width - this.widthTarget) < 1) {
		this.width = this.widthTarget;
		// If we've alreay hit out target width, then ease the color back to 0
		if (this.mode == MODE_ATTACK) {
			this.mode = MODE_SUSTAIN;
		// are we eaasing back to idle state
		} else if (this.mode == MODE_RELEASE) {
			this.mode = MODE_OFF;
		}
	} else {
		// ease back
		this.width = this.width + (this.widthTarget - this.width) * this.ease;
	}

	// add visual oscillation effect
	if ((this.mode == MODE_ATTACK) || (this.mode == MODE_SUSTAIN)) {
		// add oscillation amount
		this.oscillationCounter += this.oscillationSpeed;
		var add = Math.sin(this.oscillationCounter) * (this.widthBase * this.oscillationRatio); 
		this.width += add;
	}
	
	// set the height of this shape to the full height of browser	
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
// byKey - set to true if it's being triggered by a keyboard event.
Shape.prototype.noteDown = function(byKey) {
	
	// If it's being triggered by a key event, and the mouse is currently over it, don't re-press the note
	if (byKey && this.isHeldByMouse) {
		return;
	} else {
		// Ease towards the larger size
		this.widthTarget = this.widthBase * this.ratioExpanded;
		this.mode = MODE_ATTACK;
		// What frequency should it play at
		var frequency = arrLineData[this.index][5];
		// What velocity should it play at
		var velocity = arrLineData[this.index][4];
		// trigger attack - note, time, velocity
		this.controller.synth.triggerAttack(frequency, Tone.now(), velocity);		
		
		// store that this note is currently being held because of a key event
		if (byKey) {
			this.isHeldByKey = true;
		// Else this was triggered by a mouse event
		} else {
			this.isHeldByMouse = true;
		}
	}
}

// Note up event for this shape (e.g. user pressed a key or pressed the mouse)
// byKey - set to true if it's being triggered by a keyboard event.
Shape.prototype.noteUp = function(byKey) {

	// If it's being triggered by a key event, and the mouse is currently over it, don't release the note.
	if (byKey && this.isHeldByMouse) {
		return;
	} else {
		// restore back to original size
		this.widthTarget = this.widthBase;	
		this.mode = MODE_RELEASE;
		var frequency = arrLineData[this.index][5];
		this.controller.synth.triggerRelease(frequency);			
		// store that this note is currently being held because of a key event
		if (byKey) {
			this.isHeldByKey = false;
		// Else this was triggered by a mouse event
		} else {
			this.isHeldByMouse = false;
		}
		
	}
}

// Force release of this note (not by mouse or keyboard)
Shape.prototype.forceStop = function() {
	// stop the sound
	var frequency = arrLineData[this.index][5];
	this.controller.synth.triggerRelease(frequency);
	// Reset the variable	
	this.isHeldByKey = this.isHeldByMouse = false;			
}

// Return true if I'm currently pressed
Shape.prototype.isOn = function() {
	if (this.mode == MODE_OFF) return false;
	else return true;
}


