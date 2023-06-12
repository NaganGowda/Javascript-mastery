//block and function scope
//let and const are block scope
//available to access only in that block

//var is function scope
// we can access anywhere irrespective of where it is undefined

//blocks are enclosed in curly braces

{
  // block scope
  let a = 5;
  const b = 6;
  var c = 7;
  console.log(b);
  console.log(a);
  console.log(c);
}
console.log(b); //ReferenceError
console.log(a); //ReferenceError
console.log(c); //output 7

//default parameters
function getsum(b = 2, a = 8) {
  // b is first and a is second so if only one argument
  //is passed it is assigned to b not a
  //here values are assigned incase no values are passed
  // to this default values will be assigned
  // order of arguments matters here

  console.log(a + b);
}

getsum(4);

// rest parameter
function calculateSum(a, ...numbers) {
  //here (...number) is rest parameter we
  // give any name after ...
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  console.log(a + sum);
}

calculateSum("Total: ", 1, 2, 3, 4, 5);

// parameter destructuring

function printUserDetails({ name, age, email }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`Email: ${email}`);
}

const user = {
  name: "John Doe",
  age: 25,
  email: "john.doe@example.com",
};

printUserDetails(user);

//with arrays
function printNumbers([a, b, c]) {
  console.log(`First number: ${a}`);
  console.log(`Second number: ${b}`);
  console.log(`Third number: ${c}`);
}

const numbers = [1, 2, 3];

printNumbers(numbers);

//callback function
function myFunc() {
  console.log("hello");
}

function myFunc2(a) {
  console.log(a);
}

myFunc2(myFunc);

function myFunc() {
  console.log("hello");
}

function myFunc2(a) {
  a();
}

myFunc2(myFunc);

//function returning function
function myFunc() {
  function hello() {
    return "Hello world!";
  }
  return hello;
}

const val = myFunc();
console.log(val);
