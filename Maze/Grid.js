import { GridSquare } from "./GridSquare.js";


export class Grid {
  constructor() {
    this.maze();
    this.dfsImplementation();
  }

  maze() {
    // create GridSquare objects to occupy the maze
    const s = new GridSquare('div', 'START_SQUARE');
    const n = new GridSquare('div', 'NOTHING_SQUARE');
    const p = new GridSquare('div', 'PATH_SQUARE');
    const g = new GridSquare('div', 'GOAL_SQUARE');
    // setting GridSquare object types
    s.setType('start');
    n.setType('nothing');
    p.setType('path');
    g.setType('goal');

    this.s = s;
    this.n = n;
    this.p = p;
    this.g = g;
    
    let maze = [
      [n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,g],
      [n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n],
      [n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n],
      [n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n],
      [n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n],
      [n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n],
      [n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n],
      [n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n],
      [n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n],
      [n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n],
      [n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n],
      [n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n],
      [n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n],
      [n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n],
      [n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n],
      [s,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n],
    ];
    this.grid = maze;
  }

  dfsImplementation() {
    let startRow = 0;
    let startCol = 0;
    // get the divwrapper DOM element
    const DIV_WRAPPER = document.getElementById('DIV_WRAPPER');

    // marks the starting point
    for (let r = 0; r < this.grid.length; r++) {
      for(let c = 0; c < this.grid[r].length; c++) {
        if(this.grid[r][c] === this.s) {
          startRow = r;
          startCol = c;
          break;
        }
      }
    }

    // this is what makes it dfs
    const stack = [[startRow,startCol]];

    const visited = new Set();

    while(stack.length > 0) {
      // output sequence and current node
      const [row,col] = stack.pop();
      // marks visited
      visited.add(`${row},${col}`);
      // condition to determine if goal exist
      if (this.grid[row][col] === this.g) {
        console.log('goal found');
        return true
      }

      if(this.grid[row][col] === this.n) {
        this.grid[row][col] = this.p;
      }
      
      // create a conditional that appends GridSquare elements on the grid based on strings on the grid
      // Double for loop that iterates through the 2D array and appends to div wrapper the element on the index.
      this.grid.forEach((row) => {
        row.forEach((col) => {
          if(col === this.s) {
            DIV_WRAPPER.appendChild(this.s.gridSquareElement)
          } else if (col === this.p) {
            DIV_WRAPPER.appendChild(this.p.gridSquareElement)
          }
        })
      })

      // checks neighbors
      for(const [dRow, dCol] of [[-1,0],[1,0],[0,-1],[0,1]]) {
        const newRow = row + dRow;
        const newCol = col + dCol;
        // marks the bounderies of the grid and checks for new nodes to visit
        const isValidRow = newRow >= 0 && newRow < this.grid.length ;
        const isValidCol = newCol >= 0 && newCol < this.grid[0].length;
        const isNotVisited = !visited.has(`${newRow},${newCol}`);
        if (isValidRow && isValidCol && isNotVisited) {
          stack.push([newRow,newCol]);
          // console.log(`Exploring node at row ${newRow}, column ${newCol}`);
        }
      }
    }
    console.log('goal not found');
  }
  // instead of using dfs to append it appends after dfs is used(Problem)
  appendingMaze() {
    const DIV_WRAPPER = document.getElementById('DIV_WRAPPER');

    for(let r = 0; r < this.grid.length; r++) {
      for(let c = 0; c < this.grid[r].length; c++) {
        if(this.grid[r][c] === "s") {
          const START_SQUARE = new GridSquare('div');
          START_SQUARE.setType('start');
          DIV_WRAPPER.appendChild(START_SQUARE.gridSquareElement);
        } else if(this.grid[r][c] === "n") {
          const NOTHING_SQUARE = new GridSquare('div');
          NOTHING_SQUARE.setType('nothing');
          DIV_WRAPPER.appendChild(NOTHING_SQUARE.gridSquareElement);
        } else if(this.grid[r][c] === "p") {
          const PATH_SQUARE = new GridSquare('div');
          PATH_SQUARE.setType('path');
          DIV_WRAPPER.appendChild(PATH_SQUARE.gridSquareElement);
        } else if(this.grid[r][c] === "g") {
          const GOAL_SQUARE = new GridSquare('div');
          GOAL_SQUARE.setType('goal');
          DIV_WRAPPER.appendChild(GOAL_SQUARE.gridSquareElement);
        }
      }
    }
    let pathCounter = 0;
    const intervalID = setInterval(() => {
      const paths = document.querySelectorAll('.path');

      paths[pathCounter].style.backgroundColor = 'blue';
      paths[pathCounter].style.transform = 'scale(0.5)';
      pathCounter++
      if(pathCounter > 239) {
        clearInterval(intervalID)
      }


    },1000)
  }
}
