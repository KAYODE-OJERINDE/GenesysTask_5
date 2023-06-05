// Task 3: Create a function that checks if a number, n is divisible by two numbers x and y. 
//All inputs are positive, non-zero digits.
function numDivisibleXY (n, x, y) {
    if (n % x === 0 && n % y ===0) {
    // The 'if' statement checks if the remainder of dividing 'n' by 'x' and 'y' is zero.
    // If the remainder is zero for both divisions, it means 'n' is divisible by both 'x' and 'y'.
    return true;
    // If the condition is met, we return 'true' to indicate that 'n' is divisible by both 'x' and 'y'.
} 
else {
    return false;
     // If the condition is not met, we return 'false' to indicate that 'n' is not divisible by both 'x' and 'y'.
    }
}

var n = 224;
var x = 6;
var y = 4;

if (numDivisibleXY(n, x, y)) {
  console.log(n + ' is divisible by ' + x + ' and ' + y);
} else {
  console.log(n + ' is not divisible by ' + x + ' and ' + y);
}