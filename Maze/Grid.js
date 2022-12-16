import { GridSquare } from "./GridSquare.js";
import { DfsAlgo } from "./DFSAlgo.js";
export class Grid {
  constructor() {
  this.setMaze();
  this.maze;
  const activateDFS = new DfsAlgo(this.maze);
  }

  setMaze() {
    const maze = [
      ["n","w","n","n","n","w","n","n","n","w","n","n","n","n","n","g"],
      ["n","w","n","w","n","w","n","n","n","w","n","n","n","w","n","w"],
      ["n","w","n","w","n","n","n","w","n","n","n","w","n","w","n","n"],
      ["n","n","n","w","n","w","n","w","n","w","n","w","n","w","n","n"],
      ["w","w","n","n","n","w","n","w","n","n","n","w","w","w","n","w"],
      ["n","w","n","w","n","n","n","w","n","w","n","n","n","n","n","n"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","n","w","n"],
      ["n","w","n","w","n","w","n","w","n","w","n","n","n","w","n","n"],
      ["n","w","n","w","n","w","n","n","n","w","n","n","n","n","n","w"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","w","n","n"],
      ["n","w","n","w","n","w","n","w","n","n","n","w","n","w","n","n"],
      ["n","n","n","n","n","w","n","w","n","w","n","n","n","w","n","n"],
      ["n","n","n","w","n","n","n","w","n","w","n","w","n","w","n","w"],
      ["n","n","n","w","n","n","n","n","n","w","n","w","n","w","n","n"],
      ["w","n","n","n","n","n","n","w","n","w","n","w","n","w","w","n"],
      ["s","n","n","w","n","n","n","w","n","n","n","w","n","n","n","n"],
    ]

    this.maze = maze;

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


      }
    }
  }
}