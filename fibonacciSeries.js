// Returns fibonacci series up to n terms in an array

function fibonacciSeries(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];
  let i = 0,
    j = 1;
  const resultArr = [i, j];

  for (let k = 2; k <= n; k++) {
    resultArr.push(i + j);
    let next = i + j;
    i = j;
    j = next;
  }

  return resultArr;
}

console.log(fibonacciSeries(5));
