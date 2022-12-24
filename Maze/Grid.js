import { GridSquare } from "./GridSquare.js";


export class Grid {
  constructor() {
    this.maze();
    this.dfsImplementation();
  }

  maze() {
    let maze = [
      ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
      ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
      ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
      ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
      ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
      ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
      ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
      ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
      ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
      ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
      ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
      ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
      ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
      ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
      ['n','n','n','n','n','g','n','n','n','n','n','n','n','n','n','n'],
      ['s','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
    ]

    
    this.grid = maze;

    const DIV_WRAPPER = document.getElementById('DIV_WRAPPER');


    for (let r = 0; r < this.grid.length; r++) {
      for(let c = 0; c < this.grid[r].length; c++) {
        if(this.grid[r][c] === "s") {
          const start = new GridSquare('div','start');
          start.setType('start');
          DIV_WRAPPER.appendChild(start.gridSquareElement);
        } else if(this.grid[r][c] === "n") {
          const nothing = new GridSquare('div','NOTHING_SQUARE');
          nothing.setType('nothing');
          this.nothing = nothing;
          DIV_WRAPPER.appendChild(this.nothing.gridSquareElement);
        } else if(this.grid[r][c] === "g") {
          const goal = new GridSquare('div');
          goal.setType('goal');
          DIV_WRAPPER.appendChild(goal.gridSquareElement);
        }
      }
    }

  }

  dfsImplementation() {
    let startRow = 0;
    let startCol = 0;

    // marks the starting point
    for (let r = 0; r < this.grid.length; r++) {
      for(let c = 0; c < this.grid[r].length; c++) {
        if(this.grid[r][c] === "s") {
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
      if (this.grid[row][col] === "g") {
        console.log('goal found');
        return true
      }
      // checks neighbors
      for(const [dRow, dCol] of [[-1,0],[1,0],[0,-1],[0,1]]) {
        const newRow = row + dRow;
        const newCol = col + dCol;
        // marks the bounderies of the grid and checks for new nodes to visit
        if(newRow >= 0 && newRow < this.grid.length && newCol >= 0 && newCol < this.grid.length && !visited.has(`${newRow},${newCol}`)) {
          stack.push([newRow,newCol]);
          console.log(`Exploring node at row ${newRow}, column ${newCol}`); 
          // suppose to change the nothing square to path type to show the path that dfs search is taking
          setTimeout(() => {
            console.log(this.grid[newRow][newCol])
            if(this.grid[newRow][newCol] === "n") {
              this.nothing.setType('path')
            }
          },500);
        }
      }
    }
    console.log('goal not found');
  }
}
