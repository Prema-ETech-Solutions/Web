let age: any[] = [1, 2, 3, 4, 6, 'Hellp'];
let names: string[] = ['Hello', 'World'];
console.log(`${age}`);
console.log(`${names}`);
console.log(`${age.join('|')}`);

`${age.map((num) => {
    console.log(`${num} \n`);
})}`;

console.log(names.length);

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the filter method to create a new array with only even numbers
let evenNumbers: number[] = numbers.filter((num) => {
    return num % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
