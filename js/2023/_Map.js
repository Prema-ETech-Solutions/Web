// JavaScript Maps

// Method	        Description
// new Map()	    Creates a new Map
// set()	        Sets the value for a key in a Map
// get()	        Gets the value for a key in a Map
// delete()	        Removes a Map element specified by the key
// has()	        Returns true if a key exists in a Map
// forEach()	    Calls a function for each key/value pair in a Map
// entries()	    Returns an iterator with the [key, value] pairs in a Map
// Property	        Description
// size	            Returns the number of elements in a Map

// How to Create a Map
// You can create a JavaScript Map by:

// Passing an Array to new Map()
// Create a Map and use Map.set()

// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruits);
console.log(fruits.get("apples"));

fruits.set("car", 200);
console.log(fruits);