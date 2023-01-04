import { StartGoalLogic } from "./StartGoalLogic.js";

export class DFS {
  constructor() {
    this.algorithm();
  }
  async algorithm() {
    let grid = new StartGoalLogic(); // this returns a 2D array

    const maze = await grid.setStartAndGoal();
    // Variables that points to the location of the starting, and ending DIVS in the maze
    let startingPoint;
    let endingPoint;
    
    // double for loop to traverse the maze and find where the starting and ending DIVS are.
    for(let r = 0; r < maze.length; r++) {
      for(let c = 0; c < maze[r].length; c++) {
        console.log(maze[r][c])
        if(maze[r][c].style.backgroundColor === 'red') {
          startingPoint = [[r],[c]]; // element
        } else if(maze[r][c].style.backgroundColor === 'blue') {
          endingPoint = [[r,c]];
        }
      }
    }

    console.log(startingPoint)
    console.log(endingPoint)

    // Let dfsButton to be clicked before calling this helper method
    const dfsButton = document.querySelector('.DFSAlgo');
    dfsButton.addEventListener('click', () => {
      console.log('test')
      this.dfs(maze,startingPoint,endingPoint);
    })
    
  }

  async dfs(maze,start,end) {
    console.log(maze);
    console.log(start);
    console.log(end);

    // Create a stack with the stack with the starting values
    let endNode = end
    let stack = [start];

    // Mark if div is visited 
    let visited = new Set();

    // DFS
    // This while loop is returning a boolean
    // We have to figure how to empty
    while (stack.length > 0) {
      for(let r = 0; r < maze.length; r++) {
        for(let c = 0; c < maze[r].length; c++) {
          // Get the next element to visit
          let startNode = stack.pop();

          // Check if element has been visited
          if(!visited.has(startNode)) {
            visited.add(startNode);
            await new Promise(resolve => setTimeout(resolve, 10));
            maze[r][c].style.backgroundColor = 'orange'
          };
          
          if (startNode === endNode) {
            break;
          };

          // Get row indicies of the element
          let row = r;
          let col = c;

          if(row > 0 && !visited.has(maze[row - 1][col])) {
            // Add the element above to the stack
            stack.push(maze[row - 1][col]);
          }

          // check below neighbor
          if(row < maze.length - 1 && !visited.has(maze[row + 1][col])) {
            stack.push(maze[row + 1][col])
          };

          // check left neighbor
          if(col > 0 && !visited.has(maze[row][col - 1])) {
            stack.push(maze[row][col - 1]);
          };
          // check right
          if(col < maze.length - 1 && !visited.has(maze[row][col + 1])) {
            stack.push(maze[row][ col + 1])
          }
        }
      }
    }
  }
}