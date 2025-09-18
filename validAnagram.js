/** Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 - Checks if two strings are anagrams, accounting for all Unicode characters.
*/

function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  let counts = {};

  for (let char of s) {
    counts[char] = (counts[char] || 0) + 1;
  }

  for (let char of t) {
    if (!counts[char]) return false;
    counts[char]--;
  }

  return true;
}

console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "cat"));
console.log(validAnagram("plane", "dog"));
console.log(validAnagram("👍😀a", "a😀👍"));
console.log(validAnagram("👍😀a", "a😀😅"));
