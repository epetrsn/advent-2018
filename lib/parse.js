const fs = require('fs');
const path = require('path');

function parse(name) {
  return parseInput(getInput(name));
}

function getInput(name) {
  const filename = path.resolve(__dirname, `../inputs/${name}`);
  return fs.readFileSync(filename, { encoding: 'utf8' });
}

function parseInput(input) {
  return input.split(/[\r\n]+/g);
}

module.exports = parse;
Object.assign(parse, {
  getInput,
  parseInput,
});
