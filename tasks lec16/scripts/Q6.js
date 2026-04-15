var x = Number(prompt("Enter you score: "));
if (x >= 80)
{
    var grade = "A";
}
else if (x >= 70)
{
    var grade = "B";
}
else if (x >= 60)
{
    var grade = "C";
}
else if ( x >= 50)
{
    var grade = "D";
}
else
{
    var grade = "F";
}
console.log(`Your Grade: ${grade}`);