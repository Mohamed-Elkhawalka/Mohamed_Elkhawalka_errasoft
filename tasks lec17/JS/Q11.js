function checkproduct(x, y) {
    if ((x * y) > 0) {
        return "Positive";
    }
    else {
        return "Negative";
    }
}

var x = Number(prompt("Enter first number: "));
var y = Number(prompt("Enter socund number: "));

console.log(checkproduct(x, y));
