// Coding Challenge #1

// Let's build a simple poll app!

/*

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option.
This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
1.1. Display a prompt window for the user to input the number of the selected option. The prompt
should look like this:

    What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Write option number)

1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value
AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (52 wouldn't make sense)

2. Call this method whenever the user clicks the "Answer poll" button.

3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which
can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log().
This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".

4. Run the 'displayResults' method at the end of each 'registerNewAnser' method call.

HINT: Use many of the tools you learned about in this and the last section

*/

// const dugme = document.querySelector("#answer");

// const poll = {
//   question: "What is your favourite programming language?",
//   options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
//   // This generates [0, 0, 0, 0]. More in the next section.
//   answers: new Array(4).fill(0),
//   registerNewAnswer: function () {
//     let korisnik = prompt(
//       "What is your favourite programming language?\n1: JavaScript\n2: Python\n3: Rust\n4: C++"
//     );
//     if (isNaN(korisnik)) {
//       console.log("Morate uneti broj");
//     } else if (korisnik < 1 || korisnik > 4) {
//       console.log("Broj mora biti od 1 do 4 (ukljucujuci 4)");
//     } else if (korisnik == 1) this.answers[0]++;
//     else if (korisnik == 2) this.answers[1]++;
//     else if (korisnik == 3) this.answers[2]++;
//     else if (korisnik == 4) this.answers[3]++;
//   },
//   displayResults: function (input) {
//     if (input instanceof Array) console.log(this.answers);
//   },
// };

// dugme.addEventListener("click", () => {
//   poll.registerNewAnswer();
// });

const answerButton = document.querySelector("#answer");

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: Array.from({ length: 4 }, () => 0),
  registerNewAnswer() {
    const userInput = prompt(
      `${this.question}\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}`
    );
    const languageIndex = parseInt(userInput) - 1;

    if (isNaN(languageIndex)) {
      console.log("Morate uneti broj");
    } else if (languageIndex < 0 || languageIndex > 3) {
      console.log("Broj mora biti od 1 do 4 (ukljucujuci 4)");
    } else {
      this.answers[languageIndex]++;
    }
    this.displayResults();
  },
  displayResults: function (type = "array") {
    if (type === "string") {
      console.log("Poll results are " + this.answers.join(", "));
    } else {
      console.log(this.answers);
    }
  },
};

answerButton.addEventListener("click", poll.registerNewAnswer.bind(poll));
