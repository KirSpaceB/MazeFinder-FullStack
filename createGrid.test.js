class Grid {
  constructor(rows,cols) {
    this.rows = rows;
    this.cols = cols;
    this.area = this.rows * this.cols;
  }
}

describe('I want a rows and cols to equal area', () => {
  it('Creates grid = size of area', () => {
    const grid = new Grid(16,16);
  expect(grid.area).toEqual(256);
  })
})
//figure out how to put this.area into the describe scope