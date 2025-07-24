// Function to reverse the order of words in a sentence (words only, not characters)

function reverseWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = words.length - 1; i >= 0; i--) {
    result.push(words[i]);
  }

  return result.join(" ");
}

console.log(reverseWords("Hello World"));
