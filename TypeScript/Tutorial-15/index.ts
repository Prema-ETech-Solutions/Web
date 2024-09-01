class Employee {
    // Private property to store the employee's name
    private _fullName: string = '';

    // Getter method for the fullName property
    public get fullName(): string {
        console.log('Getting the full name...');
        return this._fullName;
    }

    // Setter method for the fullName property
    public set fullName(newName: string) {
        console.log('Setting the full name...');
        if (newName && newName.length > 3) {
            this._fullName = newName;
        } else {
            console.log('Name is too short, must be longer than 3 characters.');
        }
    }
}

// Instantiate the Employee class
const employee = new Employee();

// Using the setter to assign a value
employee.fullName = 'John Doe'; // Output: Setting the full name...

// Using the getter to retrieve the value
console.log(employee.fullName); // Output: Getting the full name... John Doe

// Attempting to set a name that is too short
employee.fullName = 'JD'; // Output: Setting the full name... Name is too short, must be longer than 3 characters.

// Explanation:
// Private Property (_fullName):

// The property _fullName is private, meaning it can only be accessed within the class Employee.
// The underscore prefix _ is a convention used to indicate that the property is private.
// Getter Method (get fullName):

// The get keyword defines a getter method fullName that returns the value of the private property _fullName.
// When you access employee.fullName, the getter is invoked, allowing you to retrieve the value of _fullName while potentially adding additional logic (e.g., logging).
// Setter Method (set fullName):

// The set keyword defines a setter method fullName that sets the value of the private property _fullName.
// When you assign a value to employee.fullName, the setter is invoked. The setter can include validation logic, such as checking if the provided name is longer than 3 characters before assigning it to _fullName.
// Usage:

// The setter is used when you assign a value to employee.fullName, and the getter is used when you retrieve the value of employee.fullName.
// Getter and setter methods provide controlled access to class properties, allowing you to encapsulate data and apply additional logic when getting or setting values. This is a key aspect of object-oriented programming in TypeScript, helping to maintain data integrity and control how properties are accessed and modified.
