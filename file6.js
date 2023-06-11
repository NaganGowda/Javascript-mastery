//object destructuring
let person = {
  name: "John",
  age: 30,
  city: "New York",
};

let { name, age, city } = person;

console.log(name); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York

let person = {
  name: "John",
  age: 30,
};

let { name, age, city = "New York" } = person; //default pair

console.log(name); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York (default value)

//if we want to change the variable names don't want to use key name provided
// in the object by default they are the new variable names
let person = {
  name: "John",
  age: 30,
  city: "New York",
  place: "somewhere",
  name2: "white",
};

let { name: personName, age: personAge, city: personCity, ...rest } = person;

console.log(personName); // Output: John
console.log(personAge); // Output: 30
console.log(personCity); // Output: New York
console.log(rest); // remaining pairs will be here in this Object using rest parameter

//objects inside array

let people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
];

// console.log(people)

for (let user of people) {
  console.log(user); //entire obj will be printed
  console.log(user.age); //age will be printed
  console.log(user.name); //name will be printed
}

//nested destructuring

let people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Bob", age: 35 },
];

// console.log(people)

const [{ name }, , { age }] = people; // here i want name from 1st Object
// and age from 3rd obj and 2nd one is skipped
console.log(name);
console.log(age);

const [{ name: fname }, , { age: fage }] = people;
// i want to change variable name to something else

console.log(fname);
console.log(fage);
