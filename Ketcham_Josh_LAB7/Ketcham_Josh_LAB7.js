//alert("JavaScript works!");

var objbook1;
var objbook2;

//Construct
var objbook= function (booktitle, bookauthor, bookpublisher, bookyearPublished) {
	
	this.title = booktitle;
	this.author = bookauthor;
	this.publisher = bookpublisher;
	this.published = bookyearPublished;	
			
};


//Function
var createobjbook = function () {
		
		var title;
		var author;
		var publisher;
		var published;
		
	for (var i=0; i < mybooksjson.mybooks.length; i++) {
		for (var key in mybooksjson.mybooks[i]) {
			console.log ("The book's " + key + " is " + mybooksjson.mybooks[i][key] + ".");
		}

		title  = mybooksjson.mybooks[i].title;
		author = mybooksjson.mybooks[i].author;
		publisher  = mybooksjson.mybooks[i].publisher;
		published = mybooksjson.mybooks[i].publishing_year;
		
		if (i===0) {
			objbook1 = new objbook(title, author, publisher, published);
			
		} else {
			objbook2 = new objbook(title, author, publisher, published);
		};
	};
};


//Main Code
createobjbook();

console.log ("I have these books.");

console.log ("However, I have lost " + objbook1.title + " by " + objbook1.author +". I know it is somewhere in my house.")
console.log (objbook2.title + " by " + objbook2.author + " is on my book self.")


