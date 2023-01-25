////// fundamentals - part 1
////// equality operators === vs ==

// const age = "18";
// if (age === 18) console.log("You just became an adult :D (strict)");
// // ispituje i tip i vrednost
// if (age == 18) console.log("You just became an adult :D (loose)");
// // ispituje vrednost

// const favourite = Number(prompt("What's your favourite number?"));

// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   // 23 === 23
//   console.log("Cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//   console.log(`7 is also a cool number!`);
// } else if (favourite === 9) {
//   console.log("9 is also a cool number");
// } else {
//   console.log("Number is not 23 or 7");
// }

// if (favourite !== 23) console.log("Why not 23?");
///////

//// fundamentals - part 1
//// operator precedence

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// // console.log(25 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah);
// console.log(averageAge);
///////

////// fundamentals - part 1
////// coding challenge #1

/*
 Mark and John are trying to compare their BMI, which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and heght in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78kg and is 1.69m tall.
             John weights 92kg and is 1.95m tall.

TEST DATA 2: Marks weights 95kg and is 1.88m tall.
             John weights 85kg and is 1.76m tall.
*/

// BMI = masa / visina*visina

// 1
// const masaMark = 78;
// const visinaMark = 1.69;

// const masaJohn = 92;
// const visinaJohn = 1.95;

// const markBMI = masaMark / visinaMark ** 2;
// const johnBMI = masaJohn / visinaJohn ** 2;

// const markHigherBMI = markBMI > johnBMI;

// console.log(markBMI, johnBMI);
// console.log(markHigherBMI);

// // 2
// const masaMark2 = 95;
// const visinaMark2 = 1.88;

// const masaJohn2 = 85;
// const visinaJohn2 = 1.76;

// const markBMI2 = masaMark2 / visinaMark2 ** 2;
// const johnBMI2 = masaJohn2 / visinaJohn ** 2;

// const markHigherBMI2 = markBMI2 > johnBMI2;

// console.log(markBMI2, johnBMI2);
// console.log(markHigherBMI2);
// //

// // 1
// if (markBMI > johnBMI) {
//   console.log(`Markov BMI (${markBMI}) je veci od Johnovog (${johnBMI}).`);
// } else {
//   console.log(`Markov BMI (${markBMI}) je manji od Johnovog (${johnBMI}).`);
// }

// // 2

// if (markBMI2 > johnBMI2) {
//   console.log(`Markov BMI2 (${markBMI2}) je veci od Johnovog (${johnBMI2}).`);
// } else {
//   console.log(`Markov BMI2 (${markBMI2}) je manji od Johnovog (${johnBMI2}).`);
// }
///////

////// fundamentals - part 1
////// truthy and falsy values

// 5 falsy values: 0, '', udnefined, null, NAN
// let height;
// if (height) {
//   console.log("Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }
////// fundamentals - part 1
////// coding challenge #3
/* 
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).
3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks.
4. BONUS 2: Minimum score also applies to a draw! So a draw only happesn when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110.

TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123.

TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106.
*/

// const avgDolphins = (97 + 112 + 101) / 3;
// const avgKoalas = (109 + 95 + 106) / 3;
// if (avgDolphins < 100 || avgKoalas < 100) {
//   console.log("Dolphins and Koalas average score should be higher than 100.");
// } else if (avgDolphins > 100 && avgDolphins > 100 && avgDolphins == avgKoalas) {
//   console.log(`It's DRAW!`);
// } else if (avgDolphins > 100 && avgKoalas > 100 && avgDolphins > avgKoalas) {
//   console.log(`Dolphins(${avgDolphins}) has won against Koalas(${avgKoalas}).`);
// } else if (avgDolphins > 100 && avgKoalas > 100 && avgDolphins < avgKoalas) {
//   console.log(`Koalas(${avgKoalas}) has won against Dolphins(${avgDolphins}).`);
// }
///////

/////// fundamentals - part 2
/////// activating strict mode
// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive :D`);

// const interface = "Audio";
// const private = 534;

/////// fundamentals - part 2
/////// functions

// function logger() {
//   console.log("My name is Dzenan");
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number("23");

