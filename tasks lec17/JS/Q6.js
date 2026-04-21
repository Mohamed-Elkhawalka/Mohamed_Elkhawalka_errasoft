function checknumbers(n) {
  var checked_ture = false;
  for (var i = 0; i < n; i++) {
    var x = Number(prompt("Enter a number: "));
    while (x != 0) {
      if (x % 10 == 4 || x % 10 == 7) {
        checked_ture = true;
      }
      x /= 10;
    }
  }
  if (checked_ture) {
    return "It's your lucky day";
  } 
  else {
    return "It's not your lucky day";
  }
}

var n = Number(prompt("Enter the number of integers you will enter: "));

console.log(checknumbers(n));
