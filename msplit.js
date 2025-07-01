function msplit(str) {
  var arr = [];
  var word = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      word += str[i];
    }
    if (str[i] === " ") {
      arr.push(word);
      word = "";
    }
  }

  arr.push(word);

  return arr;
}

console.log(msplit("This is a Sentence"));
