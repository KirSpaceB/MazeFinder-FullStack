import { GridSquare } from "./GridSquare.js";
import { Grid } from "./Grid.js";

export class SetGoal {
  constructor() {
    const newGrid = new Grid();
    const maze = newGrid.maze;
    const GOAL_SQUARE = new GridSquare('div', 'GOAL_SQUARE');
    GOAL_SQUARE.setType('goal');


  }
}