/////// fundamentals - part 2
/////// function Declarations vs. Expressions

// function declaration
// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }
// const age1 = calcAge1(1991);

// // function expression
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// /////// fundamentals - part 2
// /////// Arrow Functions
// const calcAge3 = (birthYear) => 2023 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firsName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   //   return retirement;
//   return `${firsName} retires in ${age} years.`;
// };

// console.log(yearsUntilRetirement(2004, "Dzeno"));
// console.log(yearsUntilRetirement(1985, "Jack"));

/////// fundamentals - part 2
/////// Functions calling other functions

// function cutFruitPieces(fruit) {
//   return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);
//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

/////// fundamentals - part 2
/////// Reviewing Functions

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     return retirement;
//     console.log(`${firstName} retires in ${retirement} years`); // ignored ((return statements immediately exits the function))
//   } else {
//     return -1;
//     console.log(`${firstName} has already retired`); // ignored ((return statements immediately exits the function))
//   }
// };

// console.log(yearsUntilRetirement(2004, `Dzenan`));
// console.log(yearsUntilRetirement(1930, `Mike`));

/////// fundamentals - part 2
/////// coding challenge - functions

// 2 gymnastics teams, dolphins and koalas

// // test 1
// const calcAverage = (first, second, third) => (first + second + third) / 3;
// let scoreDolphin = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins won. (${avgDolphins} vs ${avgKoalas}.)`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas won. (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`No team wins!`);
//   }
// };

// checkWinner(scoreDolphin, scoreKoalas);

// // test 2

// scoreDolphin = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphin, scoreKoalas);
// checkWinner(scoreDolphin, scoreKoalas);

/////// fundamentals - part 2
/////// basic array operations (methods)

// const friends = ["Michael", "Steven", "Peter"];

// // Add elements
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift(`John`);
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf(`Bob`));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes(`Bob`));
// console.log(friends.includes("23")); // (false) - it is testing with strict equality

// if (friends.includes("Steven")) {
//   console.log(`You have a friend called Steven`);
// } else {
//   console.log(`Negative.`);
// }

/////// fundamentals - part 2
/////// coding challenge - arrays (#2)

/*
  Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

  1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on he rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
  2. And now let's use arrays! So create an array 'bills' containing the test data below.
  3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
  4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

  TEST DATA: 125, 555 and 44
*/

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

/////// fundamentals - part 2
/////// objects

// const jackieArray = [
//   "Dzenan",
//   "Mecinovic",
//   2023 - 2004,
//   "student",
//   ["Prvi", "Drugi", "Treci"],
// ];

// console.log(jackieArray);

// const jackie = {
//   firstName: "Dzenan",
//   lastName: "Mecinovic",
//   age: 2023 - 2004,
//   job: "student",
//   friends: ["Prvi", "Drugi", "Treci"],
// };
// console.log(jackie);

/////// fundamentals - part 2
/////// DOT vs. BRACKET NOTATION

const jackie = {
  firstName: "Dzenan",
  lastName: "Mecinovic",
  age: 2023 - 2004,
  job: "student",
  friends: ["Prvi", "Drugi", "Treci"],
};
console.log(jackie);

console.log(jackie.lastName);
console.log(jackie["lastName"]);

const nameKey = "Name";
console.log(jackie["first" + nameKey]);
console.log(jackie["last" + nameKey]);

// console.log(jackie.'last' + nameKey); // doesn't work

// const interestedIn = prompt(
//   `What do you want to know about Jackie? Choose between firstName, lastName, age, job and friends.`
// );

// if (jackie[interestedIn]) {
//   console.log(jackie[interestedIn]);
// } else {
//   console.log(
//     `Wrong request! Choose between firstName, lastName, age, job and friends.`
//   );
// }

jackie.location = "Serbia";
jackie["twitter"] = "@dzenoooooo";
console.log(jackie);

// Challenge
// "Jackie has 3 friends, and his best friend is called Prvi."
console.log(
  `${jackie.firstName} has ${jackie.friends.length} friends, and his best friend is called ${jackie.friends[0]}.`
);
