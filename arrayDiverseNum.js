// Task 6:Create a function that receives an array of numbers of diverse numbers 
// and returns an array containing only positive numbers.

function arrayPositiveNumbers(numbers) {
    var positiveNumbers = [];  
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        // If the current element is greater than 0, indicating a positive number,
        // we add it to the 'positiveNumbers' array using the 'push' method.
        positiveNumbers.push(numbers[i]);
      }
    }
    return positiveNumbers;
    // Finally, we return the 'positiveNumbers' array containing only positive numbers.
  }
    var numbers = [2, -4, 6, -8, -10, 12];
    var positiveNumbers = arrayPositiveNumbers(numbers);
    console.log(positiveNumbers); // Output: [2, 6, 12]

  