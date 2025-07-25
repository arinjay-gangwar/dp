// Checks if a number is prime, returns true if it is otherwise false

function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(isPrime(2));
console.log(isPrime(49));
console.log(isPrime(53));
console.log(isPrime(3));
console.log(isPrime(4));
