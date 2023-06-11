// intro to arrays
// ordered collection of items
//accepts any type of datatype
//arrays are mutable
let a = [1, 2, 3, 4, 5];
let b = [2.8, 1, 5, "hello", null, undefined];
let c = [1, 2, [5, 4, 5, 8]];

console.log(c[2]);

//push
let fruits = ["apple", "grape", "orange"];
console.log(fruits);
fruits.push("banana"); // banana will be added to original array adds element at the end
console.log(fruits);

//pop

let fruits = ["apple", "grape", "orange"];
console.log(fruits);
fruits.pop(); // remove last element in the array also returns the popped element
console.log(fruits);

//shift and unshift
let fruits = ["apple", "grape", "orange"];
let shiftedFruit = fruits.shift(); //removes items at the start
console.log(shiftedFruit); // "apple"
console.log(fruits); // ["grape", "orange"]

let fruits = ["grape", "orange"];
let newLength = fruits.unshift("apple", "banana"); //adds element at the start
console.log(newLength); // 4
console.log(fruits); // ["apple", "banana", "grape", "orange"]

//push and pop is faster than shift and unshift
//difference between primitive and reference type
// Primitive types
let a = 5;
let b = a; // Copy of the value is created
b = 10;
console.log(a); // 5 (unchanged)
console.log(b); // 10

// Reference types
let arr1 = [1, 2, 3];
let arr2 = arr1; // Reference to the same array
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] (modified)
console.log(arr2); // [1, 2, 3, 4] (modified)
//In the example above, when b is assigned the value of a, a separate copy of the value 5 is created. Therefore, modifying b does not affect the value of a. However, when arr2 is assigned the value of arr1, both variables hold a reference to the same array object. Modifying the array through either variable affects both references, as they both point to the same underlying object in memory.

// cloning an array
//spread operator
let originalArray = [1, 2, 3];
let clonedArray = [...originalArray];

let a = "Hello";
let b = [...a];
console.log(b); //output will be [ H,e,l,l,o ]

// slice method
let originalArray = [1, 2, 3];
let clonedArray = originalArray.slice();

//concat
let originalArray = [1, 2, 3];
let clonedArray = originalArray.concat();

//from method
let originalArray = [1, 2, 3];
let clonedArray = Array.from(originalArray);

//for loop

let array_1 = [1, 2, 3, 4, 5, 6, 7];

for (let a of array_1) {
  console.log(a); // gives values of an array
}

for (let a in array_1) {
  console.log(a); // gives index values of elements in an array
}

//for of loop and traditional for loop are most used

//traditional for loop

for (let i = 0; i < 10; i++) {
  console.log(i); // gives output from 0 to 9 we can i initial value and final value also increment value
}

for (let i = 2; i <= 20; i += 2) {
  console.log(i); // i starts from 2 ends at 20 and increment by 2
}
