//important array methods

//forEach method
const array = [1, 2, 3];
array.forEach(function (element, index) {
  console.log(element * 2, index); //it doesn't give new array
});

// map method
// gives new array so use return instead of console.log
const number = [1, 2, 3, 4, 5, 6];
function getsum(a) {
  return a * a;
}

console.log(number.map(getsum));

// filter method

const number = [1, 2, 3, 4, 5, 6, 7, 8];
function getEven(a) {
  return a % 2 === 0; //checks for even numbers and add that number to the array
  //only when value comes as true
}

console.log(number.filter(getEven)); //gives even numbers
// function declared somewhere and used here

console.log(
  number.filter((number) => {
    //gives odd numbers
    // function declared here only
    return number % 2 !== 0;
  })
);

//reduce method
const array = [1, 2, 3, 4, 5];
const sum = array.reduce(function (accumulator, element) {
  return accumulator + element;
}, 0);
// sum: 15

console.log(sum);

//sort method
//The sort() method in JavaScript arranges the elements of an
//array in ascending order based on their string representations.
const number1 = [500, 807, 6, 701, 1, 2, 3, 444, 5];
const number2 = [500, 807, 6, 701, 1, 2, 3, 444, 5];

number2.sort();

number1.sort((a, b) => a - b);
console.log(number1); //[ 1,2,3,5,6,444,500,701,807 ]
// arrow function is applied
console.log(number2); //[ 1,2,3,444,5,500,6,701,807 ]
//just sorted based on ascii value that's why not in ascending order

const fruits = ["banana", "arrow", "apple", "orange", "grape"];
fruits.sort();
console.log(fruits); //[ apple,arrow,banana,grape,orange ]

number1.sort((a, b) => b - a); //descending order
console.log(number1); //[ 807,701,500,444,6,5,3,2,1 ]

//find method
//find() method is used to search for
//an element in an array that satisfies a given condition
const getNum = (a) => a > 5;

const number1 = [6, 500, 807, 6, 701, 1, 2, 3, 444];
console.log(number1.find(getNum)); //returns first number greater than 5

//every method
//checks if every element in the array satisfies the given condition
//returns true / false

const a = [6, 5, 8, 10, 8, 10, 78];

const b = a.every((c) => c % 2 === 0);
console.log(b);

//some method
//checks if any one element in the array satisfies the given condition
//returns true / false

const c = [6, 5, 7, 11, 9, 13, 75];

const d = a.some((c) => c % 2 === 0);
console.log(d);
