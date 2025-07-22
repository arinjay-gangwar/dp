// To Count the occurrences of each character in string

function characterOccurence(str) {
  let counts = {};

  for (let char of str) {
    counts[char] = (counts[char] || 0) + 1;
  }

  return counts;
}

console.log(characterOccurence("asddfgjhk"));
