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

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Dzenan",
  age: 30,
};

const friend = me;
friend.age = 27;

console.log(`Friend`, friend);
console.log(`Me`, me);

// primitives: number,string,boolean,undefined,null,symbol,BigInt

// objects: object literal, arrays, functions, many more... <-- reference types

/* js engine {

// call stack is where function is called
// heap is where objects are stored in memory

} */
