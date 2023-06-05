// Task 5: Create a function that will return a boolean specifying if a number is a prime number.
function isPrimeNum (number) {
    if (number <= 1) {
      return false;
    }
  
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      } 
      else {
      return true;
    } 
   
    }
    
  }

console.log(isPrimeNum(24)); // Output: false
console.log(isPrimeNum(27)); // Output: true