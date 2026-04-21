function printPrimeNumbers(x) {
    for (var i = 2; i <= x; i++)
    {
        var is_prime = true;
        for (var j = 2; j < i; j++) {
            if ((i % j) == 0) {
                is_prime = false;
            }
        }
        if (is_prime) {
            console.log(i);
        }
    }
    return 0;
}

var x = Number(prompt("Enter a number: "));

printPrimeNumbers(x);