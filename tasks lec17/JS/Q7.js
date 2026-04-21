function printDivisors(x) {
    for (var i = 1; i <= x; i++) {
        if ((x % i) == 0) {
            console.log(i);          
        }
    }
    return 0;
}

var x = Number(prompt("Enter a number"));

printDivisors(x);
