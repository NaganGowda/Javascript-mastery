// functions inside object called as methods
//created a function which returns user object upon
//giving arguments
const userMethods = {
  about: function () {
    return `name is ${this.firstName} and age is ${this.age}`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

function CreateUser(firstName, lastName, mailid, age, place) {
  const user = Object.create(userMethods);
  user.firstName = firstName;
  user.lastName = lastName;
  user.mailid = mailid;
  user.age = age;
  user.place = place;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  return user;
}

const user1 = CreateUser("nagan", "gouda", "@gmail.com", 20, "karaga");
console.log(user1.about());

const obj1 = {
  key1: "value1",
  key2: "value2",
};

const obj2 = Object.create(obj1);
console.log(obj2); // {} empty object

obj2.key3 = "value3";
obj2.key2 = "unique";
console.log(obj2.__proto__); // gives obj1 as output
console.log(obj2);

//PROTOTYPE

// Create a prototype object
const personPrototype = {
  greet: function () {
    console.log("Hello!");
  },
};

// Create an object using the prototype
const person = Object.create(personPrototype);
// person.greet = function() {
//     console.log("hello world")
// } // here if it can find greet function then it prints or
//else it will go to personPrototype object to look for greet function
// Accessing a method from the prototype
person.greet(); // Output: 'Hello!'

// personPrototype is the prototype object that contains a greet method.
//We then create a new object person using Object.create() and pass personPrototype
// as the prototype. As a result, the person object inherits the greet method from the prototype.

function CreateUser(firstName, lastName, mailid, age, place) {
  const user = Object.create(CreateUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.mailid = mailid;
  user.age = age;
  user.place = place;
  return user;
}
//here defined function using prototype so no need to create a function separately
//prototype helps in inheritence

CreateUser.prototype.about = function () {
  return `name is ${this.firstName} and age is ${this.age}`;
};

CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};

const user1 = CreateUser("nagan", "gouda", "@gmail.com", 10, "karaga");
console.log(user1.is18());

//new keyword
// Creates a new, empty object.
// Sets the prototype of the new object to the prototype of
// the constructor function or class.
// Calls the constructor function or executes the constructor
// method of the class with the newly created object as the context (this).
// Returns the newly created object.

function CreateUser(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new CreateUser("nagan", 25);
console.log(user1.age);

// using new keyword
function CreateUser(firstName, lastName, mailid, age, place) {
  //this
  // function is called constructor function
  //it constructs the whole function works like a base
  this.firstName = firstName;
  this.lastName = lastName;
  this.mailid = mailid;
  this.age = age;
  this.place = place;
}
//here defined function using prototype so no need to create a function separately
//prototype helps in inheritence

CreateUser.prototype.about = function () {
  return `name is ${this.firstName} and age is ${this.age}`;
};

CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};

const user1 = new CreateUser("nagan", "gouda", "@gmail.com", 10, "karaga");
console.log(user1);

//running for loop in user1
for (let key in user1) {
  // console.log(key); //here about and is18 also came as key
  //if i don't want that to happen
  if (user1.hasOwnProperty(key)) {
    console.log(key);
  }
  //we only get
  //keys available in main object not methods
  //hasOwnProperty gives true than we will get those keys
}

class animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  about() {
    return `${this.name} is cute`;
  }
  func() {
    return `${this.name} is ${this.age} years old`;
  }
}

class dog extends animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }

  run() {
    return `${this.name} is running at ${this.speed}kmph`;
  }
}

const user1 = new dog("ddd", 8, 75);
console.log(user1.run());

//getter and setter

class user {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  get fullName() {
    return `${this.firstname}  ${this.lastname} `;
  }

  set fullName(fullName) {
    const [firstname, lastname] = fullName.split(" ");
    this.firstname = firstname;
    this.lastname = lastname;
  }
}

const user1 = new user("nagan", "meti");
console.log(user1); // here if i don't put () after method name
// then whole function will get printed as it is

//now after writing get before method now it is not a function

user1.fullName = "suresh kumar";
console.log(user1);
