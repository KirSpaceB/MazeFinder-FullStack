
export class DfsAlgo {
  constructor(maze) {
    this.maze = maze;


    console.log(this.graph())
  }

  graph() {
    let maze = this.maze;
    let adjacencyList = new Map()
    

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

        stack.push(neighbors)
      }      
    }
    return [];
  }
}