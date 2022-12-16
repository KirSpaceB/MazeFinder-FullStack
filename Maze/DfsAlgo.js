import { GridSquare } from "./GridSquare.js";

export class DfsAlgo {
  constructor(maze) {
    this.maze = maze;
    // appends elements to the DOM so we can see it 
    const MAZE_DIV_WRAPPER = document.getElementById('DIV_WRAPPER');
    this.MAZE_DIV_WRAPPER = MAZE_DIV_WRAPPER;
    console.log(this.graph())
    this.Implementation(this.graph(), "s", "g");
    console.log(this.Implementation(this.graph(),"s","g"))
  }

  graph() {
    const adjacencyList = new Map();
  
    for (let row = 0; row < this.maze.length; row++) {
      for (let col = 0; col < this.maze[row].length; col++) {

        // prevents "w" and "g as keys". This is done becasue, we want to avoid these and only read that "n" as paths we technically we are telling the computer that these values you can't as paths
        if (this.maze[row][col] === "w" || this.maze[row][col] === "g") continue;
        
        // only "s" and "n" are keys becasue of the conditional above
        if (!adjacencyList.has(this.maze[row][col])) {
          adjacencyList.set(this.maze[row][col], []);
        }

        // Add adjacent elements to the adjacency list
        // row has to be greater than 0 because if its 0 it becomes undefined becuase of the row-1
        // check top neighbor
        if (row > 0 && this.maze[row - 1][col] !== "w") {
          //get all elements in this.maze[row][col] and pushes the ones that are [row-1][col]
          adjacencyList.get(this.maze[row][col]).push(this.maze[row - 1][col]);
        }
        //checks bottom
        if (row < this.maze.length - 1 && this.maze[row + 1][col] !== "w") {
          adjacencyList.get(this.maze[row][col]).push(this.maze[row + 1][col]);
        }
        //checks left
        if (col > 0 && this.maze[row][col - 1] !== "w") {
          adjacencyList.get(this.maze[row][col]).push(this.maze[row][col - 1]);
        }
        //checks right
        if (col < this.maze[row].length - 1 && this.maze[row][col + 1] !== "w") {
          adjacencyList.get(this.maze[row][col]).push(this.maze[row][col + 1]);
        }
      }
    }
    return adjacencyList;
  }


  Implementation(adjacencyList, start, goal) {
    // marks the visited nodes
    const visted = new Set()
    // starting vertex of our graph
    const stack = [start];

    const paths = new Map();
    paths.set(start, [start]);
    // as long as strack length is not empty do whats inside the block
    while (stack.length > 0) {
      // sets pointer to the most recent value in the stack
      let current = stack.pop();

      if (current === goal) return paths.get(current);
      // checks if current is marked
      if (visted.has(current)) continue;

      for (let row = 0; row < this.maze.length; row++) {
        for (let col = 0; col < this.maze[row].length; col++) {
          if (this.maze[row][col] === "n") {
            this.maze[row][col] = "p";
          }

          if (this.maze[row][col] === "n") {
            const NOTHING_SQUARE = new GridSquare('div','NOTHING_SQUARE','white');
            NOTHING_SQUARE.setType('nothing');
            this.MAZE_DIV_WRAPPER.appendChild(NOTHING_SQUARE.gridSquareElement);
          } else if (this.maze[row][col] === "w") {
            const WALL_SQUARE = new GridSquare('div', 'WALL_SQUIARE', 'black');
            WALL_SQUARE.setType('wall');
            this.MAZE_DIV_WRAPPER.appendChild(WALL_SQUARE.gridSquareElement);
          } else if (this.maze[row][col] === "s") {
            const START_SQUARE = new GridSquare('div', 'START_SQUARE', 'red');
            START_SQUARE.setType('start');
            this.MAZE_DIV_WRAPPER.appendChild(START_SQUARE.gridSquareElement); 
          } else if (this.maze[row][col] === "g") {
            const GOAL_SQUARE = new GridSquare('div','GOAL_SQUARE', 'blue');
            GOAL_SQUARE.setType('goal');
            this.MAZE_DIV_WRAPPER.appendChild(GOAL_SQUARE.gridSquareElement);
          }
          if (this.maze[row][col] === "p") {
            setTimeout(() => {
              const PATH_SQUARE = new GridSquare('div','PATH_SQUARE', 'pink');
              PATH_SQUARE.setType('path');
              this.MAZE_DIV_WRAPPER.appendChild(PATH_SQUARE.gridSquareElement);
            }, 1000);
          }
        }
      }

      visted.add(current);

      // Add the current node's neighbors to the stack
      const neighbors = adjacencyList.get(current);
      
      for (let neighbor of neighbors) {
        stack.push(neighbor);
        paths.set(neighbor, [...paths.get(current), neighbor]);
      }
    }
    return null;
  }
}