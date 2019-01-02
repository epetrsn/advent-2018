const parse = require('./lib/parse');
const { lineToNumber } = require('./lib/frequency');

const seen = {};
const deltas = parse('1').map(lineToNumber);

let i = 0;
let frequency = 0;
while(!seen[frequency]) {
  const delta = deltas[i % deltas.length];
  seen[frequency] = true;
  frequency += delta;
  ++i;
}

console.log(frequency, i);
