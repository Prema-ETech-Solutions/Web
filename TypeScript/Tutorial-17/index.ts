// Abstract class: Shape
abstract class Shape {
    // Abstract method: must be implemented by derived classes
    abstract calculateArea(): number;

    // Non-abstract method: can be used by derived classes
    describe(): string {
        return "This is a shape.";
    }
}

// Derived class: Circle extends Shape
class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    // Implementing the abstract method from Shape
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Derived class: Rectangle extends Shape
class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    // Implementing the abstract method from Shape
    calculateArea(): number {
        return this.width * this.height;
    }
}

// Creating instances of the derived classes
const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.describe()); // Output: This is a shape.
console.log(`Area of the circle: ${circle.calculateArea()}`); // Output: Area of the circle: 78.53981633974483
console.log(rectangle.describe()); // Output: This is a shape.
console.log(`Area of the rectangle: ${rectangle.calculateArea()}`); // Output: Area of the rectangle: 50

// Trying to instantiate the abstract class directly will result in an error
// const shape = new Shape(); // Error: Cannot create an instance of an abstract class.


// Explanation:
// Abstract Class (Shape):

// An abstract class is a class that cannot be instantiated directly. It is meant to be subclassed by other classes.
// The Shape class in this example is an abstract class that provides a blueprint for other shapes. It contains both abstract and non-abstract methods.
// Abstract Method (calculateArea):

// The calculateArea method is declared as an abstract method using the abstract keyword. This means that any subclass of Shape must implement this method.
// Abstract methods do not have a body in the abstract class—they are intended to be overridden by derived classes.
// Non-Abstract Method (describe):

// The describe method is a regular method (non-abstract) within the Shape class. It provides a common functionality that can be used by all subclasses of Shape.
// This method is available to all instances of classes that extend Shape.
// Derived Classes (Circle and Rectangle):

// Both Circle and Rectangle extend the abstract class Shape and must implement the calculateArea method.
// Each class provides its own implementation of the calculateArea method based on the specific shape's properties.
// Instantiation:

// You cannot create an instance of an abstract class directly (new Shape() would result in an error).
// Instead, you create instances of classes that extend the abstract class (new Circle(radius) and new Rectangle(width, height)).
// Key Points:
// Abstract classes are used to define a common base class with abstract methods that must be implemented by derived classes.
// Abstract classes can also contain non-abstract methods that provide shared functionality across subclasses.
// Abstract methods serve as a template for subclasses, ensuring that certain methods are implemented by any derived class.
// This example demonstrates the concept of abstract classes and methods in TypeScript, showing how they enforce a common structure while allowing for specific implementations in derived classes.