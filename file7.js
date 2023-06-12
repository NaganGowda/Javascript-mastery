//functions
//function declaration
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("John"); // Output: Hello, John!

//function expression
const greet = function (name) {
  console.log("Hello, " + name + "!");
};

greet("John"); // Output: Hello, John!

// The main difference between function declarations and function expressions is the way they are hoisted. Function declarations are hoisted, meaning they are moved to the top of their scope and can be called before they are defined in the code. On the other hand, function expressions are not hoisted, and they must be defined before they are called.

function getindex(a, target) {
  for (let i = 0; i <= a.length; i++) {
    if (a[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(getindex([1, 2, 5, 4, 8, 78, 7, 9], 9));

// arrow function
const greet = (name) => {
  //when only one parameter is there we don't "()"
  console.log("Hello, " + name + "!");
};

greet("John"); // Output: Hello, John!

const isEve = (a, b) => a + b; //it is shorthand arrow function
console.log(isEve(4, 5));

const isEve = (a, b) => a + b;
console.log(isEve(4, 5));

const getStringSlice = (str) => {
  //arrow function
  return str.slice(2, 6);
};

const getStringSlice = (str) => str.slice(2, 6); //arrow function shorthand

function getStringSlice(str) {
  // function declaration
  return str.slice(2, 6);
}

const getStringSlice = function (str) {
  //functon expression
  return str.slice(2, 6);
};

// Example usage
console.log(getStringSlice("Hello, World!")); // Output: "llo,"
console.log(getStringSlice("JavaScript")); // Output: "vaSc"

//Hoisting
// function declaration is hoisted
// but functon expression and arrow function is not

// Hoisting is a behavior in JavaScript where function declarations and variable declarations are moved to the top of their containing scope during the compilation phase. This means that you can use functions or variables before they are declared in the code.
console.log(a);
let a = "Hello world!"; // ReferenceError{ Cannot access 'a' before initialization}

console.log(a);
var a = "Hello world!"; //output undefined

console.log(a);
let a = "Hello world!"; // ReferenceError{ Cannot access 'a' before initialization}

//function inside function

//it is called a "nested function" or an "inner function".
//This concept is known as "function inside function" or "function nesting".
function app() {
  const mul = (num1, num2) => num1 * num2;

  const sum = function (a, b) {
    return a + b;
  };

  function getsquare(a) {
    return a ** 2;
  }
  function myfunc() {
    console.log("world");
  }
  console.log("Hello"); //"Hello"
  myfunc(); // prints "world"
  console.log(mul(5, 4)); //20
  console.log(sum(5, 4)); // 9
  console.log(getsquare(5)); //25
}

app();
