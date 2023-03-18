// String Methods Practice
"use strict";

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//               Arrival from BRU to FAO (11h45)
//    🔴 Delayed Arrival from HEL to FAO (12h05)
//              Departure from FAO to LIS (12h30)

console.log(flights.split("+"));

const getCode = (str) => str.slice(0, 3).toUpperCase();
for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(":", "h")})`;
  console.log(output.padStart(44));
}
/////////////////////////////////////////////////////////////
// const airline = "TAP Air Portugal";

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Split and join
// console.log("a+very+nice+string".split("+"));
// console.log("Dzenan Mecinovic".split(" "));

// const [firstName, lastName] = "Dzenan Mecinovic".split(" ");
// console.log(firstName);
// console.log(lastName);

// const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(" ");
//   const namesUpper = [];
//   for (const n of names) {
//     // namesUpper.push(n[0].toUpperCase() + n.slice(1));
//     namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
//   }
//   console.log(namesUpper.join(" "));
// };

// capitalizeName("jessica ann smith davis");
// capitalizeName("dzenan mecinovic");

// // Padding
// const message = "Go to gate 23! 🚪";
// console.log(message.padStart(20, "+").padEnd(30, "+"));
// console.log("Dzenan".padStart(20, "+").padEnd(30, "+"));

// const maskCreditCard = function (number) {
//   const str = number + ""; // Convert number to string.
//   const last = str.slice(-4);
//   return last.padStart(str.length, "*");
// };

// console.log(maskCreditCard(64647384));
// console.log(maskCreditCard(43378463864647384));
// console.log(maskCreditCard("334859493847755774747"));

// // Repeat
// const message2 = "Bad weather... All Departures  Delayed... ";
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There is ${n} planes in line ${"✈".repeat(n)}`);
// };

// planesInLine(5);
// planesInLine(3);
// planesInLine(12);

// part 2
// Fix capitalization in name
// const passenger = "dZeNaN"; // Dzenan
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// function fixCapitalization(passengerName) {
//   const passLower = passengerName.toLowerCase();
//   const passCorrect = passLower[0].toUpperCase() + passLower.slice(1);
//   return passCorrect;
// }

// // Comparing email
// const email = "hello@dzeno.io";
// const loginEmail = "     Hello@Dzeno.Io \n";
// const emailCorrect = loginEmail.toLowerCase().trim();
// console.log(emailCorrect);
// console.log(email === emailCorrect);

// // Replacing
// const priceGB = "288,97€";
// const priceUS = priceGB.replace(",", ".").replace("€", "$");
// console.log(priceGB, priceUS);

// const announcement = `All passengers come to barding door 23. Boarding door 23!`;
// console.log(announcement.replace("door", "gate"));
// console.log(announcement.replaceAll("door", "gate"));

// console.log(announcement.replace(/door/g, "gate"));

// // Booleans
// const plane = "Airbus A320neo";
// console.log(plane.includes("A320"));
// console.log(plane.includes("Boeing"));
// console.log(plane.startsWith("Aibr"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo"))
//   console.log("Part of the NEW Airbus family ✈");

// // Pratice exercises
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun"))
//     console.log("You are NOT allowed on board! 🚫");
//   else console.log("Welcome aboard! ✅");
// };
// checkBaggage("I have a laptop, some Food and a pocket Knife");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snacks and a gun for protection");

// console.log(fixCapitalization("dZENAN"));
// console.log(fixCapitalization("necijeIme"));
// console.log(fixCapitalization("IsMaIL"));
// console.log(fixCapitalization("AMar"));

//part 1

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log("B737"[0]);

// console.log(airline.length);
// console.log("B737".length);

// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));
// console.log(airline.indexOf("portugal"));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1)); // oduzima prvo i poslednje slovo

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") console.log(`Middle Seat ✈`);
//   else console.log(`Not a Middle Seat 😥`);
// };
// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log(new String("dzenan"));
// console.log(typeof new String("dzenan"));

// console.log(new String("dzenan").slice(-3));
// console.log(new String("dzenan").slice(0, 3));
