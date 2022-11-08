import { GridSquare } from "./GridSquare.js";

export class Grid extends GridSquare {
  constructor() {
    super();
    this.gridWrapper();
    this.mazeGrid(16);
  }

  gridWrapper() {
    let gridWrapperElement = document.createElement('div');
    gridWrapperElement.setAttribute('id', 'gridWrapper');
    gridWrapperElement.style.backgroundColor = "white";
    document.body.appendChild(gridWrapperElement);
  }

  mazeGrid(size) {
    let rows = size;
    let cols = size;
    let area = rows * cols;
    let gridWrapper = document.getElementById('gridWrapper');

    for (let i = 0; i < area; i++ ) {
      let grid = document.createElement('div');
      grid.className = 'grid-item';
      grid.style.backgroundColor = 'white';
      gridWrapper.appendChild(grid);
    }
  }
  
}