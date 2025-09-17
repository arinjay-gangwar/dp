/** Finds the 3rd least occurred number in an array */

function thirdLeastOccrEleInArray(arr) {
  let counts = {};

  for (const value of arr) {
    counts[value] = (counts[value] || 0) + 1;
  }

  const freq = Object.entries(counts);

  if (freq.length < 3) return null;

  return Number(freq.sort((a, b) => a[1] - b[1])[2][0]);
}

console.log(
  thirdLeastOccrEleInArray([14, 12, 12, 13, 13, 13, 11, 11, 11, 11, 15])
);
