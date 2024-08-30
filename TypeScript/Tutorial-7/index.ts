// Define a tuple with two elements: a string and a number
let person: [string, number];

person = ['Alice', 30]; // Valid assignment
// person = [30, "Alice"]; // Error: Type 'number' is not assignable to type 'string'

console.log(person); // Output: ["Alice", 30]

// Define a tuple with three elements: a string, a number, and a boolean
let employee: [string, number, boolean];

employee = ['Bob', 25, true]; // Valid assignment

console.log(employee); // Output: ["Bob", 25, true]

// Define a tuple where the third element is optional
let product: [string, number, boolean?];

product = ['Laptop', 1500]; // Valid, the boolean is optional
product = ['Laptop', 1500, true]; // Also valid

console.log(product); // Output: ["Laptop", 1500] or ["Laptop", 1500, true]

// Define a tuple where the last element can be multiple numbers
let scores: [string, ...number[]];

scores = ['John', 85, 90, 92]; // Valid assignment

console.log(scores); // Output: ["John", 85, 90, 92]

let book: [string, number, boolean] = ['TypeScript Guide', 300, true];

// Access elements by index
console.log(book[0]); // Output: "TypeScript Guide"
console.log(book[1]); // Output: 300
console.log(book[2]); // Output: true

// Destructure the tuple
let [title, pages, isAvailable] = book;
console.log(title); // Output: "TypeScript Guide"
console.log(pages); // Output: 300
console.log(isAvailable); // Output: true

type Point = [number, number, number];

// let origin: Point = [0, 0, 0];
let pointA: Point = [1, 2, 3];

console.log(origin); // Output: [0, 0, 0]
console.log(pointA); // Output: [1, 2, 3]
