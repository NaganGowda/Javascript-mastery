console.log("Hi");

console.log(10 - 5);

//declaring a variable using let, var

var a = "arjun";
console.log(a);

let b = "nagan";
console.log(b);

let first_name = "arjun"; //snake case
let lastName = "sagar"; //camelcase

console.log(first_name);
console.log(lastName);

// declaring a constant
const c = "suresh";
console.log(c);

// string indexing

let name = "Naganu";

// N a g a n
// 0 1 2 3 4

// finding length name.length
console.log(name[2]);
console.log(name[name.length - 1]); // last char total length - 1

console.log();

let name = "Nagan";
console.log(name.trim()); // removes spaces right and left side only
// when we perform these functions we get new strings it doesn't affect existing variable
// we can save these new strings to use them again
console.log(name.toUpperCase()); // converts to upper case
console.log(name.toLowerCase()); // converts to lower case

console.log(name.slice(0, 5)); //slicing of string doesn't include last char slice(start, end)

// data types (primitive data types)
// String
// number
// boolean
// undefined
// null
// BigInt
// Symbol

console.log(typeof name); // typeof operator which tells us which type of data it is
console.log(typeof 5);

22 +
  "" + //add empty string to convert number to string
  "22"; // add + symbol infront of string to convert to number
console.log(typeof (22 + ""));
console.log(typeof +"22");

// other methods

let age = 18;
let number = "55";
let a = String(age);
let b = Number(number);
console.log(typeof a);
console.log(typeof b);

// string concatenation
let a = "nagan";
let b = "gouda";
console.log(a + " " + b); // added space inbetween

let c = "10";
let d = "20";
console.log(c + d); //here added as a string
console.log(+c + +d); //here added as number hence 30 value

//template string
let nam = "Nagan";
let ag = 28;

let result = `my name is ${nam} and my age is ${ag}`; // use backtics
console.log(result);

//undefined
var a;
console.log(typeof a);
a = "hi";
console.log(typeof a);

let b;
console.log(typeof b);
b = "hi";
console.log(typeof b);

// gives error const requires intialization
// const a;
// console.log(typeof a)
// a = "hi"
// console.log(typeof a)

//null

let c = null;
console.log(c, typeof c); // gives object as a type that is a bug in javascript can't fix it as
// it will disrupt other sourse code

console.log(Number.MAX_SAFE_INTEGER) max number that can be represented by normal js number
BigInt
JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number
let g = 5555555555555555555555555555;
let f = BigInt(5555555555555555555555555555); //two ways to define BigInt
let r = 55555555555555555n;
console.log(f, g, typeof g);

Comparison Operators

==
console.log(7 == "7"); //just equal, only checks values not datatype
console.log(7 === "7"); // strict equal,  checks both values and datatype

// not equal != & !==
console.log(7 != "7"); //just equal
console.log(7 !== "7"); // strict equal

// > , < , >= , <=
console.log(8 > 7);
console.log(8 < 7);
console.log(8 >= 7);
console.log(8 <= 7);

let a = 7;
let le = a % 2; // % remainder module
if (le == 0) {
  console.log("yes");
} else {
  console.log("no");
}

falsy values

undefined
null
0
""
false

truthy values
anything else than above
1,-1
"k"

let a = 1;

if (a) {
  console.log("yes");
} else {
  console.log("no");
}
