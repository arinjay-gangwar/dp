// Alternates the case of each character in the string
// Converts uppercase to lowercase and vice versa

function altcasing(str) {
  return str
    .split("")
    .map((s) => (s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase()))
    .join("");
}

console.log(altcasing("tHis Is a Alt CaSe String and tHIS iS Fun"));
