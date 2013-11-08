//  NAME:  Josh Ketcham
//  DATE:  11-7-2013
// Scalable Data Infrastructures
//  Day 5 Lab
//  Functions

alert("JavaScript works!");

//variables
var NumOne = "";
var NumTwo = "";
var Operator = "";

var addsum = "";
var subsum = "";
var mulsum = "";
var divsum = "";

NumOne = parseInt(prompt("Please enter first number"));
NumTwo = parseInt(prompt("Please enter second number"));
Operator = prompt("Enter + , - , / , * ");


if (Operator === "+") {
	console.log("You entered " + Operator + ".");

} else if (Operator === "-") {
	console.log("You entered " + Operator + ".");

} else if (Operator === "*") {
	console.log("You entered " + Operator + ".");

} else if (Operator === "/") {
	console.log("You entered " + Operator + ".");

} else {
	console.log("You have entered an Invaild Operator, please try again.");
};



var add = function(NumOne, Operator, NumTwo) {
	if (Operator === "+") {
		var addsum = NumOne + NumTwo;
		console.log("You entered " + NumOne + " " + Operator + " " + NumTwo + ".");
		console.log("The Answer is " + addsum);
		return addsum;
	}
	
};
add(NumOne, Operator, NumTwo); //Calling a function
	

var sub = function(NumOne, Operator, NumTwo) {
	if (Operator === "-") {
		var subsum = NumOne - NumTwo;
		console.log("You entered " + NumOne + " " + Operator + " " + NumTwo + ".");
		console.log("The Answer is " + subsum);
		return subsum;
	}
};
sub(NumOne, Operator, NumTwo); //Calling a function


var mul = function(NumOne, Operator, NumTwo) {
	if (Operator === "*") {
		if (NumTwo === 0 || NumOne ===0) {
			return (console.log("Can't multiply by 0"));

		} else {
			var mulsum = NumOne * NumTwo;
			console.log("You entered " + NumOne + " " + Operator + " " + NumTwo + ".");
			console.log("The Answer is " + mulsum);
			return mulsum;
		};
	};
};
mul(NumOne, Operator, NumTwo); //Calling a function


var div = function(NumOne, Operator, NumTwo) {
	if (Operator === "/") {
		if (NumTwo === 0 || NumOne ===0) {
			return (console.log("Can't multiply by 0"));

		} else {
			var divsum = NumOne / NumTwo;
			console.log("You entered " + NumOne + " " + Operator + " " + NumTwo + ".");
			console.log("The Answer is " + divsum);
			return divsum;
		};
	};
};
div(NumOne, Operator, NumTwo); //Calling a function	