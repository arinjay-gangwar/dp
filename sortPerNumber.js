// const sentence = "my3 name1 is2 sumit4";

// const sorted = sentence
//   .split(" ")
//   .sort((a, b) => a.match(/\d/) - b.match(/\d/))
//   .join(" ");

// console.log(sorted);

function sortSentence(sentence) {
  const words = sentence.split(" ");

  function getNumber(word) {
    let num = 0;
    for (let ch of word) {
      if (ch >= "0" && ch <= "9") {
        num = num * 10 + (ch - "0");
      }
    }
    return num;
  }

  words.sort((a, b) => getNumber(a) - getNumber(b));

  return words.join(" ");
}

const sentence = "my3 name1 is2 sumit4";
console.log(sortSentence(sentence));
