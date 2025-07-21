function lengthOfLongestSubstring(s) {
  // // Approach 1: Sliding Window using Set — Time Complexity: O(n)

  // let maxLength = 0,
  //   start = 0,
  //   end;
  // let nset = new Set();

  // for (end = 0; end < s.length; end++) {
  //   while (nset.has(s[end])) {
  //     nset.delete(s[start]);
  //     start++;
  //   }
  //   nset.add(s[end]);
  //   maxLength = Math.max(maxLength, end - start + 1);
  // }

  // return maxLength;

  // -------------------------------------------------------------------------------------------------------------------------------------

  // Approach 2: Sliding Window using Map — Time Complexity: O(n)
  // Optimized by jumping the start pointer to skip duplicate characters

  let nmap = new Map();
  let maxLength = 0,
    start = 0;

  for (let end = 0; end < s.length; end++) {
    let char = s[end];

    if (nmap.has(char) && nmap.get(char) >= start) {
      start = nmap.get(char) + 1;
    }

    nmap.set(char, end);

    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcbccabab"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring("dvdf"));
