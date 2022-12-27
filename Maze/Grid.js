import { GridSquare } from "./GridSquare.js";


export class Grid {
  constructor() {
    this.maze();
    this.dfsImplementation();
    this.appendingMaze();
  }

  maze() {
    let maze = [
      ['n','n','n','n','n','n','n','n','n','n','n','n','n','n','n','g'],
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
      ['s','n','n','n','n','n','n','n','n','n','n','n','n','n','n','n'],
    ];
    this.grid = maze;
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

      // So the idea is we change the "n" traversed to p and THEN do the method that appends elements to the grid
      // logic here is probably wrong fix later
      if(this.grid[row][col] === "n") {
        this.grid[row][col] = "p"
      }

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
          console.log(`Exploring node at row ${newRow}, column ${newCol}`);
        }
      }
    }
    console.log('goal not found');
  }
  // instead of using dfs to append it appends after dfs is used(Problem)
  appendingMaze() {
    console.log(this.grid);
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
