// An array is a special variable, which can hold more than one value:

// Why Use Arrays?
// If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

// let car1 = "Saab";
// let car2 = "Volvo";
// let car3 = "BMW";
// However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

// The solution is an array!

// An array can hold many values under a single name, and you can access the values by referring to an index number.

// Creating an Array
// Using an array literal is the easiest way to create a JavaScript Array.

// Syntax:

// const array_name = [item1, item2, ...];

// const cars = ["Saab", "Volvo", "BMW"];
// const cars = new Array("Saab", "Volvo", "BMW");
const cars = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";

console.log(cars);

// Accessing Array Elements
// You access an array element by referring to the index number:
let car = cars[0];
console.log(car);

// Changing an Array Element
// This statement changes the value of the first element in cars:

cars[0] = "Opel";
console.log(car);

// Array Properties and Methods
// The real strength of JavaScript arrays are the built-in array properties and methods:

console.log(
  cars.length // Returns the number of elements
);
console.log(
  cars.sort() // Sorts the array
);


// When to Use Arrays. When to use Objects.
// JavaScript does not support associative arrays.
// You should use objects when you want the element names to be strings (text).
// You should use arrays when you want the element names to be numbers.


// Converting Arrays to Strings
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// The join() method also joins all array elements into a string.

// It behaves just like toString(), but in addition you can specify the separator:

// Example
console.log(fruits.join(" 0 "));

// Popping and Pushing
// When you work with arrays, it is easy to remove elements and add new elements.

// This is what popping and pushing is:

// Popping items out of an array, or pushing items into an array.

// JavaScript Array pop()
// The pop() method removes the last element from an array:

// Example
fruits.pop();
console.log(fruits);


// JavaScript Array push()
// The push() method adds a new element to an array (at the end):
fruits.push("Kiwi");
console.log(fruits);


// Shifting Elements
// Shifting is equivalent to popping, but working on the first element instead of the last.

// JavaScript Array shift()
// The shift() method removes the first array element and "shifts" all other elements to a lower index.

console.log(fruits);
fruits.shift();
console.log(fruits);

// JavaScript Array unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

// Example

console.log(fruits);
fruits.unshift("Lemon");
console.log(fruits);


// https://www.w3schools.com/js/js_array_methods.asp



// Sorting an Array
// The sort() method sorts an array alphabetically:
console.log(fruits.sort());


// Reversing an Array
// The reverse() method reverses the elements in an array.

// You can use it to sort an array in descending order:

console.log(fruits.sort());
console.log(fruits.reverse());




// Numeric Sort
// By default, the sort() function sorts values as strings.

// This works well for strings ("Apple" comes before "Banana").

// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

// Because of this, the sort() method will produce incorrect result when sorting numbers.

// You can fix this by providing a compare function:



const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort(function(a, b){return a - b}));
console.log(points.sort(function (a, b) { return b - a }));



// https://www.w3schools.com/js/js_array_sort.asp




// The forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  // txt += value + "<br>";
  console.log(value);
  console.log(index);
  console.log();
}
console.log();
console.log();


// JavaScript Array map()
// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.

// This example multiplies each array value by 2:



const numbers1 = [1,4,5,6,7,7,7,5,4,2];
const numbers2 = numbers1.map(myFunction1);

function myFunction1(value) {
  console.log(value);
}

// https://www.w3schools.com/js/js_array_iteration.asp

