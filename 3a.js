const parse = require('./lib/parse');
const Grid = require('./lib/grid');
const Claim = require('./lib/claim');

const claims = parse('3').map((claim) => { return new Claim(claim); });
// const claims = [
//   '#1 @ 1,2: 3x3',
//   '#2 @ 0,0: 1x1',
//   '#3 @ 3,3: 2x1',
// ].map((claim) => { return new Claim(claim); });

const grid = new Grid();
claims.forEach((claim) => {
  claim.points().forEach(({ x, y }) => {
    grid.add(x, y, claim.id);
  });
});

const overlapCount = Object.values(grid.coords).filter((ids) => {
  return ids.length > 1;
}).length;

console.log(overlapCount);