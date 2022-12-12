import { GridSquare } from "./GridSquare.js";
import { DfsAlgo } from "./DFSAlgo.js";
// this should only be the maze then we use class like DfsAlgo to generate a new maze with the algorithm solving it 
export class Grid {
  constructor() {
  this.setMaze();
  this.maze;
  const implementDFS = new DfsAlgo(this.maze)
  }
  // takes in no arguments
  // does not return a variable
  // function has the maze template and appends to DOM depending on the conditions
  setMaze() {
    const maze = [
      ["n","w","n","n","n","w","n","n","n","w","n","n","n","n","n","g"],
      ["n","w","n","w","n","w","n","n","n","w","n","n","n","w","n","w"],
      ["n","w","n","w","n","n","n","w","n","n","n","w","n","w","n","n"],
      ["n","n","n","w","n","w","n","w","n","w","n","w","n","w","n","n"],
      ["n","w","n","n","n","w","n","w","n","n","n","w","w","w","n","w"],
      ["n","w","n","w","n","n","n","w","n","w","n","n","n","n","n","n"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","n","w","n"],
      ["n","w","n","w","n","w","n","w","n","w","n","n","n","w","n","n"],
      ["n","w","n","w","n","w","n","n","n","w","n","n","n","n","n","w"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","w","n","n"],
      ["n","w","n","w","n","w","n","w","n","n","n","w","n","w","n","n"],
      ["n","n","n","n","n","w","n","w","n","w","n","n","n","w","n","n"],
      ["n","n","n","w","n","n","n","w","n","w","n","w","n","w","n","w"],
      ["n","n","n","w","n","n","n","n","n","w","n","w","n","w","n","n"],
      ["n","n","n","n","n","n","n","w","n","w","n","w","n","w","w","n"],
      ["s","n","n","w","n","n","n","w","n","n","n","w","n","n","n","n"],
    ]

    //taking a break but the goal is to create conditions that determine whether something is a corner,edge, and other
    // rn the logic behind the corner is that if r and c equal to -1 set its neighbors to x+1 y+1
    // edge is hard the idea is that when we hit an edge its possible for y+1 x+1 but not x -1 so if x-1 label it as an edge and push neighbors <-- how do we do this

    //conditionals for maze //
      // if (maze[r - 1][c - 1] === undefined) // this is a corner, therefore we can say neighbors are maze[r+1][c+1];
      // if (maze[r + 1][c + 1] === 'letter' || maze[r - 1][c] === 'letter' || maze[r][c - 1] === undefined) // edge
      // else // other
    // //
    this.maze = maze;
    // we just want it so we we do this.maze.DfsAlgo it will do a dfs algo on it, but how do we go about it 
    // I think we create the graph first then 

    const MAZE_DIV_WRAPPER = document.getElementById('DIV_WRAPPER');

    // loop for 2d array along with conditions that determine what gets appended to DIV_WRAPPER fnction
    for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze[i].length; j++) {
        const WALL_SQUARE = new GridSquare('div', 'wallSquare', 'black', false);
        const NOTHING_SQUARE = new GridSquare('div','nothingSquare', 'black', false); 
        const START_SQUARE = new GridSquare('div', 'startSquare', 'black', false);
        const GOAL_SQUARE = new GridSquare('div', 'goalSquare', 'black', false);
        const PATH_SQUARE = new GridSquare('div', 'pathSquare', 'black', false);

        WALL_SQUARE.setType('wall');
        NOTHING_SQUARE.setType('nothing');
        START_SQUARE.setType('start');
        GOAL_SQUARE.setType('goal');
        PATH_SQUARE.setType('path');

        // we set all our conditionals before we append the WALL_SQUARE to the maze. So we create functions that will manipulate the GridSquares before we append it. Further elaborating we can append PATH_SQUARES instead of NOTH_SQUARES but everything else stays the same.

        if (maze[i][j] === "w") {
          MAZE_DIV_WRAPPER.appendChild(WALL_SQUARE.gridSquareElement);
        } else if (maze[i][j] === "p") {
          MAZE_DIV_WRAPPER.appendChild(PATH_SQUARE.gridSquareElement);
        } else if (maze[i][j] === "g") {
          MAZE_DIV_WRAPPER.appendChild(GOAL_SQUARE.gridSquareElement);
        } else if (maze[i][j] === "s") {
          MAZE_DIV_WRAPPER.appendChild(START_SQUARE.gridSquareElement);
        } else if (maze[i][j] === "n") {
          MAZE_DIV_WRAPPER.appendChild(NOTHING_SQUARE.gridSquareElement);
        } else {
          console.log('Check setMaze function in Grid.js')
        }
      }
    }
  }
}