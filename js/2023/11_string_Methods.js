// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

// JavaScript String Length
// The length property returns the length of a string:

let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)


// Extracting String Parts
// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)


// JavaScript String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).

text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part)

part = text.slice(7);
console.log(part)


part = text.slice(-12);
console.log(part)


part = text.slice(-12, -6);
console.log(part)

// JavaScript String substring()
// substring() is similar to slice().

// The difference is that start and end values less than 0 are treated as 0 in substring().

part = text.substring(7, 13);
console.log(part)

part = text.substr(7, 6);
console.log(part)


// Replacing String Content
// The replace() method replaces a specified value with another value in a string:

text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText)


text = "Please visit Microsoft and Microsoft!";
newText = text.replace("Microsoft", "W3Schools");
console.log(newText)


text = "Please visit Microsoft!";
newText = text.replace("MICROSOFT", "W3Schools");
console.log(newText)


text = "Please visit Microsoft!";
newText = text.replace(/MICROSOFT/i, "W3Schools");
console.log(newText)

// https://www.w3schools.com/js/js_string_methods.asp