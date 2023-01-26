export class DFS {
  constructor() {
    this.algorithm();
  }
  async algorithm() {
    // We need to recreate the maze variable with the current grid
    const divWrapperChildren = document.getElementById('DIV_WRAPPER').children;
    const slider = document.getElementById('slider');

    // turn the children to an array
    const divChildrenArray = Array.from(divWrapperChildren);

    let rows = divChildrenArray.length / slider.value;

    let maze = new Array(rows);
    for(let i = 0; i < rows; i++) {
      maze[i] = divChildrenArray.slice(i * slider.value, (i+1) * slider.value)
    };

    // Variables that points to the location of the starting, and ending DIVS in the maze
    let startRow,startCol;
    let goalRow,goalCol;
    
    // double for loop to traverse the maze and find where the starting and ending DIVS are.
    for(let r = 0; r < maze.length; r++) {
      for(let c = 0; c < maze[r].length; c++) {

        if(maze[r][c].classList.contains('startNode')) {
          startRow = r;
          startCol = c;
        } else if(maze[r][c].classList.contains('goalNode')) {
          goalRow = r;
          goalCol = c;
        }
      }
    }
    // Let dfsButton to be clicked before calling this helper method
    const dfsButton = document.querySelector('.DFSAlgo');
    
    dfsButton.addEventListener('click', () => {
      this.dfs(maze,startRow,startCol, goalRow, goalCol);
    });
    return maze
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
       // Dfs works but we haveto figure out how to check for walls
      if (row > 0 && !maze[row-1][col].classList.contains('Wall') && !visited.has(`${row-1},${col}`)) {
        stack.push([row - 1, col]);
      }
      if (col < maze[row].length - 1 && !maze[row][col + 1].classList.contains('Wall') && !visited.has(`${row},${col+1}`)) {
        stack.push([row, col + 1]);
      }
      if (row < maze.length - 1 && !maze[row + 1][col].classList.contains('Wall') && !visited.has(`${row+1},${col}`)) {
        stack.push([row + 1, col]);
      }
      if (col > 0 && !maze[row][col - 1].classList.contains('Wall') && !visited.has(`${row},${col-1}`)) {
        stack.push([row, col - 1]);
      }
    }
  }
}