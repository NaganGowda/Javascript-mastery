//fill method
// value, start, end
// It modifies the original array in place and returns the modified array

let a = [1, 2, 3, 4, 5];
a.fill(0, 2); //only start  1,2,0,0,0
a.fill(0); // only value [ 0,0,0,0,0 ]

console.log(a);

//splice method
// start, delete, insert

let a = [1, 2, 3, 4, 5];
//insert and delete
let deleted = a.splice(1, 2, 7, 8); //deleted 2 and 3 inserted with 7 8

console.log(a); //[ 1,7,8,4,5 ]
console.log(deleted); // returns deleted elements [ 2,3 ]

const numbers = [1, 2, 3, 4, 5];

// Remove elements starting from index 2 (inclusive)
const removedElements = numbers.splice(2);

console.log(numbers); // Output: [1, 2]
console.log(removedElements); // Output: [3, 4, 5]

const colors = ["red", "blue", "green"];

// Add elements starting from index 1
colors.splice(1, 0, "yellow", "orange");

console.log(colors); // Output: ['red', 'yellow', 'orange', 'blue', 'green']

//iterables
// if we can apply for of loop to it
//strings arrays are iterables
//object is not iterable

let a = "nagan";
for (let b of a) {
  console.log(b);
}

//array like objects
// which has length property and we can access using index
// eg: string

// sets
// it's iterable
// store data
// also have its own methods
// no index based access
// order is not guaranteed
// no duplicate elements

// Creating a new Set
const mySet = new Set();

// Adding elements to the Set
mySet.add(1);
mySet.add("hello");
mySet.add(true);

console.log(mySet); // Output: Set { 1, 'hello', true }
console.log(mySet.size); // Output: 3

// Checking if an element is in the Set
console.log(mySet.has("hello")); // Output: true
console.log(mySet.has(2)); // Output: false

// Deleting an element from the Set
mySet.delete(1);

console.log(mySet); // Output: Set { 'hello', true }

// Iterating over the Set
for (let item of mySet) {
  console.log(item);
}

console.log(mySet.size); // checks size just like length property

//running for of loop on set
const mySet = new Set([1, 2, 3, 4, 5]);

for (let item of mySet) {
  console.log(item);
}
