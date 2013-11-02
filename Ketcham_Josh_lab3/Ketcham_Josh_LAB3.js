//alert("JavaScript works!");

// Josh Ketcham
// SDI 1311
// Lab Day 2
// Tell Me a Stroy in JavaScript

//My Variables
var myknight = "GeorgetheBrave";
var thedragon = "SmaugtheSmellyOne";
var land = "'\Super\' AwesomeLand";
var daylight = 10;
var entercave = true;
var guards = 3; 

console.log(land + ' was under attack from ' + thedragon);

var slaydragon = confirm(myknight + ' went to slay the ' + thedragon);



if (slaydragon === entercave) {
	confirm(myknight + ' approached the cave of ' + thedragon);


	if (daylight >= 10) {
		prompt (myknight + " wondered what time it was ","Enter a number that is above 10");
		confirm(myknight + ' entered the cave of ' + thedragon);
		
			if (guards === 3){
				console.log(myknight + ' came upon ' + thedragon +"'s' guards");
				(prompt ('he knew there were five of them, but there were only two', "How many are missing?"));
				console.log(myknight + " then saw " + thedragon + "'s' head in the entrance to his den.");
			};
				
				
	} else {
		confirm(myknight + ' threw his sword into the cave and killed ' + thedragon + ' with one lucky blow.');
	};

	

} else {
	confirm (myknight + ' did not enter cave and traveled ' + land + ' to build his strength.');
	console.log (myknight + ' came upon a guitar sword ' );
	var knightsChoice= prompt("does " + myknight + " pick up the guitar sword. Yes or No?");
	if (knightsChoice === "Yes"){
		console.log (myknight + " picked up the sword!! and slayed " + thedragon);
	} else {
		console.log (myknight +" let someone else kill " + thedragon + " and lived happliy ever after.");
	}
};
