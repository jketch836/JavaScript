//  NAME:  Josh Ketcham
//  DATE:  11-14-2013
// Scalable Data Infrastructures
//  Day 8 Lab

//alert Javascript


//Problem 1

//Variables
var robbstarkEmailpro= "king.robb@westros.gov";

//Function
var westrosemail = function (proemail) {
	var HouseAtt = proemail.indexOf ("@");
	var HousePeriod1= proemail.indexOf (".");
	var HousePeriod2= proemail.lastIndexOf (".");
	var HouseSpace = proemail.indexOf (" ");
	
	if (HouseAtt > 2){
		console.log("King Robb has added one at symbol (@) in his email " + robbstarkEmailpro +" at the " + HouseAtt + " position.");
		console.log("There are no more @ in his email.");
		
		if (HousePeriod1 > -1 && HousePeriod2 > -1) {
			console.log ("King Robb has added at least one period (.) in his email " + robbstarkEmailpro + " at the " + HousePeriod1 + " and " + HousePeriod2 + " positions");
		
			if (HouseSpace < 0){
				console.log ("King Robb has no spaces (' ') in his email.");
			} else {
				console.log ("King Robb has made a mistake in his email. He has added a space (' ') at position " + HouseSpace + ". He needs to correct this.");
			}
		
		} else {
			console.log ("King Robb has made a mistake in his email. He has no periods (.) in his email. He needs to correct this.");
		}
	
	} else {
		console.log ("King Robb has made a mistake in creating his email. He has no (or to many) at symbols (@) in his email. He needs to correct this.");
	};
};
	
//Main Code
console.log ("Robb has named himself King of the North (Yay we all hate Joffery)!!!");
console.log ("King Robb has also decided to make a new email account to go along with his new title.");
westrosemail(robbstarkEmailpro);
console.log ("King Robb has finished creating his email with no errors! Just in time to attend his Uncle's Wedding at the Twins (Yay for Weddings and Cake)!!");




//Problem 2

//Variables
var abc = "a,b,c,d,e,f,g"
var comma = ","
var dash = "/"

//Function
var alphebet = function (alph, ncomma, ndash) {
	var alphslipt1 = alph.split(ncomma);
	var newalph = "";

	for (var i = 0; i < alphslipt1.length; i++) {
		if (newalph === "") {
			newalph = newalph + alphslipt1[i];
		} else {
			newalph = newalph + dash + alphslipt1[i];
		};	
	};
	console.log ("I was singing " + abc + " when suddenly on my computer something amazing happened.");
	console.log ("It showed " + newalph + " on my computer screen!");
};

//Main Code
alphebet(abc, comma, dash);
console.log ("Then I went back to watching Game of Thrones. The End.");
