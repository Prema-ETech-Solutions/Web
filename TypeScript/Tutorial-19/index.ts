
// Type safety in TypeScript ensures that variables and expressions are used in a way that aligns with their intended types. Type guards, particularly typeof guards, are a mechanism that TypeScript uses to refine or "narrow" the type of a variable within a particular scope, allowing for safer and more predictable code.

// Here's a block of code demonstrating type safety with typeof guards and how TypeScript narrows types:


// Function to handle different types of input
function processValue(value: string | number | boolean) {
    // TypeScript narrows down to 'string' if 'typeof value' is 'string'
    if (typeof value === "string") {
        console.log(`String value: ${value.toUpperCase()}`);
    }
    // TypeScript narrows down to 'number' if 'typeof value' is 'number'
    else if (typeof value === "number") {
        console.log(`Number value: ${value.toFixed(2)}`);
    }
    // TypeScript narrows down to 'boolean' if 'typeof value' is 'boolean'
    else if (typeof value === "boolean") {
        console.log(`Boolean value: ${value ? "True" : "False"}`);
    } else {
        // TypeScript recognizes that all cases have been handled, so this block is unreachable.
        console.log("Unknown type");
    }
}

// Testing with different types
processValue("Hello, TypeScript!"); // Output: String value: HELLO, TYPESCRIPT!
processValue(42);                    // Output: Number value: 42.00
processValue(true);                  // Output: Boolean value: True

// Type narrowing with custom type guards
function isString(value: any): value is string {
    return typeof value === "string";
}

function processUnknownValue(value: unknown) {
    if (isString(value)) {
        // Here, TypeScript knows 'value' is a 'string' due to the custom type guard
        console.log(`This is a string: ${value.toLowerCase()}`);
    } else {
        console.log("This is not a string.");
    }
}

// Testing the custom type guard
processUnknownValue("Hello again!"); // Output: This is a string: hello again!
processUnknownValue(123);            // Output: This is not a string.





// Explanation:
// Type Guards with typeof:

// The typeof operator returns a string that indicates the type of a variable at runtime.
// In the processValue function, TypeScript uses typeof to check the type of the value parameter. Based on the result, TypeScript narrows the type of value within each if block to string, number, or boolean, respectively.
// This allows for type-safe operations like toUpperCase for strings and toFixed for numbers, which would not be safe on other types.
// Custom Type Guards:

// Custom type guards allow you to create your own functions that help TypeScript narrow types.
// The isString function returns a boolean, but its return type is specified as value is string, telling TypeScript that if isString(value) returns true, then value should be considered a string within that scope.
// In processUnknownValue, the isString function is used to check if the unknown value is a string, allowing for type-safe string operations.
// Type Narrowing:

// TypeScript's ability to "narrow" the type of a variable within a specific scope based on checks like typeof, instanceof, or custom type guards is what allows for type-safe code.
// Once TypeScript has narrowed a type, it will enforce that narrowed type within that scope, preventing errors and allowing the use of specific methods and properties that are appropriate for that type.
// Key Points:
// Type Safety: Ensures that variables and operations are used correctly according to their types, reducing runtime errors.
// Type Narrowing: The process by which TypeScript refines the type of a variable within a particular block of code based on checks.
// typeof Guards: A common way to narrow types based on primitive types like string, number, boolean, etc.
// Custom Type Guards: User-defined functions that help TypeScript narrow types in more complex situations.
// By using typeof guards and other type guards, TypeScript developers can write safer, more predictable code, leveraging the benefits of static type checking while still maintaining flexibility in handling different types.




