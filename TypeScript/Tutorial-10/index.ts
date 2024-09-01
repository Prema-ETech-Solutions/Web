// Generic Function
function identity<T>(arg: T): T {
    return arg;
}

let result1 = identity<number>(5); // Type is 'number'
let result2 = identity('Hello'); // TypeScript infers type 'string'

// Generic Function with Arrays
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

let firstNumber = getFirstElement([1, 2, 3]); // Type is 'number'
let firstString = getFirstElement(['apple', 'banana', 'cherry']); // Type is 'string'

// Generic Class
class Box<T> {
    contents: T;

    constructor(value: T) {
        this.contents = value;
    }

    getContents(): T {
        return this.contents;
    }
}

let numberBox = new Box<number>(123);
console.log(numberBox.getContents()); // Output: 123

let stringBox = new Box<string>('Hello');
console.log(stringBox.getContents()); // Output: Hello

// Generic Interface
interface Pair<T, U> {
    first: T;
    second: U;
}

let pair: Pair<string, number> = {
    first: 'Alice',
    second: 30
};

console.log(pair.first); // Output: Alice
console.log(pair.second); // Output: 30

// Generic Function with Constraints
function logLength<T extends { length: number }>(arg: T): void {
    console.log(arg.length);
}

logLength('Hello'); // Output: 5
logLength([1, 2, 3]); // Output: 3
// logLength(10); // Error: Argument of type '10' is not assignable to parameter of type '{ length: number; }'.

// Generic Function with Default Type Parameter
function createArray<T = string>(length: number, value: T): T[] {
    return Array(length).fill(value);
}

let stringArray = createArray(3, 'hello'); // Type is 'string[]'
let numberArray = createArray<number>(3, 5); // Type is 'number[]'
