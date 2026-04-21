function check15(x, y) {
  if (x == 15 || y == 15 || x + y == 15) {
    return true;
  } else return false;
}

var x = Number(prompt("Enter first number: "));
var y = Number(prompt("Enter second number: "));

console.log(check15(x, y));
