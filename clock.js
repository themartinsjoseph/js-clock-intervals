// Create intervals in the JavaScript file to make the clocks tick.


document.addEventListener('DOMContentLoaded', function() {
	var i = 0; 

	var move = function() {
	i++; // This expression replaces the for loop by pulling out the "i++" portion
	document.getElementById("second").style.transform = "rotate(" + (i/60*360)   + "deg)"; // 60 seconds is a full rotation of the second hand 360/60 = 6 degrees 
	document.getElementById("minute").style.transform = "rotate(" + (i/(60*60)*360) + "deg)"; // 60 minutes is a full rotation of the minute hand mulitplied by the time it takes for the second hand to rotate completely
	document.getElementById("hour").style.transform = "rotate(" + (i/(60*60*12)*360)  + "deg)"; // 12 hours is a full rotation of the hour hand multiplied by the time it takes for the minute and second hands to achieve a full rotation 

}

setInterval(move, 1000); // 1 second

});


// seconds 60 seconds in a minutes (one rotation )
// 60 minutes in an hour (one rotation)
// 12 hours in 360 degrees (one rotation) 
	
// The minute hand rotates through 360° in 60 minutes or 6° per minute

// It would be useful to define functions that convert seconds, 
// minutes and hours to how many degrees the hand should be rotated 
// around the clock!