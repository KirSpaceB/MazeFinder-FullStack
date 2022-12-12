import { GridSquare } from "./GridSquare.js";
// do something like this.maze.DFSAlgo() does the algorithm on the maze
// always think what happens when we import dfsAlgo
// I thnk we implement dfs first than append to 'DIV_WRAPPER'
// if we import this class to Grid.js we can do something like const useDfsAlgo = new DfsAlgo(). Then we can do something like DfsAlgo(this.maze)
export class DfsAlgo {
  constructor(maze) {
    this.maze = maze;
    const MAZE_DIV_WRAPPER = document.getElementById('DIV_WRAPPER');
    this.MAZE_DIV_WRAPPER = MAZE_DIV_WRAPPER;
    //create stack
    this.stack = [];
    //Makes a new array depending on this.maze.length and rather than the original values it is filled with a false boolean. The idea is we covert the boolean, and once boolean is converted a conditional will activate!
    this.visited = new Array(this.maze.length).fill(false); 
  }

  dfsImplementation() {
    let startRow, startCol; //variables representing cordinates
    this.top;
    this.bottom;
    this.left;
    this.right;
    
    // Search for the starting position of the maze
    for (let r = 0; r < this.maze.length; r++) {
      for(let c = 0; c < this.maze[r].length; c++) {
        if (this.maze[r][c] === "s") {
          //sets the pointers to the cordinates of "s" in maze
          startRow = r;
          startCol = c;
          break; // Stop searching once the starting position is found
        }
      }
    }

    // adds starting cordinates to the stack
    this.stack.push([startRow, startCol]);
    // marks coordinates as true indicating that the coordinates have been visited
    this.visited[startRow][startCol] = true; // expects this.visited to be 2d array

    while (this.stack.length > 0) {
      let current = stack.pop(); // 
      let row = current[0];
      let col = current[1];

      let neighbors = [
        [row - 1, col], //top
        [row, col + 1], //right
        [row - 1, col], //bottom
        [row, col - 1], // left
      ]
      
      // Checks each neighbor of the current position
      for(r = 0; r < neighbors.length; r++) {
        for (c = 0; c < neighbors[r].length; c++) {
          if (neighbors[0][1]) this.top = false;
          if (neighbors[1][1]) this.right = false;
          if (neighbors[2][1]) this.bottom = false;
          if (neighbors[3][1]) this.left = false;
        }
      }
      // The vision is we have a starting point in this case the starting point is current. We want current to check if it has a top,bottom,left,right neighbor
    }
  }
}