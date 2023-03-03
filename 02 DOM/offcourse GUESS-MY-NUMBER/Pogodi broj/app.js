'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 15) + 1;
// let score = +document.querySelector('.score').value; //me
let score = 15;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber; // ( '?' )
console.log(secretNumber);
let dugme = document.querySelector('.check');
dugme.disabled = false;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// dugme.disabled = false;
document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  console.log(guess);

  // input terms
  if (!guess || guess > 15 || guess < 0) {
    displayMessage('Samo brojevi od 1 do 15 !⛔');
    // win
  } else if (guess === secretNumber) {
    displayMessage('Tacan broj !✅');
    document.querySelector('body').style.backgroundColor = '#60b347';
    dugme.disabled = true;
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.number').style.color = ''; (( input styles ))
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else {
      highscore = highscore;
    }
    // too high
  } else if (guess > secretNumber) {
    displayMessage('Previse visoko !👆🏾');
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Izgubili ste! 😢');
      dugme.disabled = true;
    }
    // score > 1 ? score-- : displayMessage('Izgubili ste! 😢');
    // document.querySelector('.score').textContent = score;

    // too low
  } else if (guess < secretNumber) {
    displayMessage(`Previse nisko !👇🏾`);
    // score > 1 ? score-- : displayMessage('Izgubili ste! 😢');
    // document.querySelector('.score').textContent = score;
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Izgubili ste! 😢');
      dugme.disabled = true;
    }
  }
});

// coding challenge #1 (DOM)
/*
Implement a game rest functionality, so that the player can make a new guess!
Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and number variables
3. Restore the initial conditions of the message, number, score and guess input field

 // X // 4. Also restore the original background color (#222) and nmber width (15rem) // X //
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 15;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 15) + 1;
  document.querySelector('body').style.backgroundColor = '#ffe4c4';
  displayMessage('Pocni da pogadjas...');
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.guess').value = '';
  dugme.disabled = false;
});
