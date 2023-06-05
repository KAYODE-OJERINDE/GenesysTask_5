// Task 2: Create a function that will calculate the average of numbers in an array.
function averageOfNumbers(numbers) {
    var total = 0;
    var calculate = numbers.length;
    
    for (var i = 0; i < calculate; i++) {
    total += numbers[i];
  }

  var average = total / calculate;
  return average;
}
var numbers = [10, 15, 20, 25];
var average = averageOfNumbers(numbers);
console.log(average); // Output: 17.5