//  NAME:  Josh Ketcham
//  DATE:  11-9-2013
// Scalable Data Infrastructures
//  Day 6 Lab
//  Arrays

//alert("JavaScript works!");

//Variables
var familyMem = ["John", "Ken", "Warren"],
	relation = ["Uncle on mother's side", "Father", "Uncle on dad's side"]
;
var myfamily;


// Functions
var familyMatt = function (familyMem, relation) {
	var sickF;
	var sickR;
	var sick = (sickF, sickR);
	
	for (var i=0; i < familyMem.length; i++) {
		console.log ("I will visit " + familyMem[i] + " who is my " + relation[i]);
	};
	
	familyMem.push("Coni");
	relation.push( "Mother");
	console.log ("There is also " + familyMem[3] + " who is my " + relation[3] + ".");
	
	sickF = familyMem.shift(); 
	sickR = relation.shift();
	
	console.log ("My relative " + sickF + " who is my " + sickR + " is sick today, so I will not visit him.");
	return [sickF, sickR];
};

// Main Code
console.log ("I have a large family.");
console.log ("My family members include " + familyMem);

myfamily = familyMatt(familyMem, relation);
console.log ("I will send " + myfamily[0] + " who is my " + myfamily[1] + " a get well card.");
