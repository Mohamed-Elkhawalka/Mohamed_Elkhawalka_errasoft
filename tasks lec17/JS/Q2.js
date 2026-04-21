function checkperfect(x) {
  if (isInteger(Math.sqrt(x))) return true;
  else return false;
}

var x = Number(prompt("Enter first number: "));

console.log(checkperfect(X));
