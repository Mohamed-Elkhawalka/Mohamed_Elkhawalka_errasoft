function reverselettercase(letter) {
  if (letter === letter.toLowerCase()) {
    return letter.toUpperCase();
  } 
  else {
    return letter.toLowerCase();
  }
}

var letter = prompt("Enter a letter");

console.log(reverselettercase(letter));
