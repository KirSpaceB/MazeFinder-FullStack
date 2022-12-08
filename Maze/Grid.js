import { GridSquare } from "./GridSquare.js";
// in the context of this what if I only want to import arrayForSquares and this.setMaze();
export class Grid {
  constructor() {
  this.gridWrapper();
  this.arrayForSquares = [];
  this.setMaze();
  this.maze;
  }
  
  gridWrapper() {
    const DIV_WRAPPER = document.createElement('div');
    DIV_WRAPPER.setAttribute('id', 'DIV_WRAPPER');
    document.body.appendChild(DIV_WRAPPER);
  }

  setMaze() {
    const maze = [
      ["n","w","n","n","n","w","n","n","n","w","n","n","n","n","n","g"],
      ["n","w","n","w","n","w","n","n","n","w","n","n","n","w","n","n"],
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
    this.maze = maze;

    const MAZE_DIV_WRAPPER = document.getElementById('DIV_WRAPPER');

    for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze[i].length; j++) {
        const WALL_SQUARE = new GridSquare('div', 'wallSquare', 'black', false);
        const NOTHING_SQUARE = new GridSquare('div','nothingSquare', 'black', false); 
        const START_SQUARE = new GridSquare('div', 'startSquare', 'black', false);
        const GOAL_SQUARE = new GridSquare('div', 'goalSquare', 'black', false);
        const PATH_SQUARE = new GridSquare('div', 'pathSquare', 'black', false);
        
        // changes background color depending on the argument passed
        WALL_SQUARE.setType('wall');
        NOTHING_SQUARE.setType('nothing');
        START_SQUARE.setType('start');
        GOAL_SQUARE.setType('goal');
        PATH_SQUARE.setType('path');

        // why is wallSquare 
        if (maze[i][j] === "w") {
          MAZE_DIV_WRAPPER.appendChild(WALL_SQUARE.gridSquareElement);
          this.arrayForSquares.push(WALL_SQUARE);
        } else if (maze[i][j] === "p") {
          MAZE_DIV_WRAPPER.appendChild(PATH_SQUARE.gridSquareElement);
          this.arrayForSquares.push(PATH_SQUARE);
        } else if (maze[i][j] === "g") {
          MAZE_DIV_WRAPPER.appendChild(GOAL_SQUARE.gridSquareElement);
          this.arrayForSquares.push(GOAL_SQUARE);
        } else if (maze[i][j] === "s") {
          MAZE_DIV_WRAPPER.appendChild(START_SQUARE.gridSquareElement);
          this.arrayForSquares.push(START_SQUARE);
        } else if (maze[i][j] === "n") {
          MAZE_DIV_WRAPPER.appendChild(NOTHING_SQUARE.gridSquareElement);
          this.arrayForSquares.push(NOTHING_SQUARE);
        } else {
          console.log('test')
        }
      }
    }
  }
}