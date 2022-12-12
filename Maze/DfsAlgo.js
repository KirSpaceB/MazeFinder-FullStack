import { GridSquare } from "./GridSquare.js";
// do something like this.maze.DFSAlgo() does the algorithm on the maze
// always think what happens when we import dfsAlgo
// I thnk we implement dfs first than append to 'DIV_WRAPPER'
// if we import this class to Grid.js we can do something like const useDfsAlgo = new DfsAlgo(). Then we can do something like DfsAlgo(this.maze)
export class DfsAlgo {
  constructor(maze) {
    // references the argument passed in
    this.maze = maze;
    // appends elements to the DOM so we can see it 
    const MAZE_DIV_WRAPPER = document.getElementById('DIV_WRAPPER');
    this.MAZE_DIV_WRAPPER = MAZE_DIV_WRAPPER;
    //create stack
    this.stack = [];

    // Maps all elements from the argument passed to DfsAlgo as false indicating that non of them have been visited
    const elementVisted = this.maze.map((row) => {
      return row.map(() => {
        return false
      });
    });
    this.elementVisted = elementVisted;
    console.log(this.elementVisted)
    this.dfsImplementation();
    console.log(this.elementVisted[0][15])
  }

  dfsImplementation() {
    let startRow, startCol; //variables representing starting cordinates
    let goalRow, goalCol; // variables representing the ending cordinates
    // Search for the starting position of the maze
    for (let r = 0; r < this.maze.length; r++) {
      for(let c = 0; c < this.maze[r].length; c++) {
        if (this.maze[r][c] === "s") {
          //sets the pointers to the cordinates of "s" in maze
          startRow = r; 
          startCol = c; 
          this.elementVisted[startCol][startRow] = true; // this has opposite indexing
          break; // Stop searching once the starting position is found
        }
      }
    }
    // Search for the goal position and initialize the goal cordinates
    for (let r = 0; r < this.maze.length; r++) {
      for (let c = 0; c <this.maze[r].length; c++) {
        if (this.maze[r][c] === "g") {
          goalRow = r;
          goalCol = c;
          this.elementVisted[goalCol][goalRow] = false; // this should be false
        }
      }
    }
    // adds starting cordinates to the stack
    this.stack.push([startRow, startCol]);    

    // Set which prevents the algorithm from revisting visited nodes.
    // we can do something like if this.nodesVisited = true add to Set
    this.nodesVisited = new Set();
    this.nodesVisited.add([startRow,startCol]); // I think I add this to while loop
    //the neighbors of the cordinate on the very top of the stack

    this.top;
    this.bottom;
    this.left;
    this.right;

    console.log("stack length beofre while loop:", this.stack.length);

    while (this.stack.length > 0) {
      let current = this.stack.pop(); // this is how we get the starting node
      let row = current[0];
      let col = current[1];

      let neighbors = [
        [row - 1, col], //top
        [row + 1, col], //bottom
        [row, col - 1], //left
        [row, col + 1], // right
      ]
      
      // iterates through the neighbors array and setting a pointer to false. So neighbors[0][1] = [row-1,col]
      for(let r = 0; r < neighbors.length; r++) {
        for (let c = 0; c < neighbors[r].length; c++) {
          if (neighbors[0][1]) this.top = false;
          if (neighbors[1][1]) this.bottm = false;
          if (neighbors[2][1]) this.left = false;
          if (neighbors[3][1]) this.right = false;
        }
      }
      // The vision is we have a starting point in this case the starting point is current. We want current to check if it has a top,bottom,left,right neighbor
    }
  }
}