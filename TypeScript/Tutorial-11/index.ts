// Basic Interface
interface Person {
    name: string;
    age: number;
    greet(): string;
}

const user: Person = {
    name: 'Alice',
    age: 30,
    greet() {
        return `Hello, my name is ${this.name}.`;
    }
};

console.log(user.greet()); // Output: Hello, my name is Alice.

// Optional Properties
interface Car {
    brand: string;
    model: string;
    year?: number; // Optional property
}

const myCar: Car = {
    brand: 'Toyota',
    model: 'Camry'
};

// Readonly Properties
interface Book {
    readonly title: string;
    author: string;
}

const myBook: Book = {
    title: '1984',
    author: 'George Orwell'
};

// myBook.title = "Animal Farm"; // Error: Cannot assign to 'title' because it is a read-only property

// Extending Interfaces
interface Shape {
    color: string;
}

interface Circle extends Shape {
    radius: number;
}

const circle: Circle = {
    color: 'red',
    radius: 10
};

// Function Types
interface Calculate {
    (x: number, y: number): number;
}

const add: Calculate = (a, b) => a + b;
const subtract: Calculate = (a, b) => a - b;

console.log(add(5, 3)); tput: 8
console.log(subtract(5, 3)); // Output: 2

// Indexable Types
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ['Alice', 'Bob', 'Charlie'];

console.log(myArray[0]); // Output: Alice

// Hybrid Types
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {
       
   
        return `Start at ${start}`;
    };
       ''
   
    counter.interval = 123;
    counter.reset = function () {
        console.log('Reset!');
    };
    return counter;
}

let myCounter = getCounter();
console.log(myCounter(10)); // Output: Start at 10
myCounter.reset(); // Output: Reset!
console.log(myCounter.interval); // Output: 123
