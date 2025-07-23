// Returns true if the number is a palindrome, false otherwise

function isNumberPalindrome(num) {
  if (num < 0) return false;

  let rev = 0;
  let org = num;

  while (num > 0) {
    const digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
  }

  return org === rev;
}

console.log(isNumberPalindrome(1221));
console.log(isNumberPalindrome(-121));
