//example

function example() {
  var scope = 1;
}

console.log(scope); // ReferenceError : scope is not defined

let promenljiva = 5;
if (promenljiva) {
  var drugaPromenljiva = 6;
}
console.log(drugaPromenljiva); // 6;
