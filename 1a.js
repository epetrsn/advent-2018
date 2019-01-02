const parse = require('./lib/parse');
const { lineToNumber } = require('./lib/frequency');

const sum = parse('1')
  .map(lineToNumber)
  .reduce((sum, delta) => {
    return sum + delta;
  }, 0);

console.log(sum);
