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
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = +document.querySelector('.score').value; //me
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber; // ( '?' )
console.log(secretNumber);
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
let dugme = document.querySelector('.check');
dugme.disabled = false;

// dugme.disabled = false;
document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  console.log(guess);

  // input terms
  if (!guess || guess > 20 || guess < 0) {
    displayMessage('Only numbers 1-20 !⛔');

    // win
  } else if (guess === secretNumber) {
    displayMessage('Correct number !✅');
    document.querySelector('body').style.backgroundColor = '#60b347';
    dugme.disabled = true;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    } else {
      highscore = highscore;
    }
    // document.querySelector('.number').style.color = ''; (( input styles ))
    // when guess is wrong
    // too high
  } else if (guess > secretNumber) {
    displayMessage('Too high !👆🏾');
    score > 1 ? score-- : displayMessage('You lost! 😢');
    document.querySelector('.score').textContent = score;

    // too low
  } else if (guess < secretNumber) {
    displayMessage('Too low !👇🏾');
    score > 1 ? score-- : displayMessage('You lost! 😢');
    document.querySelector('.score').textContent = score;
    // score -= 1; //me
    // score.textContent = `${score}`; //me
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
  document.querySelector('body').style.backgroundColor = '#fff';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = +`20`;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  dugme.disabled = false;
  score = 20;
});

// implementing highscores
