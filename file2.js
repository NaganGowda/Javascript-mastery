//ternary operator or conditional operator

let a = 4;
let drink = a >= 5 ? "coffee" : "milk";
console.log(drink);

// and or operators and(&&) or(||) pipe symbol
let age = 8;
let name = "nagan";

if (name[0] === "n" && age > 50) {
  console.log("need assistance");
} else {
  console.log("no assistance needed");
}

if (name[0] === "n" || age > 50) {
  console.log("need assistance");
} else {
  console.log("no assistance needed");
}

winning number game using nested if else
let winningNumber = 19;
let userGuess = +prompt("Guess a number");

if (userGuess == winningNumber) {
  console.log("Your guess is right!!!");
} else {
  if (userGuess < winningNumber) {
    console.log("Your guess is too low!!!");
  } else {
    console.log("Your guess is too high!!!");
  }
}

else if
let a = 80;

if (a < 10) {
    console.log("less than 10")
}
else if(a < 20) {
    console.log("less than 20")
}
else if(a < 30) {
    console.log("less than 30")
}
else if(a < 40) {
    console.log("less than 40")
}
else if(a < 50) {
    console.log("less than 50")
}
else {
    console.log("higher than 50")
}
