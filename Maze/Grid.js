import { GridSquareAbstraction } from "./GridSquareAbstraction.js";

export class Grid {
  constructor() {

  this.gridWrapper();
  this.setMaze(); //reads setMaze();

  }
  

  // childAppendedToWrapper is a GridSquareAbstraction object
  // This function returns nothing
  gridWrapper() {
    this.divWrapper = document.createElement('div');
    this.divWrapper.setAttribute('id', 'divWrapper');
    document.body.appendChild(this.divWrapper);    
  }

  
  setMaze() {

    const wallSquare = new GridSquareAbstraction('div', 'wallSquare', 'black');
    const nothingSquare = new GridSquareAbstraction('div', 'nothingSquare', 'black');
    const startSquare = new GridSquareAbstraction('div','startSquare', 'black');
    const goalSquare = new GridSquareAbstraction('div','goalSquare', 'black');
    const pathSquare = new GridSquareAbstraction('div','pathSquare', 'black');

    const s = startSquare;
    const g = goalSquare;
    const w = wallSquare;
    const n = nothingSquare;
    const p = pathSquare;

    this.w = w;
    this.s = s;
    this.g = g;
    this.n = n;
    this.p = p;

    let maze = [
      [s,n,w,w,w],
      [p,g,w,w,w],
    ]

    let divWrapperForMaze = document.getElementById('divWrapper');
    for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze[i].length; j++) {
        if (maze[i][j] === w) {
          this.w.setType('wall')
          divWrapperForMaze.appendChild(maze[i][j].createElement);
        } else if (maze[i][j] === p) {
          this.p.setType('path');
          divWrapperForMaze.appendChild(maze[i][j].createElement);
        } else if (maze[i][j] === g) {
          this.g.setType('goal');
          divWrapperForMaze.appendChild(maze[i][j].createElement)
        } else if (maze[i][j] === s) {
          this.s.setType('start');
          divWrapperForMaze.appendChild(maze[i][j].createElement)
        } else if (maze[i][j] === n) {
          this.n.setType('nothing');
          divWrapperForMaze.appendChild(maze[i][j].createElement)
        }
        
      }
    }
  }
}