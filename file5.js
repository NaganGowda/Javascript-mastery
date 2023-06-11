// array destructuring

let myArray = ["na", "pa", "sa", "hh", "aa"];

let [a, b, c] = myArray; //here na is assigned to a , pa is assigned to b , sa is assigned to c
console.log(a, b, c);

let [a, b] = myArray; //only na and pa are assigned rest are ignored
console.log(a, b);

let [a, , c] = myArray; //skipped pa, a=na and c=sa skipped 2nd element
console.log(a, c);

let [a, b, ...newArray] = myArray; //here spread operator used to
console.log(a, b, newArray); // assign rest elements to that array after a and b

let numbers = [1, 2, 3, 4, 5];

let [a, , c, ...rest] = numbers;

console.log(a); // Output: 1 here 2 is skipped
console.log(c); // Output: 3
console.log(rest); // Output: [4, 5]

// //Objects reference type
// //arrays are good but not sufficient
// //for real world data
// //object store ket value pairs
// //object don't have index

// //how to create object
const person = {
  name: "nagan",
  age: 27,
  place: "bangalore", //here we can add quotes or not doesn't matter
  hobbies: ["coding", "sports", "reading"],
  "age off": 35, //to access this we have to use bracket notation
  // we can't use dot notation we will get an error
};
console.log(person);

//how to access data from  Object
console.log(person.name); //dot notation
console.log(person["name"]); // bracket notation here name is placed
//in quotes as a string but in object it is not that is because keys in javascript
// by default are in strings if don't use quotes we will get an error
console.log(person.age);
console.log(person.place);
console.log(person.hobbies);

//how to add key value pair to object
person.gender = "male";
let key = "mailid";
person[key] = "n@gmail.com";

// //running loop in object

for (let key in person) {
  console.log(key); // only keys will print
}

for (let key in person) {
  console.log(`${key}: ${person[key]}`); // template string is used
}

for (let key in person) {
  console.log(key, " : ", person[key]);
}

for (let key in person) {
  console.log(key + " : " + person[key]);
}

console.log(Object.keys(person), typeof Object.keys(person));
// prints object keys , type is object

const val = Array.isArray(Object.keys(person)); //checks is it an array
console.log(val); //output is true

for (let key of Object.keys(person)) {
  console.log(key); // gives keys of an object
}

for (let key of Object.keys(person)) {
  console.log(person[key]); // gives values of an object
}

// Computed properties
//allows you to dynamically define object property names using expressions or variables.
//Instead of using a fixed property name
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

let person = {
  [key1]: value1,
  [key2]: value2,
};

const obj = {};

obj[key1] = value1;
obj[key2] = value2;
console.log(obj);

const obj = {
  key1: "value1",
  key2: "value2",
  key1: "value3", // duplicate key in this case last key value is considered
};

console.log(obj);

//spread operator in object
const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = {
  key3: "value3",
  key4: "value4",
};

const newObj = { ...obj1, ...obj2, key5: "value5" };

console.log(newObj);
