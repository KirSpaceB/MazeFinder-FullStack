import { AddWallLogic } from "./AddWallLogic.js";

export class BFS {
  constructor() {
    this.algorithm()
  }

  async algorithm() {
    let gridWithStartLogicAndWallLogic = new AddWallLogic(); // this returns a 2D array

    const maze = await gridWithStartLogicAndWallLogic.logic();
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

    // Let dfsButton to be clicked before calling this helper method
    const bfsButton = document.querySelector('.BFSAlgo');
    bfsButton.addEventListener('click', () => {
      console.log('bfsalgo')
      this.bfs(maze,startRow,startCol, goalRow, goalCol);
    })
  }
   async bfs(maze, startRow, startCol, goalRow, goalCol) {
    // Create a queue to store the positions to be explored
    const queue = [];
    queue.push([startRow, startCol]);
  
    // Create a set to store the positions that have been visited
    const visited = new Set();
    visited.add(`${startRow},${startCol}`);
  
    // Create a 2D array to store the previous position for each position
    const prev = new Array(maze.length);
    for (let i = 0; i < prev.length; i++) {
      prev[i] = new Array(maze[0].length);
    }
  
    // Explore the positions in the queue
    while (queue.length > 0) {
      const [row, col] = queue.shift();
  
      // If the current position is the goal position, return the path to it
      if (row == goalRow && col == goalCol) {
        return this.getPath(prev, row, col);
      }
  
      // Explore the neighbors in the order up, right, down, left
      const rowOffsets = [-1, 0, 1, 0];
      const colOffsets = [0, 1, 0, -1];
      for (let i = 0; i < 4; i++) {
        const newRow = row + rowOffsets[i];
        const newCol = col + colOffsets[i];
        if (this.isValidMove(maze, newRow, newCol) && !visited.has(`${newRow},${newCol}`) && !maze[newRow][newCol].classList.contains('Wall')) {
          // Mark the position as visited and store its previous position
          await new Promise(resolve => setTimeout(resolve, 10));
          maze[row][col].style.backgroundColor = 'orange';
          visited.add(`${newRow},${newCol}`);
          prev[newRow][newCol] = [row, col];
          queue.push([newRow, newCol]);
        }
      }
    }
  
    // If we couldn't find a path to the goal, return an empty array
    return [];
  }
  
  isValidMove(maze, row, col) {
    // Check if the row and col are within the bounds of the maze
    if (row >= 0 && row < maze.length && col >= 0 && col < maze[0].length) {
      // Check if the position is not a wall
      return maze[row][col] !== "W";
    }
    return false;
  }
  
  getPath(prev, row, col) {
    // Create an array to store the path
    const path = [];
  
    // Start at the goal position and work backwards
    while (prev[row][col] != null) {
      path.unshift([row, col]);
      [row, col] = prev[row][col];
    }
  
    // Add the start position to the path
    path.unshift([row, col]);
  
    return path;
  }
}