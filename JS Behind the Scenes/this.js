// THIS keyword/variable //
"use strict";
// 4 ways how functions can be called

// 1. Method ====>>     this = < Object that is calling the method >
// example:
// const dzeno = {
//   ime: "Dzenan",
//   godina: 2004,
//   /* method */ calcAge: function () {
//     return 2023 - this.godina;
//   },
// };

// dzeno.calcAge();

// var x = 1;
// a();
// console.log(x);
// function a() {
//   var x = 10;
//   console.log(x);
// }

// log ==>   10, 1
// 10 is first because function log (x=10) is called before global scope log (x=1).

// 'this' keyword in practice

console.log(this); // this keyword in the global scope is simply the 'window' object. (( thats the global object))

const calcAge2 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge2(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); // uses lexical 'this' keyword, which means its using his parents keyword
};
calcAgeArrow(1980);

const dzeno = {
  year: 2004,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};

dzeno.calcAge();

const matilda = {
  year: 2017,
};
matilda.calcAge = dzeno.calcAge; // Method Borrowing
matilda.calcAge();

const f = dzeno.calcAge;
f();
