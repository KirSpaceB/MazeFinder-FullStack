import { Grid } from "./Grid.js";
import { GridSquare } from "./GridSquare.js";
export class DfsAlgo {
  constructor() {
    const newGrid = new Grid(); // this is causing another GIRD_WRAPPER in UI
    this.markingMazeElements(newGrid.arrayForSquares);
    let maze = newGrid.maze;
    console.log(maze)
  }

  markingMazeElements(mazeElements) {
    // true of false
    this.mazeElements = mazeElements;

    this.mazeElements.forEach((e) => {
      let current_mark = e.markStatus;
      
      if (current_mark === false) {
        console.log('test')
        current_mark = true;
      } else if (e.markStatus === true) {
        console.log('current mark is true')
      }
    })
  }
}