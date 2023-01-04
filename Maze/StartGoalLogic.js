import { Grid } from "./Grid.js";
// When object gets initialized it initializes a 2D array of divs that represent the UI on the DOM
export class StartGoalLogic {
  constructor() {
    this.setStartAndGoal();
  }
  async setStartAndGoal() {
    // Initialize the Grid object which is an empty object
    const grid = new Grid();
    // We use a variable to set a pointer that waits for grid.createMaze() to initialize
    const maze = await grid.createMaze();

    // Points to all possible coordinates on the maze
    let start,goal;
    // Points to the row and col coordinates of the maze
    let startRow, startCol, goalRow, goalCol;
    // Limits the possibility of one variable
    let startLimit = false;
    let goalLimit = false;
    // Creates a Promise that resolves once the DIV_WRAPPER has children elements.
    // We need this because the grid.createMaze(); method creates the grid
    const waitDivWrapperValue = new Promise((resolve) => {
      const DIV_WRAPPER = document.getElementById('DIV_WRAPPER');
      if(DIV_WRAPPER.childElementCount > 0) {
        resolve()
      }
    });
    // Creates the starting and ending points in the maze
    waitDivWrapperValue.then(() => {
      for (let r = 0; r < maze.length; r++) {
        for (let c = 0; c < maze[r].length; c++) {
          maze[r][c].addEventListener('click', () => {
            if (!startLimit) {
              start = maze[r][c];
              startRow = r;
              startCol = c;
              console.log('Start point:', startRow, startCol);
              start.style.backgroundColor = 'red';
              startLimit = true;
            } else if (!goalLimit) {
              goal = maze[r][c];
              goalRow = r;
              goalCol = c;
              console.log('Goal point:', goalRow, goalCol);
              goal.style.backgroundColor = 'blue';
              goalLimit = true;
            }
          });
        }
      };
    });

    while (!startLimit || !goalLimit) {
      // Wait for startLimit and goalLimit to be true
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
    // returns a maze with the start point and ending point
    return maze;
  }
  
}