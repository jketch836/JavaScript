//alert("JavaScript works!");

//Problem 1
    //Function
    var thenumbers = function (num1, num2) {
        var onenumb = num1.toFixed(num2);
        return onenumb;
    };
    
    //Main Code
    var numprmpt= parseInt(prompt("Please enter a number greater than 0"));
    var decprmpt= parseInt(prompt("Please enter the deciaml place number"));
    
    var finalnum= thenumbers(numprmpt, decprmpt);
    console.log("The final most super awesomeist number in the world is " + finalnum + ".");
    
    
//Problem 2
    //Function
    var strtonum = function (strArg){
        var Num1 = parseFloat(strArg);
        //if (isNaN(Num1)) {
        //    console.log("King Robb cannot take letters or strings to the Wedding.");
        //    console.log("He has his squires do that.");
        //} else {
        //    return Num1;
        //};
        return Num1;
    };
    
    //Main Code
    var thecode = prompt("Enter the number of men for the Wedding March.");
    
    var menNum= strtonum(thecode);
        console.log (menNum , " knights marched with King Robb to his Uncle's Wedding.");
        
    //if (menNum === false) {
    //    console.log (menNum + " knights marched with King Robb to his Uncle's Wedding.");
    //} else {
    //    console.log (menNum + " ASDLFASDGASDG");
    //};
    //
    
    
    
//Problem 3
    //Function
    var thedates = function (date1, date2, string) {
        var dateone  = new Date(date1);
        var datetwo  = new Date(date2);
        var timediff = dateone - datetwo;
            if (string === "Hours"|| string === "hours") {
                return Math.round(((timediff/1000)/60)/60);
            } else if (string === "Days" || string === "days") {
                return Math.round((((timediff/1000)/60)/60)/24);
            } else {
              console.log ("Cannot compute. There is a Invalid String. Please try again.");  
            };
    };
    
    //Main Code
    var dateoneprmpt= prompt("Please enter the first Date. Enter as:", "MM/DD/YYYY");
    var datetwoprmpt= prompt("Please enter the second Date. Enter as:", "MM/DD/YYYY");
    var datediffprmpt= prompt("What do you want to do?", "Compute in Days or Hours?")
    
    var totalTime= thedates(dateoneprmpt,datetwoprmpt,datediffprmpt);
    console.log(totalTime ," is the amount of " , datediffprmpt , " it took for someone somewhere to travel from point A to B.");
    