"use strict";
// Closures

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };
// // returned function will be stored in 'booker' variable
// const booker = secureBooking();

// booker();
// booker();
// booker();

//                      Secret of Closures

/*
    Any function always has access to the variable environment
    of the execution context in which the function was created.
*/

/*
    Bilo koja funkcija uvek ima pristup okruzenju varijabli
    u kontekstu izvrsenja u kome je napravljena funkcija.
*/

/////////////////////////////////////////////////////////////////////////

// console.dir(booker);
// console.dir(secureBooking);
// const ispisObjekta = {
//   name: "Dzenan",
//   lastName: "Mecinovic",
//   gpt: "Model 3-5",
// };

// console.dir(ispisObjekta);

// Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function

h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers.`);
    console.log(`There are 3 grouops, each with ${perGroup} passengers.`);
  }, wait * 1000);

  console.log(`Will start baording in ${wait} seconds.`);
};

const perGroup = 1000;
boardPassengers(180, 3);
