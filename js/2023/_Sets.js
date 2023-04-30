// Essential Set Methods
// Method	Description
// new Set()	Creates a new Set
// add()	Adds a new element to the Set
// delete()	Removes an element from a Set
// has()	Returns true if a value exists in the Set
// forEach()	Invokes a callback for each element in the Set
// values()	Returns an iterator with all the values in a Set
// Property	Description
// size	Returns the number of elements in a Set

// How to Create a Set
// You can create a JavaScript Set by:

// Passing an Array to new Set()
// Create a new Set and use add() to add values
// Create a new Set and use add() to add variables

// The new Set() Method
// Pass an Array to the new Set() constructor:
const letters = new Set(["a","b","c"]);
console.log(letters);
// The add() Method
letters.add("d");
console.log(letters);