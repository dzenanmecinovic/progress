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
