// JavaScript Number Methods
// These number methods can be used on all JavaScript numbers:

// Method	Description
// toString()	Returns a number as a string
// toExponential()	Returns a number written in exponential notation
// toFixed()	Returns a number written with a number of decimals
// toPrecision()	Returns a number written with a specified length
// ValueOf()	Returns a number as a number

// The toFixed() Method
// toFixed() returns a string, with the number written with a specified number of decimals:
let x = 12.959;
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(4));
console.log(x.toFixed(6));
console.log();
console.log();
console.log();

// The toPrecision() Method
// toPrecision() returns a string, with a number written with a specified length:
console.log(x.toPrecision());
console.log(x.toPrecision(2));
console.log(x.toPrecision(4));
console.log(x.toPrecision(6));



console.log();
console.log();
console.log();
console.log();
console.log();
// The Number() Method
// The Number() method can be used to convert JavaScript variables to numbers:
// Example
console.log(Number(true)    )
console.log(Number(false)   )
console.log(Number("10")    )
console.log(Number("  10")  )
console.log(Number("10  ")  )
console.log(Number(" 10  ") )
console.log(Number("10.33") )
console.log(Number("10,33") )
console.log(Number("10 33") )
console.log(Number("John")  )