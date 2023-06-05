// Task 4: Create a function that will output the first 100 prime numbers.
function first100PrimeNum(n) {
    var primes = [];
    var startNumber = 2;
  
    while (primes.length < n) {
      if (isPrime(startNumber)) {
        primes.push(startNumber);
      }
      startNumber++;
    }
  
    return primes;
  }
  
  function isPrime(number) {
    for (var i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return number > 1;
  }
  
  var primes = first100PrimeNum(100);
  console.log(primes);
  