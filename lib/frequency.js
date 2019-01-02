module.exports = {
  lineToNumber,
};

function lineToNumber(line) {
  const [ , sign, number ] = /([+-])(\d+)/.exec(line) || ['', '+', '0'];
  return parseInt(number, 10) * (sign === '-' ? -1 : 1);
}
