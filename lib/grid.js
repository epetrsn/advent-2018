module.exports = Grid;

function Grid() {
  this.coords = {};
  this.width = 0;
  this.height = 0;
}

function keyFor(x, y) {
  return `${x},${y}`;
}

Grid.prototype = {
  add(x, y, id) {
    const key = keyFor(x, y);
    const ids = this.coords[key] = this.coords[key] || [];
    ids.push(id);
    this.width = Math.max(this.width, x + 1);
    this.height = Math.max(this.height, y + 1);
  },
  at(x, y) {
    return this.coords[keyFor(x, y)] || [];
  },
  draw(limit = 0) {
    if (this.width + this.height > 400) {
      console.log(`Grid (${this.width}, ${this.height}) is too big to draw. Skipping...`);
      return;
    }
    const rows = [];
    for (let y = 0; y < this.height; ++y) {
      let row = '';
      for (let x = 0; x < this.width; ++x) {
        row += this.at(x, y).length > limit ? '.' : '#';
      }
      rows.push(row);
    }
    console.log(rows.join('\n'));
  },
};
