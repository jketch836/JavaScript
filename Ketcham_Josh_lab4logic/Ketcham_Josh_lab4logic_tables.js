//  NAME:  Josh Ketcham
//  DATE:  11-5-2013
// Scalable Data Infrastructures
// Day 4 Lab
//  Assignment 1
//  Using logical operators

var b = 0;
var p;
var q;
var r;


while (b<8) {
	
	p = confirm("First value:  Click OK for true or Cancel for false.");
	q = confirm("Second value:  Click OK for true or Cancel for false.");
	r = confirm("Third value:  Click OK for true or Cancel for false.");

	if (p || (q || r)) {
    console.log("With " + p + " , " + q + " , and " + r + ", the outcome is TRUE.");
	
	} else {
    console.log("With " + p + " , " + q + " , and  " + r + ", the outcome is FALSE.");
	
	};
	b++;
};
