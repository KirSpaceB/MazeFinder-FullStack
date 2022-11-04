
export class Grid {
  constructor() {
    console.log('test');
    this.ctx;
    this.canvasGrid();
    this.animatingCanvasGrid();
    this.styleCanvasGrid("500px")
  }

  canvasGrid() {
    let canvasForGrid = document.createElement('canvas');
    canvasForGrid.setAttribute('id', 'canvasForGrid')
    document.body.appendChild(canvasForGrid);
  }

  styleCanvasGrid(gridSize) {
    let styleForGrid = document.getElementById('canvasForGrid');
    styleForGrid.style.width = gridSize;
    styleForGrid.style.height = gridSize;

    return styleForGrid;
  }
  
  animatingCanvasGrid() {
    let canvas = document.querySelector('canvas');

    let ctx = canvas.getContext('2d');

    ctx.beginPath()
    ctx.moveTo(10,40);
    ctx.lineTo(20,300);
    ctx.lineTo(30,100);
    ctx.stroke();
  }
}