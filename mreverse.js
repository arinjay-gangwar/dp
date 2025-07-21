function mreverse(str) {
  let nstr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    nstr += str[i];
  }

  return nstr;
}

console.log(mreverse("hello"));
