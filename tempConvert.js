// Task 1: Create a function that will be able to convert figures from Fahrenheit to Celsius.
function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    // The variable 'celsius' is created to store the converted temperature.
    // The mathematical formula for converting Fahrenheit to Celsius is (Fahrenheit - 32) * 5/9.
    return celsius;
}

var fahrenheit = 35;
var celsius = fahrenheitToCelsius(fahrenheit);
console.log(celsius); // Output: 1.6666666666666667