// loop //

function prva() {
  console.log("Ovo je petlja");
  druga();
}

function druga() {
  console.log("Ovo je petlja2");
  prva();
}

druga(); // maximum callstack size exceeded
