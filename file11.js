//object cloning using Object.assign

const obj = {
  name: "nagan",
  age: 25,
};

const obj2 = obj; //obj and obj2 both has same memory so any changes applies to both..
//both has same address in heap memory
obj2.gender = "male";
obj.place = "nagar";
console.log(obj2);
console.log(obj);

// const obj2 = {...obj}; //this is new way of cloning
const obj2 = Object.assign({}, obj); //this is old way of cloning
//obj and obj2 both has same memory so any changes applies to both..
//both has same address in heap memory
obj2.gender = "male";
obj.place = "nagar";
console.log(obj2);
console.log(obj);

//optional chaining

const obj = {
  name: "nagan",
  // place: {city: "nagar", state: "kear"}
};

console.log(obj.place.city); // gives TypeError
//Cannot read properties of undefined (reading 'city')

console.log(obj?.place?.city); // undefined

//methods
// functions inside object
const user = {
  name: "nagan",
  age: 25,
  about: function () {
    // console.log(`name is ${this.name} and age is ${this.age}`);
    console.log(this); // gives user object
    console.log(this.name); //gives name
    console.log(this.age); //gives age
    //here this refers to the primary object
  },
};

user.about();

function userInfo() {
  console.log(`name is ${this.name} and age is ${this.age}`);
}

const user1 = {
  name: "nagan",
  age: 25,
  about: userInfo,
};
const user2 = {
  name: "suresh",
  age: 26,
  about: userInfo,
};
const user3 = {
  name: "harish",
  age: 27,
  about: userInfo,
};
user1.about(); //name is nagan and age is 25
user2.about(); //name is suresh and age is 26
user3.about(); //name is harish and age is 27

function myFunny() {
  "use strict"; //if i use strict this value will be undefined
  //if i don't use i will get window object
  console.log(this);
}

//call method
const user1 = {
  name: "nagan",
  age: 25,
  about: function userInfo() {
    console.log(`name is ${this.name} and age is ${this.age}`);
  },
};
const user2 = {
  name: "suresh",
  age: 26,
};

user1.about(); //name is nagan and age is 25
user1.about.call(user1); //name is nagan and age is 25
user1.about.call(user2); //name is suresh and age is 26
user1.about.call(); //name is <proxy> and age is undefined

const user1 = {
  name: "nagan",
  age: 25,
  about: function userInfo(art, music) {
    //can also extra arguments
    console.log(`name is ${this.name} and age is ${this.age}`, art, music);
  },
};
const user2 = {
  name: "suresh",
  age: 26,
};

user1.about(); //name is nagan and age is 25
user1.about.call(user1, "paint", "pop"); //name is nagan and age is 25
user1.about.call(user2, "paint", "pop"); //name is suresh and age is 26
user1.about.call(); //name is <proxy> and age is undefined

function about(art, music) {
  //can also extra arguments
  console.log(`name is ${this.name} and age is ${this.age}`, art, music);
}
const user1 = {
  name: "nagan",
  age: 25,
};
const user2 = {
  name: "suresh",
  age: 26,
};

//call
about.call(user1, "painting", "pop"); //name is nagan and age is 25 painting pop
//apply
about.apply(user2, ["painting", "pop"]); //name is suresh and age is 26 painting pop
//bind
const a = about.bind(user2, "painting", "pop"); //bind will return a function
// we can store it in a variable and call it anytime
a(); // name is suresh and age is 26 painting pop
