// Finds the factorial of a number

function factorial(num) {
  if (num === 0 || num === 1) return 1;
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(6));
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
