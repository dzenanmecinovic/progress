////////////////////////////////////////////////
// Coding Challenge #1

/* We're building a football betting app (soccer for my American friends) !

Suppose we get data from a web service about a certain game (below). In this challenge
we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'player1' and 'player2')
2. The first player in any player array is the goalkeeper and the others are field players.
For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name
and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) aused 3 substitute players. So create
a new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho', and 'Perisic'
5. Based on the game.odds object, create one variable for each odd
called (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names
(NOT an array) and prints each of them to the console, along with the number of goals
that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win.
Print to the console which team is more likely to win, WITHOUT using an if/else statement
or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1.
// me
// const player1 = game.players[0];
// const player2 = game.players[1];
// console.log(player1);
// console.log(player2);
// root
const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// 2.
// me
// const [gk] = player1;
// const [empty, ...fieldPlayers] = [...player1];
// console.log(gk, fieldPlayers);

// root
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// 3.
// me
// const [...allPlayers] = [...player1, ...player2];
// console.log(allPlayers);

//root
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// 4.
// me
// const [...players1Final] = [...player1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

//root
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// 5. root
const {
  odds: { team1, x: draw, team2 },
} = game;

// 6. root
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored.`);
};
// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
// printGoals("Davies", "Muller");
// printGoals(...game.scored);

// 7. root
// console.log(team1, draw, team2); // 1.33 3.25 6.5

team1 < team2 && console.log("Team 1 is more likely to win"); // ako je prva true ispisi ovo ((&& OPERATOR))
team1 > team2 && console.log("Team 2 is more likely to win"); // ako je prva true ispisi ovo ((&& OPERATOR))

// operator ||     ==> ako je prva FALSE izvrsi kod
