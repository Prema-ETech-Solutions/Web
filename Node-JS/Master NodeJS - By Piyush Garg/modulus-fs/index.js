const fs = require("fs");

// Sync Write
fs.writeFileSync("Sync.txt", "Hello from Node.js Sync");
// Async Write
fs.writeFile("Async.txt", "Hello from Node.js Async", (err) => {
    if (err) throw err;
});


// Async Read
fs.readFile("Dummy another.txt", "utf-8", (err, result) => {
    if (err) throw err;

    // console.log("\n\n\nAsync Read");
    // console.log(result);
});


// Sync Read
const rs = fs.readFileSync("Dummy.txt", "utf-8");
// console.log("Sync Read");
// console.log(rs);



// Async Append
fs.appendFile("Async Append.txt", "Hello from Node.js Async Append\n", (err) => {
    if (err) throw err;

});

// Sync Append
fs.appendFileSync("Sync Append.txt", "Hello from Node.js Sync Append\n");

