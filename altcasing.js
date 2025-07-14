function altcasing(str) {
  return str
    .split("")
    .map((s) => (s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase()))
    .join("");
}

console.log(altcasing("tHis Is a Alt CaSe String"));
