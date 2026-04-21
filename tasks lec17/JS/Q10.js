function PUM(input, end) {
    for (var i = 1; i <=  end; i++) {
        if (i % (input + 1) == 0) {
            console.log("PUM");
        }
        else {
            console.log(i);
        }
    }
}

var end = 12;
var input = Number(prompt("Enter a number for a PUM game: "));

PUM(input, end);
