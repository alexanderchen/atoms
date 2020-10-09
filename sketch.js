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

// List of the keycodes for the computer keys that make lines play. See keycode.info.
var KEY_CODES = [
	49, 50, 51, 52, 53, 54, 55, 56, 57, 48, // 1 - 9, 0
	81, 87, 69, 82, 84, 89, 85, 73, 79, 80, // QWERTYUIOP
	65, 83, 68, 70, 71, 72, 74, 75, 76, // ASDFGHJKL
	90, 88, 67, 86, 66, 78, 77 // ZXCVBNM
];

// index of which element are we currently on
var element = 0;
// how many total elements are there
var elementTotal = LINE_DATA.length;

// Current mouse position as a ratio 0 to 1 of the window
var mousePos;

// Temporary, this is just minimum max values for normalizing the first values in the data array
var LINE_POSITION_MIN = 0;
var LINE_POSITION_MAX = 400;

function setup() {
	// Set the initial source of our data
	arrLineData = LINE_DATA[element][1];
	canvas = createCanvas(w, h);
	controller = new Controller();
}

function draw() {
	background(0, 0, 0);
	// Mouse position
	mousePos = mouseX / w;
	// Draw all the lines
	controller.update();
	controller.draw();
	// Write the name of the element in the lower left
	fill(255);
	textSize(30);
	textStyle(BOLD);
	var margin = 20;
	var elementName = toTitleCase(LINE_DATA[element][0]);
	text(elementName, margin, height - margin);
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
	
	// right arrow key - move forward an element
	if (keyCode == 39) {
		element = (element + 1) % elementTotal;
		controller.refreshLines();
	}
	// left arrow key - move back an element
	else if (keyCode == 37) {
		// loop around?
		if (element == 0) element = elementTotal - 1;
		else element--;
		controller.refreshLines();
		
	// else Go through the key code array and see if this was a valid key to play lines
	} else {
	
		// Go through the key code array and see if this was a valid key
		for (var i = 0; i < KEY_CODES.length; i++) {
			// Is it within the range of the number of lines we have?
			if ((keyCode == KEY_CODES[i]) && (i <= (arrLineData.length - 1))) {
			
				// double check audio context has been initiated	
				startAudio();			
				// set byKey to true so it knows it's being triggered a keyboard event
				this.controller.arrShape[i].noteDown(true);

			}
		}
	}
}

function keyReleased() {
	
	// right arrow key - ignore
	if (keyCode == 39) {
		
	}
	// left arrow key - ignore
	else if (keyCode == 37) {
		
	// else Go through the key code array and see if this was a valid key to play lines
	} else {
			
		for (var i = 0; i < KEY_CODES.length; i++) {
			// Is it within the range of the number of lines we have?
			if ((keyCode == KEY_CODES[i]) && (i <= (arrLineData.length - 1))) {
			
				// double check audio context has been initiated	
				startAudio();
				// set byKey to true so it knows it's being triggered a keyboard event				
				this.controller.arrShape[i].noteUp(true);
			}
		}
	}	
}

// this function resumes the audio context in case it's in a suspended state
function startAudio(){
	if (audioContext.state !== 'running'){
		audioContext.resume()
	}
}

// Convert string to title case
function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}
