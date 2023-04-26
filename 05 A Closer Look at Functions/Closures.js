"use strict";
// Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
// returned function will be stored in 'booker' variable
const booker = secureBooking();

booker();
booker();
booker();

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

console.dir(booker);
console.dir(secureBooking);
