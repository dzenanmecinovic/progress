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
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = +document.querySelector('.score').value; //me
let score = 20;
document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = +document.querySelector('.guess').value;
  console.log(guess);

  if (!guess || guess > 20 || guess < 0) {
    document.querySelector('.message').textContent = 'Only numbers 1-20 !⛔';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `Correct number !✅`;
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = `Too high !👆🏾`;
    score > 1
      ? score--
      : (document.querySelector('.message').textContent = `You lost! 😢`);
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = `Too low !👇🏾`;
    score > 1
      ? score--
      : (document.querySelector('.message').textContent = `You lost! 😢`);
    document.querySelector('.score').textContent = score;
    // score -= 1; //me
    // score.textContent = `${score}`; //me
  }
});
