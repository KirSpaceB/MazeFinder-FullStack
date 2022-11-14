import { GridSquareAbstraction } from "./GridSquareAbstraction.js";

export class Grid {
  constructor() {

  this.gridWrapper();
  this.setMaze(); 

  }
  

  // childAppendedToWrapper is a GridSquareAbstraction object
  // This function returns nothing
  gridWrapper() {
    this.divWrapper = document.createElement('div');
    this.divWrapper.setAttribute('id', 'divWrapper');
    document.body.appendChild(this.divWrapper);    
  }

  
  setMaze() {
    let maze = [
      ["s","w","n","n","n","w","n","n","n","w","n","n","n","w","n","g"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","w","n","n"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","w","w","n"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","w","n","n"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","w","n","w"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","w","n","n"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","w","w","n"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","w","n","n"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","w","n","w"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","w","n","n"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","w","w","n"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","w","n","n"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","w","n","w"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","w","n","n"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","w","w","n"],
      ["n","n","n","w","n","n","n","w","n","n","n","w","n","n","n","n"],
    ]

    let divWrapperForMaze = document.getElementById('divWrapper');

    for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze[i].length; j++) {

        const wallSquare = new GridSquareAbstraction('div', 'wallSquare', 'black');
        const nothingSquare = new GridSquareAbstraction('div','nothingSquare', 'black');
        const startSquare = new GridSquareAbstraction('div', 'startSquare', 'black');
        const goalSquare = new GridSquareAbstraction('div', 'goalSquare', 'black');
        const pathSquare = new GridSquareAbstraction('div', 'pathSquare', 'black');

        this.w = wallSquare;
        this.w.setType('wall');
        this.n = nothingSquare;
        this.n.setType('nothing');
        this.s = startSquare;
        this.s.setType('start');
        this.g = goalSquare;
        this.g.setType('goal');
        this.p = pathSquare;
        this.p.setType('path');


        if (maze[i][j] === "w") {
          divWrapperForMaze.appendChild(this.w.createElement);
        } else if (maze[i][j] === "p") {
          divWrapperForMaze.appendChild(this.p.createElement);
        } else if (maze[i][j] === "g") { // The computer reads "g" at maze[4][4], and it appends it at the first div of divWrapper
          divWrapperForMaze.appendChild(this.g.createElement)
        } else if (maze[i][j] === "s") {
          divWrapperForMaze.appendChild(this.s.createElement)
        } else if (maze[i][j] === "n") {
          divWrapperForMaze.appendChild(this.n.createElement)
        }
      }
    }
  }
}