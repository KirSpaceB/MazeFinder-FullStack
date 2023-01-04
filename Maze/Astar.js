import { StartGoalLogic } from "./StartGoalLogic.js";

export class AStar {
  constructor() {
    this.algorithm();
  }

  async algorithm() {
    let grid = new StartGoalLogic(); // this returns a 2D array

    const maze = await grid.setStartAndGoal();
    // Variables that points to the location of the starting, and ending DIVS in the maze
    let startRow,startCol;
    let goalRow,goalCol;
    
    // double for loop to traverse the maze and find where the starting and ending DIVS are.
    for(let r = 0; r < maze.length; r++) {
      for(let c = 0; c < maze[r].length; c++) {

        if(maze[r][c].classList.contains('startNode')) {
          console.log(maze[r][c])
          startRow = r;
          startCol = c;
        } else if(maze[r][c].classList.contains('goalNode')) {
          goalRow = r;
          goalCol = c;
        }
      }
    }

    console.log(maze);
    console.log(startRow);
    console.log(startCol);
    console.log(goalRow);
    console.log(goalCol);


    // Let dfsButton to be clicked before calling this helper method
    const AStar = document.querySelector('.AStar');
    AStar.addEventListener('click', () => {
      console.log('AStar')
      this.AStar(maze,startRow,startCol, goalRow, goalCol);
    })
  }

  AStar() {

  }
}