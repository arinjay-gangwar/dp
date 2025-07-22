// To Find the longest word in a given sentence.

function longestWord(str) {
  // let words = str.split(" ");
  // let index = 0;
  // let maxLen = 0;

  // for (let i = 0; i < words.length; i++) {
  //   let len = words[i].length;

  //   if (len > maxLen) {
  //     maxLen = len;
  //     index = i;
  //   }
  // }

  // return words[index];

  // Approach Two - Using Reduce;

  return str
    .split(" ")
    .reduce((longest, current) =>
      current.length > longest.length ? current : longest
    );
}

console.log(longestWord("This is a Sentence"));
