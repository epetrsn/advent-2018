const parse = require('./lib/parse');
const Grid = require('./lib/grid');
const Claim = require('./lib/claim');

const claims = parse('3').map((claim) => { return new Claim(claim); });

const grid = new Grid();
claims.forEach((claim) => {
  claim.points().forEach(({ x, y }) => {
    grid.add(x, y, claim.id);
  });
});

const intactClaims = claims
  .filter((claim) => {
    return claim.points().every(({ x, y }) => {
      return grid.at(x, y).length === 1;
    });
  })
  .map(({ id }) => { return id; });

console.log(intactClaims);