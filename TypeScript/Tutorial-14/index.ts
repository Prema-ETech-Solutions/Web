// A basic class using shorthand properties
class Person {
    // Shorthand properties for constructor parameters
    constructor(public name: string, private age: number, protected job: string) {}

    // Method to describe the person
    public describe(): string {
        return `${this.name} is ${this.age} years old and works as a ${this.job}.`;
    }

    // Method to get the age (private property)
    public getAge(): number {
        return this.age;
    }

    // Method to get the job (protected property)
    public getJob(): string {
        return this.job;
    }
}

// Instantiate the Person class
const person = new Person('Alice', 30, 'Engineer');

console.log(person.name); // Output: Alice (public property, accessible)
console.log(person.describe()); // Output: Alice is 30 years old and works as an Engineer.
console.log(person.getAge()); // Output: 30 (accessed through a public method)
// console.log(person.age); // Error: Property 'age' is private and only accessible within class 'Person'.
// console.log(person.job); // Error: Property 'job' is protected and only accessible within class 'Person' and its subclasses.

// Explanation:
// Shorthand Properties:

// Instead of declaring properties and then assigning them in the constructor, TypeScript allows you to declare and assign them directly in the constructor parameters using the shorthand syntax.
// In the Person class, the properties name, age, and job are declared and initialized in the constructor using the shorthand syntax:
// public name: string: Creates a public property name and initializes it.
// private age: number: Creates a private property age and initializes it.
// protected job: string: Creates a protected property job and initializes it.
// Accessing Properties:

// name: A public property, so it can be accessed directly from outside the class.
// age: A private property, so it can only be accessed within the class itself. In this example, getAge() is a public method used to retrieve the age.
// job: A protected property, so it can only be accessed within the class and its subclasses. In this example, getJob() is a public method used to retrieve the job.
// Shorthand properties in TypeScript classes streamline the code, making it more concise by eliminating the need to explicitly declare and assign properties in the constructor.
