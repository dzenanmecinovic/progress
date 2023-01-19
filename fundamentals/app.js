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
