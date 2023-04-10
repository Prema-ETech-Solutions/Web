// JavaScript functions are defined with the function keyword.

// You can use a function declaration or a function expression.

// Function Declarations
// Earlier in this tutorial, you learned that functions are declared with the following syntax:

// function functionName(parameters) {
  // code to be executed
// }

// Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

// Example
function myFunction__(a, b) {
  return a * b;
}



// Function Expressions
// A JavaScript function can also be defined using an expression.

// A function expression can be stored in a variable:

// Example
const x = function (a, b) {return a * b};
let z = x(4, 3);


// The Function() Constructor
// As you have seen in the previous examples, JavaScript functions are defined with the function keyword.

// Functions can also be defined with a built-in JavaScript function constructor called Function().

const myFunction_ = new Function("a", "b", "return a * b");

x = myFunction_(4, 3);


// You actually don't have to use the function constructor. The example above is the same as writing:

// Example
const myFunction = function (a, b) {return a * b};

x = myFunction(4, 3);


// Arrow Functions
// Arrow functions allows a short syntax for writing function expressions.

// You don't need the function keyword, the return keyword, and the curly brackets.

// Example
// ES5
var y = function(x, y) {
  return x * y;
}

// ES6
const y = (x, y) => x * y;