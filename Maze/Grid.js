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
      ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
      ['s','n','n','g','n','n','n','n','n','n','n','n','n','n','n','n'],
    ]

    
    this.grid = maze;

    const SQUARE_WRAPPER = document.getElementById('DIV_WRAPPER');

    for(let r = 0; r < maze.length; r++) {
      for(let c = 0; c < maze[r].length; c++) {
        
        if(maze[r][c] === 's') {
          const START_SQUARE = new GridSquare('div','START_SQUARE');
          START_SQUARE.setType('start');
          SQUARE_WRAPPER.appendChild(START_SQUARE.gridSquareElement); 
        } else if(maze[r][c] === 'g') {
          const GOAL_SQUARE = new GridSquare('div','START_SQUARE');
          GOAL_SQUARE.setType('goal');
          SQUARE_WRAPPER.appendChild(GOAL_SQUARE.gridSquareElement);
        } else if(maze[r][c] === "n") {
          const NOTHING_SQUARE = new GridSquare('div','NOTHING_SQUARE');
          NOTHING_SQUARE.setType('nothing');
          SQUARE_WRAPPER.appendChild(NOTHING_SQUARE.gridSquareElement)
        }
      }
    }
  }

  dfsImplementation() {
    let startRow = 0;
    let startCol = 0;

    for (let r = 0; r < this.grid.length; r++) {
      for(let c = 0; c < this.grid[r].length; c++) {
        if(this.grid[r][c] === "s") {
          startRow = r;
          startCol = c;
          break;
        }
      }
    }
    
    const stack = [[startRow,startCol]];

    const visited = new Set();

    while(stack.length > 0) {

      const [row,col] = stack.pop();

      visited.add(`${row},${col}`);
      // terminates function if "g" is found
      if(this.grid[row][col] === 'g') {
        console.log(`Found the goal at row ${row}, colmn ${col}`);
        return true
      }

      for(const [dRow, dCol] of [[-1,0],[1,0],[0,-1],[0,1]]) {
        const newRow = row + dRow;
        const newCol = col + dCol;
        // checks unvisted nodes of curren
        if(newRow >= 0 && newRow < this.grid.length && newCol >= 0 && newCol < this.grid.length && !visited.has(`${newRow},${newCol}`)) {
          stack.push([newRow,newCol]);
          console.log(`Exploring node at row ${newRow}, column ${newCol}`);
        }
      }
    }
    console.log('goal not found');
    return false
  }
}
