switch statement
let day = 7;

switch (day) {
  case 0:
    console.log("sunday");
    break;
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thurday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  default:
    console.log("not a day number");
}

while loop
let i = 0;
while (i < 10) {
    console.log(i)
    i += 1
    // i++
    // i = i + 1
}

for loop
for (let i = 0; i <= 10; i += 2) {
  //i is defined in this
  //loop only so can't use it out of this loop
  //but if it is defined using var we could use it outside the loop
  //i++ means increment by only one i+n means increment by n number
  console.log(i);
}

let i = 0 if i is defined outside the loop then we can use that outside (interview question)
for (; i <= 10; i+=2) { //i is defined in this
    //loop only so can't use it out of this loop
    //but if it is defined using var we could use it outside the loop
  console.log(i)
}
console.log(i)

break and continue
no matter the position of the statement inside the loop loop will be exited
continue will skip to next loop and continue
for (let i = 0; i <= 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}
console.log("Hello");

do while
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);

console.log("hi");
