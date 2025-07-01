function jadenstring(str) {
  var newStr = str.split(" ");
  newStr = newStr.map((a) => a[0].toUpperCase() + a.slice(1));
  return newStr.join(" ");
}

console.log(jadenstring("this is a string"));
