
export class DfsAlgo {
  constructor(maze) {
    this.maze = maze;
    // appends elements to the DOM so we can see it 
  
    const MAZE_DIV_WRAPPER = document.getElementById('DIV_WRAPPER');
    this.MAZE_DIV_WRAPPER = MAZE_DIV_WRAPPER;
    this.graph();
    console.log(this.graph())
  }

  graph() {
    let maze = this.maze;
  
    const adjacencyList = new Map();

    for (let r = 0; r < maze.length; r++) {
      for (let c = 0; c < maze[r].length; c++) {
        const node = `${r}, ${c}`; // finds the coordinate for each letter in the maze
        adjacencyList.set(node,[]); // sets all the nodes as keys

        //top
        if (r > 0 && maze[r - 1][c] !== "w") {
          adjacencyList.get(node).push(`${r - 1}, ${c}`); // gets key than pushes value to key
        }
        //bottom
        if (r < maze.length - 1 && maze[r + 1][c] !== "w") {
          adjacencyList.get(node).push(`${r + 1}. ${c}`);
        }
        //left
        if (c > 0 && maze[r][c - 1] !== "w") {
          adjacencyList.get(node).push(`${r},${c - 1}`);
        }
        //right
        if (c < maze.length - 1 && maze[r][c + 1] !== "w") {
          adjacencyList.get(node).push(`${r}, ${c + 1}`);
        }
      }
    }
    return adjacencyList
  }


  Implementation(adjacencyList, start, target) {
    // marks the visited nodes
    const visted = new Set()
    // starting vertex of our graph
    const stack = [start];
    // variable to store the path
    const path = [];

    while (stack.length > 0) {
      let current = stack.pop();

      if (current === target) return path.concat(current);

      if (!visted.has(current)) {
        visted.add(current)

        path.push(current);

        const neighbors = adjacencyList.get(current);

        stack.push(...neighbors)
      }      
    }
    return [];
  }
}