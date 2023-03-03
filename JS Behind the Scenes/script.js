"use strict";

// function calcAge(birthYear) {
//   const age = 2023 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}.`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = "Steven";
//       // Reassigning outer scope's variable
//       output = "NEW OUTPUT!";
//       const str = `Oh, and you're a millenial, ${firstName}.`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = "Dzenan";
// calcAge(1991);

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: "Dzenan",
//   age: 30,
// };

// const friend = me;
// friend.age = 27;

// console.log(`Friend`, friend);
// console.log(`Me`, me);

// primitives: number,string,boolean,undefined,null,symbol,BigInt

// objects: object literal, arrays, functions, many more... <-- reference types

/* js engine {

// call stack is where function is called
// heap is where objects are stored in memory

} */

// primitive types
let lastName = `Williams`;
let oldLastName = lastName;
lastName = `Davis`;
console.log(lastName);
console.log(oldLastName);

// each primitive value will simply be saved into its own piece of memory in the stack.

/* object is reference value. it is gonna be stored in heap and the stack then just keeps a reference to the memory position
at which the object is stored in the heap. */

// reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = jessica; // behind the scenes we are just copying the reference which will then point to the same object.
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica);
console.log("After marriage:", marriedJessica);

// marriedJessica = {}; its constant and cannot be changed

// copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
  johan: 13,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);
