var w = window.innerWidth;
var h = window.innerHeight;  

// Margins - as ratio of window width (for left/right) or height (for top/bottom)
var LEFT_MARGIN_RATIO = 0.03;
var RIGHT_MARGIN_RATIO = 0.03;
var TOP_MARGIN_RATIO = 0;
var BOTTOM_MARGIN_RATIO = 0;

// Main shape object
var controller;

// Link to Tone.context audioContext
var audioContext = Tone.context;

// "Line position","Red","Green","Blue","Opacity","Audio frequency (Hz)","Relative amplitude"
var LINE_DATA_HELIUM = [
	// Helium
[71.86,0.377,0,0,0.896,154.5,0.896],
[93.48,0.377,0,0,1.,173.5,1.],
[132.2,0.6197,0,0,1.,217.8,1.],
[212.4,1.,0.7238,0,1.,383.8,1.],
[295.2,0,0.9528,0.5161,0.2549,831.8,0.2549],
[298.4,0,0.9348,0.6106,0.9989,861.5,0.9989],
[307.8,0,0.8205,0.8409,0.4844,957.1,0.4844],
[328.7,0,0.2268,1.,0.731,1228.,0.731],
[352.8,0.4126,0,1.,1.,1687.,1.],
[361.2,0.4805,0,1.,0.2549,1899.,0.2549],
[387.9,0.3045,0,0.6417,0.351,2859.,0.351],
[397.4,0.2146,0,0.4524,0.9262,3349.,0.9262]
];

// List of the keycodes for the computer keys that make lines play. See keycode.info.
var KEY_CODES = [
	49, 50, 51, 52, 53, 54, 55, 56, 57, 48, // 1 - 9, 0
	81, 87, 69, 82, 84, 89, 85, 73, 79, 80, // QWERTYUIOP
	65, 83, 68, 70, 71, 72, 74, 75, 76, // ASDFGHJKL
	90, 88, 67, 86, 66, 78, 77 // ZXCVBNM
];

// Temporary, this is just minimum max values for normalizing the first values in the data array
var LINE_POSITION_MIN = 0;
var LINE_POSITION_MAX = 400;

function setup() {
	canvas = createCanvas(w, h);
	controller = new Controller();
	// Set the source of our line data
	arrLineData = LINE_DATA_HELIUM;
}

function draw() {
	background(0, 0, 0);
	// Draw all the lines
	controller.update();
	controller.draw();
}

window.onresize = function() {
	// assigns new values for width and height variables
	w = window.innerWidth;
	h = window.innerHeight;  
	canvas.size(w,h);	
}


function mousePressed() {
	// double check audio context has been initiated	
	startAudio();
}

function keyPressed() {
	
	var frequency;
	
	// Go through the key code array and see if this was a valid key
	for (var i = 0; i < KEY_CODES.length; i++) {
		// Is it within the range of the number of lines we have?
		if ((keyCode == KEY_CODES[i]) && (i <= (arrLineData.length - 1))) {
			
			// double check audio context has been initiated	
			startAudio();			
			this.controller.arrShape[i].noteDown();
			frequency = arrLineData[i][5];
			controller.synth.triggerAttack(frequency);
		}
	}
	
}

function keyReleased() {
	var frequency;
	
	// Go through the key code array and see if this was a valid key
	for (var i = 0; i < KEY_CODES.length; i++) {

		// Is it within the range of the number of lines we have?
		if ((keyCode == KEY_CODES[i]) && (i <= (arrLineData.length - 1))) {
			
			// double check audio context has been initiated	
			startAudio();
			this.controller.arrShape[i].noteUp();
			frequency = arrLineData[i][5];
			controller.synth.triggerRelease(frequency);			
		}
	}
	
}

// this function resumes the audio context in case it's in a suspended state
function startAudio(){
	if (audioContext.state !== 'running'){
		audioContext.resume()
	}
}
