// Basic Class with Constructor
class Person {
    private name: string; // Private property, not accessible outside the class
    protected age: number; // Protected property, accessible in derived classes

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Public method
    public greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }

    // Getter for 'name'
    public getName(): string {
        return this.name;
    }

    // Setter for 'name'
    public setName(name: string): void {
        this.name = name;
    }
}

// Inheritance: Employee extends Person
class Employee extends Person {
    private position: string;

    constructor(name: string, age: number, position: string) {
        super(name, age); // Call the parent class constructor
        this.position = position;
    }

    // Override greet method
    public greet(): string {
        return `${super.greet()} I work as a ${this.position}.`;
    }

    // Static method
    public static company(): string {
        return 'Tech Corp';
    }
}

// Instantiate the Person class
const person = new Person('Alice', 30);
console.log(person.greet()); // Output: Hello, my name is Alice and I am 30 years old.

// Instantiate the Employee class
const employee = new Employee('Bob', 40, 'Developer');
console.log(employee.greet()); // Output: Hello, my name is Bob and I am 40 years old. I work as a Developer.

// Accessing and modifying properties using getters and setters
console.log(employee.getName()); // Output: Bob
employee.setName('Charlie');
console.log(employee.getName()); // Output: Charlie

// Calling static method
console.log(Employee.company()); // Output: Tech Corp

// Explanation:
// Class and Constructor:

// The Person class has a constructor to initialize name and age properties.
// The Employee class extends Person and adds an additional position property.
// Access Modifiers:

// private: The name property is private, meaning it can only be accessed within the Person class.
// protected: The age property is protected, allowing access within Person and any class that inherits from Person.
// public: The greet() method is public, so it can be accessed from anywhere.
// Inheritance:

// The Employee class extends the Person class, inheriting its properties and methods.
// super() is used to call the parent class constructor.
// Methods:

// greet(): Both Person and Employee have a greet() method, but the Employee class overrides it to include the position.
// Getters and Setters:

// The getName() and setName() methods allow controlled access to the private name property.
// Static Methods:

// The Employee class has a static method company() that can be called without creating an instance of the class.
// This example showcases the fundamental OOP principles in TypeScript, demonstrating how classes, inheritance, and encapsulation can be used to structure code effectively.
