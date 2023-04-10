// JavaScript Loops

// Loops are handy, if you want to run the same code over and over again, each time with a different value.

// Often this is the case when working with arrays:
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "\n";
}
console.log(text);
text = "";
for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "\n";
}
console.log(text);

// Different Kinds of Loops
// JavaScript supports different kinds of loops:

// for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

// The For Loop
// The for statement creates a loop with 3 optional expressions:

// for (expression 1; expression 2; expression 3) {
//   //code block to be executed
// }

// The For In Loop
// The JavaScript for in statement loops through the properties of an Object:

// for (key in object) {
//     // code block to be executed
//   }

const person = { fname: "John", lname: "Doe", age: 25 };

text = "";
for (let x in person) {
  text += person[x] + "\n";
}
console.log(text);

// Example Explained
// The for in loop iterates over a person object
// Each iteration returns a key (x)
// The key is used to access the value of the key
// The value of the key is person[x]

// For In Over Arrays
// The JavaScript for in statement can also loop over the properties of an Array:

// Syntax
// for (variable in array) {
//   code
// }

const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x] + "\n";
}
console.log(txt);

// The For Of Loop
// The JavaScript for of statement loops through the values of an iterable object.

// It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

// for (variable of iterable) {
//     // code block to be executed
//   }

// variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.

// iterable - An object that has iterable properties.

// Looping over an Array
// const cars = ["BMW", "Volvo", "Mini"];

text = "";
for (let x of cars) {
  text += x + " ";
}

console.log(text)


// Looping over a String
// Example
let language = "JavaScript";

text = "";
for (let x of language) {
    text += x;
}
console.log(text)