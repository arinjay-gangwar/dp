// Manually reverses a string (mimics str.split("").reverse().join(""))

function mreverse(str) {
  let rev = "";

  for (let i = str.length - 1; i >= 0; i--) rev += str[i];

  return rev;
}

console.log(mreverse("olleH"));
