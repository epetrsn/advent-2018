module.exports = Claim;

function Claim(str) {
  Object.assign(this, parseClaimStr(str));
}


function parseClaimStr(str) {
  const match = /#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/.exec(str);
  const [id, left, top, width, height] = match.slice(1).map((num) => {
    return parseInt(num, 10);
  });
  return { id, left, top, width, height };
}

Claim.prototype = {
  points() {
    const points = [];
    for (let dx = 0; dx < this.width; ++dx) {
      for (let dy = 0; dy < this.height; ++dy) {
        points.push({
          x: this.left + dx,
          y: this.top + dy,
        });
      }
    }
    return points;
  }
};