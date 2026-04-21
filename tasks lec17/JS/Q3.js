function checkarray(inputs) {
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i] == 0) {
      return i + 1;
    }
  }
}

var x1 = Number(prompt("Enter X1: "));
var x2 = Number(prompt("Enter X2: "));
var x3 = Number(prompt("Enter X3: "));
var x4 = Number(prompt("Enter X4: "));
var x5 = Number(prompt("Enter X5: "));
var inputs = [x1, x2, x3, x4, x5];

console.log(checkarray(inputs));
