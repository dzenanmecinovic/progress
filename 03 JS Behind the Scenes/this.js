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

// 2. Simple Function call ====>>     this = undefined (in strict mode, Otherwise: window(in browser))
// 3. Arrow function ====>>     this = <this of surrounding func(lexical this)>
// its using its parents keyword. arrow function don't get their own 'this'.

// 4. Event listener ====>>     this = <DOM element that the handler is attached to>

// *********** 'this' DOES NOT POINT TO THE FUNCTION ITSELF, AND ALSO NOT THE ITS VARIABLE ENVIRONMENT! *********** \\
//                  IT POINTS TO THE "owner" OF THE FUNCTION IN WHICH THE "this" KEYWORD IS USED.

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

// console.log(this); // this keyword in the global scope is simply the 'window' object. (( thats the global object))

// const calcAge2 = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge2(1991);

// const calcAgeArrow = (birthYear) => {
//   console.log(2037 - birthYear);
//   console.log(this); // uses lexical 'this' keyword, which means its using his parents keyword
// };
// calcAgeArrow(1980);

// const dzeno = {
//   year: 2004,
//   calcAge: function () {
//     console.log(this);
//     console.log(2023 - this.year);
//   },
// };

// dzeno.calcAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = dzeno.calcAge; // Method Borrowing
// matilda.calcAge();

// const f = dzeno.calcAge;
// f();
var firstName = "Matilda";
const dzeno = {
  firstName: "Dzenan",
  year: 2004,
  calcAge: function () {
    // console.log(this);
    console.log(2023 - this.year);
    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
dzeno.greet();
dzeno.calcAge();

// // arrow function uses the 'this' keyword from its parent scope.
// // regular function get his own 'this' keyword, and it was undefined.

// // arguments keyword
// var addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 9, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);
