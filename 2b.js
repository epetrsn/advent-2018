const parse = require('./lib/parse');

const boxes = parse('2');

function computeDiff(a, b) {
  let diff = 0;
  const length = Math.max(a.length, b.length);
  for (let i = 0; i < length; ++i) {
    diff += a[i] !== b[i] ? 1 : 0;
  }
  return diff;
}

const pairs = [];

while (boxes.length > 0) {
  const box = boxes.pop();
  boxes
    .filter((otherBox) => {
      return computeDiff(box, otherBox) === 1;
    })
    .forEach((otherBox) => {
      pairs.push([box, otherBox]);
    });
}

console.log(pairs.join('\n'));
