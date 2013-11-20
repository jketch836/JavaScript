//alert("JavaScript works!");


//Functions


    //Problem 1
    var three = 3;
    var five  = 5;
    var sum3 = 0;
    var sum5 = 0;
    
    var mul35 = function (num3, num5, zero){
        var i=0;
    
        while (i < 1000) {
            i++;
            if (i % 3 == 0){
                //console.log (num3 + " x " + (i/3) + " = ", i);
                sum3 += i;
            };
    
            if (i % 5 == 0){ 
                //console.log (num5 + " x " + (i/5) + " = ", i);
                sum5 += i;
            };
        };
        console.log (sum3 , " is the total of the multiples of 3 under 1000.");
        console.log (sum5 , " is the total of the multiples of 5 under 1000.");
        console.log ("The sum of all the numbers is " , (sum3+sum5));
    };
    
    
    
    //Problem 2
    var fibArray = [];
    var fibEven = [];
    var i = 0;
    
    var fibonacciEven = function(fibonArg){
        fibonArg[0] = 0;
	fibonArg[1] = 1;
	for ( i = 2; i <= 35; i++) {
	    fibonArg[i] = fibonArg[i - 2] + fibonArg[i - 1];
	    fibEven.push(fibonArg[i]);
	};
	
	for (i = 0; i < fibEven.length; i++) {
		
	    while ( fibEven[i] % 2) {
		fibEven.splice(i, 1);
	    };	
	};
    return fibEven;

    };




//Main Code


    //Problem 1
    mul35(three, five);
    
    
    //Problem 2
    var fibTotal = fibonacciEven(fibEven);
    console.log("The Doctor traveled in the TARDIS and it landed on the side of a building and he saw the fibonacci sequence" ,fibTotal);
    console.log("It was spray painted on the side of an ancient store only known in old tales as Blockbuster.")