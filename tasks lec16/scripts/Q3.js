var x = prompt("Enter a new password: ");
var y = prompt("comfirm your password: ");
if (x === y)
{
    var valid = true;
}
else
{
    var valid = false;
}
if (valid)
{
    console.log("password is valid");
}
else
{
    console.log("password is not valid");
}