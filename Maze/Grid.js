import { GridSquare } from "./GridSquare.js";


export class Grid {
  constructor() {
    this.maze();
    this.dfsImplementation();
    this.appendingMaze();
  }

  maze() {
    let maze = [
      ['n','n','n','n','n','n','n','n','g','n','n','n','n','n','n','n'],
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
    ]

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
      if(this.grid[row][col] === "n") {
        this.grid[row][col] = "p"
      }

      // checks neighbors
      for(const [dRow, dCol] of [[-1,0],[1,0],[0,-1],[0,1]]) {
        const newRow = row + dRow;
        const newCol = col + dCol;
        // marks the bounderies of the grid and checks for new nodes to visit
        if(newRow >= 0 && newRow < this.grid.length && newCol >= 0 && newCol < this.grid.length && !visited.has(`${newRow},${newCol}`)) {
          stack.push([newRow,newCol]);
          console.log(`Exploring node at row ${newRow}, column ${newCol}`);  
        }
      }
    }
    console.log('goal not found');
  }
  
  appendingMaze() {
    console.log(this.grid);
    const DIV_WRAPPER = document.getElementById('DIV_WRAPPER');

    let counter = 0;

    const intervalId = setInterval(() => {
      if (counter >= this.grid.length * this.grid[0].length) {
        clearInterval(intervalId);
        return;
      }
    
      for(let r = 0; r < this.grid.length; r++) {
        for(let c = 0; c < this.grid[r].length; c++) {
    
          if(this.grid[r][c] === "s") {
            const START_SQUARE = new GridSquare('div');
            START_SQUARE.setType('start');
            DIV_WRAPPER.appendChild(START_SQUARE.gridSquareElement);
            counter++;
          } else if (this.grid[r][c] === "n") {
            const NOTHING_SQUARE = new GridSquare('div');
            NOTHING_SQUARE.setType('nothing');
            DIV_WRAPPER.appendChild(NOTHING_SQUARE.gridSquareElement);
            counter++;
          } else if (this.grid[r][c] === "p") {
            const PATH_SQUARE = new GridSquare('div');
            PATH_SQUARE.setType('path');
            PATH_SQUARE.gridSquareElement.style.opacity = 0;
            PATH_SQUARE.gridSquareElement.style.transform = "scale(0.5)";
            DIV_WRAPPER.appendChild(PATH_SQUARE.gridSquareElement);
            setTimeout(() => {
              PATH_SQUARE.gridSquareElement.style.opacity = 1;
              PATH_SQUARE.gridSquareElement.style.transform = "scale(1)";
            }, 100);
            counter++;
          } else if (this.grid[r][c] === "g") {
            const GOAL_SQUARE = new GridSquare('div');
            GOAL_SQUARE.setType('goal');
            DIV_WRAPPER.appendChild(GOAL_SQUARE.gridSquareElement);
            counter++;
          }
        }
      }
      let pathCounter = 0;
      const pathSquares = document.querySelectorAll('.path');
      console.log(pathSquares)
      const animatePathSquare = () => {
        if (pathCounter >= pathSquares.length) {
          return;
        }
    
        pathSquares[pathCounter].style.opacity = 0;
        pathSquares[pathCounter].style.transform = "scale(0.5)";
        setTimeout(() => {
          pathSquares[pathCounter].style.backgroundColor = "pink";
          pathSquares[pathCounter].style.opacity = 1;
          pathSquares[pathCounter].style.transform = "scale(1)";
          pathCounter++;
          animatePathSquare();
        }, 100 * pathCounter);
      };
      animatePathSquare();
    }, 100);  // interval of 100ms



    // for(let r = 0; r < this.grid.length; r++) {
    //   for(let c = 0; c < this.grid[r].length; c++) {
    //     console.log(this.grid[r][c]);

    //     if(this.grid[r][c] === "s") {
    //       const START_SQUARE = new GridSquare('div');
    //       START_SQUARE.setType('start');
    //       START_SQUARE.gridSquareElement.style.opacity = '0';
    //       START_SQUARE.gridSquareElement.style.transform = "scale(0.5)";
    //       DIV_WRAPPER.appendChild(START_SQUARE.gridSquareElement);
    //       START_SQUARE.gridSquareElement.style.opacity  = 1;
    //       START_SQUARE.gridSquareElement.style.transform = "scale(1)";
    //       counter++
    //     } else if(this.grid[r][c] === "n") {
    //       const NOTHING_SQUARE = new GridSquare('div');
    //       NOTHING_SQUARE.setType('nothing');
    //       DIV_WRAPPER.appendChild(NOTHING_SQUARE.gridSquareElement);
    //     } else if (this.grid[r][c] === "p") {
    //       const PATH_SQUARE = new GridSquare('div');
    //       PATH_SQUARE.setType('path');
    //       PATH_SQUARE.gridSquareElement.style.opacity = '0';
    //       PATH_SQUARE.gridSquareElement.style.transform = "scale(0.5)";
    //       DIV_WRAPPER.appendChild(PATH_SQUARE.gridSquareElement);
    //       setTimeout(() => {
    //         PATH_SQUARE.gridSquareElement.style.opacity = '1';
    //         PATH_SQUARE.gridSquareElement.style.transform = 'scale(1)';
    //       }, 100);
    //     } else if (this.grid[r][c] === "g") {
    //       const GOAL_SQUARE = new GridSquare('div');
    //       GOAL_SQUARE.setType('goal');
    //       DIV_WRAPPER.appendChild(GOAL_SQUARE.gridSquareElement);
    //     } 
    //   }
    // }
  }
}
