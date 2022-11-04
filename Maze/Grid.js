
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
    
    let x = 0;
    let xVelocity = 1;
    let y = 0;
    let yVelocity = 1;
    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0,0, 500,500)
      ctx.fillRect(x,y,10,10); // the default is 150 height 300 width, how do I change the actual height and width
      if (x > 300 || x < 0) {
        xVelocity = -xVelocity;
      }

      if (y > 150 || y < 0) {
        yVelocity = -yVelocity;
      }
      x += xVelocity;
      y += yVelocity;
    }
    animate();

  }
}