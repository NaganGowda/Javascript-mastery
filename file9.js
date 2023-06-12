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
