
function myParseInt(str, redux) {
	redux = redux || 10;
	let res = 0;
	let isNegative = false;
	for (let i = 0; i < str.length; i++){
		if (i == 0 && str[i] == '-') {
			isNegative = true;
			continue;
		}

		let symbol = str[i].toLowerCase();
		if ((symbol < '0' || symbol > '9') && (symbol < 'a' || symbol > 'f'))
		{
			break;
		}
		res = res * redux + getCode(str[i]);
	}
	if (isNegative == true) {
		res = res * -1;
	}
	return res;
}
function getCode(symbol) {
	symbol = symbol.toLowerCase();
	const codeA = 'a'.charCodeAt();
	const res = symbol <= '9' ? +symbol : symbol.charCodeAt() - codeA + 10;
	return res;
}


function myToString(number, redux) {
	redux = redux || 10;
	
	let res = "";
	let isNegative = number < 0;
	number = Math.trunc(Math.abs(number));

	do {
		const digit = number % redux;
		
		const symbol = getSymbol(digit);
        res = symbol + res;
		number = Math.trunc(number / redux);
			
	} while (number);
	if (isNegative == true) {
		res = "-" + res;
	}
	return res;
}
 
function getSymbol(digit) {
	const codeA = 'a'.charCodeAt();
	const symbol = digit < 10? "" + digit : String.fromCharCode(digit - 10 + codeA);
	return symbol;
	
}

function myToFloatString(number) {
	 let	numberInt = Math.trunc(number);
	let numberFrac = Math.abs(number - numberInt);
	
	do {
		numberFrac =  numberFrac * 10;
	} while (numberFrac - Math.trunc(Math.abs(numberFrac)) != 0);

	let myIntString = myToString(numberInt);
	let myFracString = myToString(numberFrac);
	if (numberFrac != 0){
		
		 return(myIntString + "." + myFracString);
	}
	return myIntString;
}

console.log("negative number")

let myStr = myParseInt("-123");
console.log(myStr);

console.log("cut fractional part");

myStr = myParseInt("-123.5");
console.log(myStr);
myStr = myParseInt("-123m");
console.log(myStr);
myStr = myParseInt("155.25ts");
console.log(myStr);

console.log("*********************");
console.log("negative string"); 

let myNum = myToString(-123);
console.log(myNum);

myNum = myToString(-55.85);
console.log(myNum);
myNum = myToString(-80.02);
console.log(myNum);

console.log("*********************");
console.log("float string");

let myFloatStr = myToFloatString("5.55");
console.log(myFloatStr);
myFloatStr = myToFloatString("0.02");
console.log(myFloatStr);

myFloatStr = myToFloatString("-2.8");
console.log(myFloatStr);