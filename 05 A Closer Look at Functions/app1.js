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

// const greet = () => console.log("Hey User!");
// btn.addEventListener("click", greet); // <---- Example of higher-order function, where function receives another function as an argument.

// function count() {
//   let counter = 0;
//   return function () {
//     counter++;
//   };
// } // <---- Second example of higher-order function, where function returns a new function.

// -- Functions accepting callback functions

// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };

// Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer("JavaScript is the best!", upperFirstWord);
// console.log("".padStart(42, "-"));
// transformer("JavaScript is the best!", oneWord);

// JS uses callback all the time
// const high5 = function () {
//   console.log("👋🏾");
// };

// document.body.addEventListener("click", high5);
// ["Jonas", "Martha", "Adam"].forEach(high5);

// -- Functions returning functions

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name} !`);
//   };
// };

// const greeter = greet("Hey");
// greeter("Dzenan");
// greeter("User");
// greeter("Admin");
// greeter("Steven");

// greet("Hello")("Dzenan"); // greet is function and we call that function by passing 'Dzenan' argument.

// const greet = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// root
// const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}.`);
// greetArr("Selam")("User");
//  //  //  //  //  //  //  //

// const pozdrav = greet("hi");
// pozdrav(`User${Math.trunc(Math.random() * 100000)}`);
// pozdrav(`User${Math.trunc(Math.random() * 100000)}`);
// pozdrav(`User${Math.trunc(Math.random() * 100000)}`);

// -- The call and apply Methods

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   // book: function () {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, "Dzenan Mecinovic");
// lufthansa.book(635, "Mike Smith");
// console.log(lufthansa.bookings);

// const eurowings = {
//   airline: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;

// Does NOT work
// book(23, "Sarah Williams"); in regular function call, 'this' keyword points to undefined

// Call method
// book.call(eurowings, 23, "Sarah Williams");
// console.log(eurowings);

// book.call(lufthansa, 239, "Mary Cooper");
// console.log(lufthansa);

// const swiss = {
//   airline: "Swiss Air Lines",
//   iataCode: "LX",
//   bookings: [],
// };

// book.call(swiss, 23, "Matthew Scofield");
// console.log(swiss.bookings);

// Apply method
// const flightData = [583, "George Cooper"];
// book.apply(swiss, flightData);
// console.log(swiss.bookings);

// book.call(swiss, ...flightData); // call method with spreaded arguments from flightData array.
