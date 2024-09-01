class Circle {
    // Static property to store the value of Pi
    static pi: number = 3.14159;

    // Static method to calculate the area of a circle
    static calculateArea(radius: number): number {
        return this.pi * radius * radius;
    }

    // Instance property (non-static)
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    // Instance method to calculate the circumference of a circle
    calculateCircumference(): number {
        return 2 * Circle.pi * this.radius; // Accessing the static property using the class name
    }
}

// Accessing the static property without creating an instance of the class
console.log(Circle.pi); // Output: 3.14159

// Accessing the static method without creating an instance of the class
console.log(Circle.calculateArea(5)); // Output: 78.53975

// Creating an instance of the Circle class
const myCircle = new Circle(5);

// Accessing the instance method
console.log(myCircle.calculateCircumference()); // Output: 31.4159

// Attempting to access the static property from an instance (this will not work)
// console.log(myCircle.pi); // Error: Property 'pi' is a static member of type 'Circle'.

// Explanation:
// Static Property (static pi):

// The pi property is defined with the static keyword, making it a static property. This means that pi belongs to the class itself rather than to any instance of the class.
// You can access Circle.pi directly using the class name without needing to create an instance of the Circle class.
// Static Method (static calculateArea):

// The calculateArea method is defined with the static keyword, making it a static method. Like the static property, this method belongs to the class itself.
// You can call Circle.calculateArea(radius) directly using the class name, and it uses the static pi property to calculate the area of a circle.
// Instance Property (radius):

// The radius property is a non-static (instance) property. It is specific to each instance of the Circle class.
// To access or modify the radius property, you must create an instance of Circle using the new keyword.
// Instance Method (calculateCircumference):

// The calculateCircumference method is a non-static (instance) method that operates on the instance property radius.
// Even though calculateCircumference is an instance method, it can still access the static property pi by referring to it through Circle.pi.
// Key Points:
// Static members (properties and methods) belong to the class itself and can be accessed without creating an instance of the class.
// Instance members (properties and methods) belong to the instances of the class and require an instance to be accessed.
// Static members are useful when you need to store values or define functions that are common to all instances of the class.
// This example demonstrates how static properties and methods are used in TypeScript, providing a way to encapsulate shared data and behavior at the class level rather than at the instance level.
