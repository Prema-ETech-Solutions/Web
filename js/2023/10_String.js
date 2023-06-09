// JavaScript strings are for storing and manipulating text.

// A JavaScript string is zero or more characters written inside quotes.

let text = "John Doe";
// You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

// Example
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)


// Escape Character
// Because strings must be written within quotes, JavaScript will misunderstand this string:

text = "We are the so-called \"Vikings\" from the north.";
console.log(length)


// Six other escape sequences are valid in JavaScript:

//  Code	    Result
//  \b	        Backspace
//  \f	        Form Feed
//  \n	        New Line
//  \r	        Carriage Return
//  \t	        Horizontal Tabulator
//  \v	        Vertical Tabulator


// JavaScript Strings as Objects
// Normally, JavaScript strings are primitive values, created from literals:
let y = new String("John");
console.log(y)
