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
  console.log("Hello, " + name + "!");
};

greet("John"); // Output: Hello, John!
