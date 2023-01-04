import { StartGoalLogic } from "./StartGoalLogic.js";

export class DFS {
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

    console.log(goalRow)

    // Let dfsButton to be clicked before calling this helper method
    const dfsButton = document.querySelector('.DFSAlgo');
    dfsButton.addEventListener('click', () => {
      console.log('test')
      this.dfs(maze,startRow,startCol, goalRow, goalCol);
    })
  }

  async dfs(maze,startRow,startCol, goalRow, goalCol) {
    let visited = new Set()
    // Check if goal is reached

    // Nodes explored
    let stack = [[startRow + 1,startCol]];

    while(stack.length > 0) {
      // Starting node
      const [row,col] = stack.pop();
      // Once goal is found break
      if (row === goalRow && col === goalCol) {
        break;
      };

      if(maze[row][col].classList.contains('startNode')) {
        continue;
      }

      await new Promise(resolve => setTimeout(resolve, 10));
      maze[row][col].style.backgroundColor = 'orange';

      // mark the current cell as visited and add it to the set
      visited.add(`${row},${col}`);

       // explore the 4 directions (up, right, down, left)
      if (row > 0 && maze[row-1][col] !== 'wall' && !visited.has(`${row-1},${col}`)) {
        stack.push([row-1, col]);
      }
      if (col < maze[row].length-1 && maze[row][col+1] !== 'wall' && !visited.has(`${row},${col+1}`)) {
        stack.push([row, col+1]);
      }
      if (row < maze.length-1 && maze[row+1][col] !== 'wall' && !visited.has(`${row+1},${col}`)) {
        stack.push([row+1, col]);
      }
      if (col > 0 && maze[row][col-1] !== 'wall' && !visited.has(`${row},${col-1}`)) {
        stack.push([row, col-1]);
      }
    }
    
  }
}