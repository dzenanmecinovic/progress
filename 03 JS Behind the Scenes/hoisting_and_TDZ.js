// Hoisting, Variable Environment, TDZ (temporal dead zone)

// Hoisting: Makes some types of variables accessible/usable in the code before they are actually declared.
//           "Variables lifted to the top of their scope."

/* Before execution, code is scanned for variable declaration, and for each variable, a new property
is created in the variable environment object. */

// Hoisting doesn't work the same for all variable types.

/////
/////
/////

//                                                  HOISTED?                   INITIAL VALUE                   SCOPE

// function declarations                            YES                         Actual function                 Block (in strict mode, otherwise: Function)

// var variables                                    YES                         undefined                       Function

// let/const variables                              NO                      <uninitialized>, TDZ                BLOCK

// function expressions and arrows                          ====>> depends if using var or let/const <<====

// TEMPORAL DEAD ZONE, LET AND CONST

// const myName = "Dzenan";

// if (myName === "Dzenan") {
//   console.log(`Dzenan radi kao ${job}.`);
//   const age = 2023 - 2004;
//   console.log(age); // lines 30, 31 and 32 are TEMPORAL DEAD ZONE FOR job VARIABLE
//   const job = `software engineer`; // scoped only to IF block
//   console.log(x); // ReferenceError: x is not defined
// }

/* why TDZ? 
- Makes it easier to avoid and catch errors: Accessing variables before declaration is
bad practice and should be avoided;
- Makes const variables actually work the way they are supposed to;
*/

/* why Hoisting?
- Using functions before actual declaration;
- var hoisting is just a byproduct;
*/

// HOISTING AND TDZ IN PRACTICE

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Dzenan";
let job = "software engineer";
const year = 2004;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); // can't acces before intialization
// console.log(addArrow); // undefined (because of var declaration)
// console.log(addArrow()); // is not a function

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example:
console.log(numProducts);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted!");
}

var x = 1; // variables declared with var will create property on the global window object
let y = 2;
const z = 3;
