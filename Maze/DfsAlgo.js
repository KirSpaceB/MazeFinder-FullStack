import { Grid } from "./Grid.js";
import { GridSquare } from "./GridSquare.js";
export class DfsAlgo {
  constructor() {
    const newGrid = new Grid(); 
    let maze = newGrid.maze;// string of the maze not objects
    this.maze = maze; // maze from Grid.js
    this.grid = [];
    this.markingMazeElements();
    console.log(this.grid)
  }

  // takes in no arguments returns no arguments
  // purpose is to create a new loop to push elements to the this.grid array
  markingMazeElements() {
    for(let r = 0; r < this.maze.length; r++) {
      let row = [];
      for(let c = 0; c < this.maze[r].length; c++) {
        if(this.maze[r][c] === "w") {
          let WALL_SQUARE = new GridSquare('div','WALL_SQUARE', 'black', false);
          row.push(WALL_SQUARE.gridSquareElement);
        } else if (this.maze[r][c] === "n") {
          let NOTHING_SQUARE = new GridSquare('div', 'NOTHING_SQUARE', 'white', false);
          row.push(NOTHING_SQUARE.gridSquareElement);
        } else if(this.maze[r][c] === "p") {
          let PATH_SQUARE = new GridSquare('div', 'PATH_SQUARE', 'pink', false);
          row.push(PATH_SQUARE.gridSquareElement);
        } else if(this.maze[r][c] === "s") {
          let START_SQUARE = new GridSquare('div', 'START_SQUARE', 'red', false);
          row.push(START_SQUARE.gridSquareElement);
        } else if (this.maze[r][c] === "g") {
          let GOAL_SQUARE = new GridSquare('div', 'GOAL_SQUARE', 'blue', false);
          row.push(GOAL_SQUARE.gridSquareElement);
        } else {
          console.log('check markingMazeElements method in DFSALGO')
        }
      }
      this.grid.push(row)
    }
  }

  checkNeighbors() {

  }
}