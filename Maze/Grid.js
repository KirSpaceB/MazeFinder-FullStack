import { GridSquare } from "./GridSquare.js";


export class Grid {
  constructor() {
    this.maze();
    this.dfsImplementation();
  }

  maze() {
    let maze = 
    [
      ["n","w","n","n","n","w","n","n","n","w","n","n","n","w","n","g"],
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
      ["s","n","n","w","n","n","n","w","n","n","n","w","n","n","n","n"],
    ];
    this.grid = maze;
  }

  dfsImplementation() {
    // Create a promise that changes all the n strings using dfs to p then append to DIV_WRAPPER the p strings as GridSquare objects
    const createNewGrid = new Promise((resolve,reject) => {

      // Pointers to coordinates
      let startRow = 0;
      let startCol = 0;

      // Marks starting point
      for (let r = 0; r < this.grid.length; r++) {
        for(let c = 0; c < this.grid[r].length; c++) {
          if(this.grid[r][c] === "s") {
            startRow = r;
            startCol = c;
            break;
          }
        }
      };

      // Stores pointer to current coordinate
      const stack = [[startRow,startCol]];

      // Marks node as visited so DFS cannot search the same spot again
      const visited = new Set();
      
      // DFS Search
      while(stack.length > 0) {

        // output sequence and current node
        const [row,col] = stack.pop();
  
        // marks visited
        visited.add(`${row},${col}`);

        // Resolve the promise once goal is found
        if(this.grid[row][col] === "g") {
          resolve();
          return;
        }
  
        // condition to determine if goal exist
        if(this.grid[row][col] === "n") {
          this.grid[row][col] = "p"
        }

        // checks neighbors
        for(const [dRow, dCol] of [[-1,0],[1,0],[0,-1],[0,1]]) {
          const newRow = row + dRow;
          const newCol = col + dCol;
          // marks the bounderies of the grid and checks for new nodes to visit
          const isValidRow = newRow >= 0 && newRow < this.grid.length;
          const isValidCol = newCol >= 0 && newCol < this.grid[0].length;
          const isNotVisited = !visited.has(`${newRow},${newCol}`);
  
          if (isValidRow && isValidCol && isNotVisited) {

            // Avoid walls in the dfs
            if(this.grid[newRow][newCol] === "w") {
              continue;
            };
            
            // Updates the stack with the coordinates searched
            stack.push([newRow,newCol]);
            console.log(`Exploring node at row ${newRow}, column ${newCol}`);
          }
        }
      };
      reject('Goal not found')
    });

    createNewGrid.then(async () => {
      // Gets the DIV_WRAPPER element from the DOM to store GridSquare objects
      const DIV_WRAPPER = document.getElementById('DIV_WRAPPER');
      // Creates UI on DOM of the Grid
      for(let r = 0; r < this.grid.length; r++) {
        for(let c = 0; c < this.grid[r].length; c++) {
          // Conditional that appends a GridSquare object on the DOM depending on the coordinates in the r and c values
          if(this.grid[r][c] === "s") {
            const START_SQUARE = new GridSquare('div');
            START_SQUARE.setType('start');
            DIV_WRAPPER.appendChild(START_SQUARE.gridSquareElement);
          } else if(this.grid[r][c] === "n") {
            const NOTHING_SQUARE = new GridSquare('div');
            NOTHING_SQUARE.setType('nothing');
            DIV_WRAPPER.appendChild(NOTHING_SQUARE.gridSquareElement)
          } else if(this.grid[r][c] === "w") {
            const WALL_SQUARE = new GridSquare('div');
            WALL_SQUARE.setType('wall');
            DIV_WRAPPER.appendChild(WALL_SQUARE.gridSquareElement)
          } else if(this.grid[r][c] === "p") {
            await new Promise((resolve) => {setInterval(resolve, 1000)})
            const PATH_SQUARE = new GridSquare('div');
            DIV_WRAPPER.appendChild(PATH_SQUARE.gridSquareElement);
            PATH_SQUARE.setType('path');
          } else if(this.grid[r][c] === "g") {
            const GOAL_SQUARE = new GridSquare('div');
            GOAL_SQUARE.setType('goal');
            DIV_WRAPPER.appendChild(GOAL_SQUARE.gridSquareElement)
          }
        }
      };
    }).catch((error) => {
      console.log(error)
    })
  };

  // instead of using dfs to append it appends after dfs is used(Problem)
  appendingMaze() {
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
