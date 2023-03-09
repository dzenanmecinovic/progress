"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // open 24 Hours
    close: 12 + 12,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // ES6 enchanced object literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]}, and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.` // undefined??
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/////////////////////////////////
// Optional Chaining (?.)

// WITHOUT optional chaining
// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);

// WITH optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// Example
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}.`);
// }

// Methods
// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
// console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Arrays
// const users = [{ name: "Dzeno", email: "mecinovic@gmail.com" }];

// console.log(users[0]?.name ?? "User empty");
// console.log(users[1]?.name ?? "User empty");

// if (users.length > 0) console.log(users[0]?.name);
// else console.log("User array empty");

// if (restaurant.openingHours.fri) {
//   console.log(restaurant.openingHours.fri.open);
// }
/////////////////////////////////
// Enchanced Object Literals

/////////////////////////////////
// Looping Arrays: The for-of loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

// console.log([...menu.entries()]);

/////////////////////////////////
// Local Assignment Operators
// const rest1 = {
//   name: "Capri",
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: "La Piazza",
//   owner: "Giovanni Rossi",
// };

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ??= 10; // jer je gore 0 a && operator gleda samo ako je undefined ili null
// rest2.numGuests ||= 10;

// nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && "<ANONYMOUS>"; // ako je prva true onda vraca poslednju vrednost
// rest2.owner = rest2.owner && "<ANONYMOUS>"; // ako je prva true onda vraca poslednju vrednost
// rest1.owner &&= "<ANONYMOUS>";
// rest2.owner &&= "<ANONYMOUS>";

// console.log(rest1);
// console.log(rest2);
/////////////////////////////////
// nullish coalescing operator //
// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

////////////////////////////////
// OR and AND
// console.log("---- OR ----");
// Use ANY data type, return ANY data type, short-circuiting
// console.log(3 || "Jonas");
// console.log("" || "Jonas");
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || "" || "Hello" || 23 || null);
// in OR operation, the result is true if at least one operand is true.
// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log("---- AND ----");
// console.log(0 && "Jonas");
// console.log(7 && "Jonas"); // if the first one is true then it returns last value. if first is false, it returns first.

// console.log("Hello" && 23 && null && "Jonas");

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }

// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// OR ( || ) operator will return first truthy value or simply the last value if all of them are falsy.
// AND ( && ) operator will return the first falsy value or the last value if all of them are trutrhy.

/////////////////////////////////////
// Rest Pattern and Parameters
// 1) Destructuring

// SPREAD, because on RIGHT side of =  (assignment operator)
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// REST, because on LEFT side of = (assignment operator)
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// Objects
// const { sat, ...weekDays } = restaurant.openingHours;
// console.log(weekDays);

// 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
// restaurant.orderPizza("mushrooms");
/////////////////////////////////////
// spread operator
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr); // individual elements of the array
// console.log(1, 2, 7, 8, 9);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// // Iterables: arrays, strings, maps, sets. NOT objects
// const str = "Dzenan";
// const letters = [...str, " ", "M."];
// console.log(letters);
// console.log(...str);
// console.log("D", "z", "e");
// // console.log(`${...str}`) // Unexpected token '...'

// // Real-world example
/* for the spread operator the second use case is to pass multiple arguments into the functions all at the same time. */
// const ingredients = [
//   // prompt(`Let's make pasta! Ingredient 1?`),
//   // prompt(`Ingredient 2?`),
//   // prompt(`Ingredient 3?`),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// // Objects
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/////////////////////////////////////////////
// destructuring objects

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "Via del Sole, 21",
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// // console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

////////////////////////////////////////////////
/* // destructuring arrays

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; // destructuring assignment
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9]; // 8, 9, 1
console.log(p, q, r); // 8, 9, 1 
*/
////////////////////////////////////////////////
