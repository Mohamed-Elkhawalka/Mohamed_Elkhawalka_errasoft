function sumOdd(start, end) {
    var sum = 0;
    for(var i = start; i < end; i++) {
        if (i % 2) {
            sum += i;
        }
    }
    return sum;
}

var start = Number(prompt("Enter the first number: "));
var end = Number(prompt("Enter the last number: "));

console.log(sumOdd(start, end));
