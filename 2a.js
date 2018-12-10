const parse = require('./lib/parse');

function countLetters(str) {
  const counts = {};
  str.split('').forEach((char) => {
    counts[char] = (counts[char] || 0) + 1;
  });
  return [2, 3].map((num) => {
     return Object.values(counts).includes(num) ? 1 : 0;
  });
}

const checksum = parse('2')
  .map(countLetters)
  .reduce((total, box) => {
    total[0] += box[0];
    total[1] += box[1];
    return total;
  }, [0, 0])
  .reduce((a, b) => {
    return a * b;
  }, 1);

console.log(
  checksum
);

