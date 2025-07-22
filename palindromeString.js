function palindromeString(str) {
  // Approach 1 using built in

  //   return str === str.split("").reverse().join("");

  // Two Pointer Approach:
  // Start with `left` at index 0 and `right` at the last index.
  // Use a `while` loop that runs while `left` is less than `right`.
  // Inside the loop:
  //   - If the character at `left` is not equal to the character at `right`, return false.
  //   - Otherwise, increment `left` and decrement `right`.
  // If the loop completes without returning false, return true.

  //   Can be used to clean string - const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = str.length - 1;

  // Two Pointer Approach:
  // Start with left at index 0 and right at last index.
  // Use while loop until left is less than right.

  while (left < right) {
    // If characters don't match, it's not a palindrome.
    if (str[left] !== str[right]) {
      return false;
    }
    // Move inward
    left++;
    right--;
  }

  // All characters matched
  return true;
}
