// In JavaScript there are 5 different data types that can contain values:

// string
// number
// boolean
// object
// function
// There are 6 types of objects:

// Object
// Date
// Array
// String
// Number
// Boolean
// And 2 data types that cannot contain values:

// null
// undefined

console.log(`     
    "John"                      ${typeof "John"}
    3.14                        ${typeof 3.14} 
    NaN                         ${typeof NaN}
    false                       ${typeof false}
    [1, 2, 3, 4]                ${typeof [1, 2, 3, 4]} 
    { name: "John", age: 34 }   ${typeof { name: "John", age: 34 }} 
    new Date()                  ${typeof new Date()} 
    function () {}              ${typeof function () {}}
    myCar                       ${typeof myCar}
    null                        ${typeof null}`
);

// Primitive Data
// A primitive data value is a single simple data value with no additional properties and methods.

// The typeof operator can return one of these primitive types:

// string
// number
// boolean
// undefined


// The Data Type of typeof
// The typeofoperator is not a variable. It is an operator. Operators ( + - * / ) do not have any data type.

// But, the typeof operator always returns a string (containing the type of the operand).

// The constructor Property
// The constructor property returns the constructor function for all JavaScript variables.

// Example
console.log(
    `
    
    "John".constructor                ${"John".constructor              }  
    (3.14).constructor                ${(3.14).constructor              }  
    false.constructor                 ${false.constructor               }  
    [1,2,3,4].constructor             ${[1,2,3,4].constructor           }  
    {name:'John',age:34}.constructor  ${{name:'John',age:34}.constructor}  
    new Date().constructor            ${new Date().constructor          }  
    function () {}.constructor        ${function () {}.constructor      }  
`
);