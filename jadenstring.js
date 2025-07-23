// Converts a clean string to Title Case (first letter of each word capitalized)
// Assumes input has no extra spaces or punctuation

function jadenstring(str) {
  var newStr = str.split(" ");
  newStr = newStr.map((a) => a[0].toUpperCase() + a.slice(1));
  return newStr.join(" ");
}

console.log(jadenstring("this is a string"));
