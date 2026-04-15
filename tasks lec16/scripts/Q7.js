var temp = Number(prompt("Enter the temperature: "));
var weather_is_hot = null;
if (temp > 30)
{
    weather_is_hot = true;
    console.log("weather is hot");
}
else
{
    weather_is_hot = false;
    console.log("weather is cold");
}