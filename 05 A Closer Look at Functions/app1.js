/*
A function in JavaScript is a set of statements that performs a task or calculates a value,
but for a procedure to qualify as a function, it should take some input and return an output
where is some obvious relationship between the input and the output.
*/

"use strict";

// Default Parameters
/* const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers // prihvata bilo kakav izraz koji se unese.
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000); */

// How passing arguments works: Value vs. Reference

/* const flight = "LH234";
const dzeno = {
  name: "Dzenan Mecinovic",
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name; // referenca na uneti objekat

  if (passenger.passport === 24739479284) alert("Checked in");
  else alert("Wrong passport");
};

checkIn(flight, dzeno);
console.log(flight);
console.log(dzeno);

// Is the same as doing...
// flightNum = flight; // flightNum copies flight value to itself.
// const passenger = dzeno;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(dzeno);
checkIn(flight, dzeno); */

// 2 terms: passing by value, passing by reference

// First-Class and Higher-Order Functions

