function sumOddEven(n) {
    var sum = 0;
    var oddNumbers = 0;
    for (var i = 0; i < n; i++) {
        var x = Number(prompt("Enter a number: "));
        sum += x;
        if (x % 2) {
            oddNumbers++;
        }
    }
    var evenNumbers = n - oddNumbers;
    return `sum = ${sum}, number of odd numbers = ${oddNumbers}, number of even numbers = ${evenNumbers}`;
} 

var n = Number(prompt("Enter how many integers you want to enter: "));

console.log(sumOddEven(n));