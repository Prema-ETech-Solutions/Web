// Base class: Animal
class Animal {
    public name: string; // Public: accessible everywhere
    protected age: number; // Protected: accessible within the class and its subclasses
    private species: string; // Private: accessible only within the class

    constructor(name: string, age: number, species: string) {
        this.name = name;
        this.age = age;
        this.species = species;
    }

    // Public method
    public getDetails(): string {
        return `${this.name} is a ${this.species} aged ${this.age}.`;
    }

    // Protected method
    protected getAge(): number {
        return this.age;
    }

    // Private method
    private getSpecies(): string {
        return this.species;
    }
}

// Derived class: Dog extends Animal
class Dog extends Animal {
    private breed: string;

    constructor(name: string, age: number, species: string, breed: string) {
        super(name, age, species);
        this.breed = breed;
    }

    // Public method
    public getBreedDetails(): string {
        return `${this.name} is a ${this.breed} aged ${this.getAge()}.`;
        // Can access protected method getAge() from the base class
    }

    // Attempting to access private members of the base class
    public getSpeciesDetails(): string {
        // return this.getSpecies(); // Error: Property 'getSpecies' is private and only accessible within class 'Animal'.
        return `Cannot access species directly since it's private.`;
    }
}

// Instantiating the Animal class
const animal = new Animal('Leo', 5, 'Lion');
console.log(animal.name); // Output: Leo
console.log(animal.getDetails()); // Output: Leo is a Lion aged 5.
// console.log(animal.age); // Error: Property 'age' is protected and only accessible within class 'Animal' and its subclasses.
// console.log(animal.species); // Error: Property 'species' is private and only accessible within class 'Animal'.

// Instantiating the Dog class
const dog = new Dog('Max', 3, 'Canine', 'Labrador');
console.log(dog.name); // Output: Max
console.log(dog.getBreedDetails()); // Output: Max is a Labrador aged 3.
// console.log(dog.age); // Error: Property 'age' is protected and only accessible within class 'Animal' and its subclasses.
// console.log(dog.species); // Error: Property 'species' is private and only accessible within class 'Animal'.
console.log(dog.getSpeciesDetails()); // Output: Cannot access species directly since it's private.

// Explanation:
// Public (public):

// The name property and getDetails() method are public, meaning they can be accessed from anywhere: inside the class, in derived classes, and outside the class.
// The name property can be accessed directly on both Animal and Dog instances.
// Protected (protected):

// The age property and getAge() method are protected, meaning they can be accessed within the class itself and by subclasses, but not from outside the class.
// The getBreedDetails() method in the Dog class accesses the age property using the getAge() method, demonstrating how protected members can be used in derived classes.
// Private (private):

// The species property and getSpecies() method are private, meaning they can only be accessed within the Animal class itself.
// Attempting to access the species property or getSpecies() method outside the Animal class, even in derived classes, will result in a compilation error.
// This example clearly illustrates how the public, protected, and private access modifiers control the visibility and accessibility of class members in TypeScript, ensuring encapsulation and controlling how data and methods are exposed.
