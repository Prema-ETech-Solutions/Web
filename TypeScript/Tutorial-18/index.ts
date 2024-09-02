// Example using an Interface
interface Person {
    name: string;
    age: number;
    greet(): string;
}

const person1: Person = {
    name: "Alice",
    age: 25,
    greet() {
        return `Hello, my name is ${this.name}.`;
    },
};

console.log(person1.greet()); // Output: Hello, my name is Alice.

// Example using a Type Alias
type Animal = {
    species: string;
    age: number;
};

const dog: Animal = {
    species: "Dog",
    age: 5,
};

console.log(dog.species); // Output: Dog

// Extending an Interface
interface Employee extends Person {
    jobTitle: string;
}

const employee1: Employee = {
    name: "Bob",
    age: 30,
    jobTitle: "Engineer",
    greet() {
        return `Hello, my name is ${this.name}, and I am an ${this.jobTitle}.`;
    },
};

console.log(employee1.greet()); // Output: Hello, my name is Bob, and I am an Engineer.

// Intersection Types (with Type Alias)
type Canine = {
    bark: () => string;
};

type GuardDog = Animal & Canine;

const myGuardDog: GuardDog = {
    species: "Dog",
    age: 4,
    bark: () => "Woof!",
};

console.log(myGuardDog.bark()); // Output: Woof!





// // Differences: Interfaces can be merged
// interface Person {
//     height: number; // Added new property
// }

// const person2: Person = {
//     name: "Charlie",
//     age: 28,
//     height: 175,
//     greet() {
//         return `Hello, my name is ${this.name}, and I am ${this.height}cm tall.`;
//     },
// };

// console.log(person2.greet()); // Output: Hello, my name is Charlie, and I am 175cm tall.
// 
// Type Aliases cannot be merged
// type Animal = {
//     weight: number; // Error: Duplicate identifier 'Animal'.
// };





// Key Differences:
// Declaration:

// interface is used to define a structure for objects, classes, or functions.
// type can define primitives, unions, tuples, intersections, and object shapes.
// Extending:

// Interfaces: Can extend other interfaces using the extends keyword.
// Types: Can create intersection types by combining multiple types using the & operator.
// Merging:

// Interfaces: Can be reopened and merged, meaning you can define the same interface multiple times, and TypeScript will merge the definitions.
// Types: Cannot be merged. If you try to define a type alias with the same name twice, TypeScript will throw an error.
// Usage:

// Interfaces: Often used when defining the shape of objects or classes, especially in public APIs and libraries.
// Types: Used for more complex type definitions, such as unions, intersections, and function signatures.
// When to Use:
// Use interface when you want to define a contract for objects, especially when you expect the structure to evolve or be extended.
// Use type when you need to define more complex types, such as unions, intersections, or when defining a type for primitives, arrays, or tuples.
// Understanding these differences helps in choosing the right tool for defining types in your TypeScript projects. Both types and interfaces are powerful and flexible, and they can often be used interchangeably, but knowing when and how to use each can make your code more maintainable and expressive.






