import { AddWallLogic } from "./AddWallLogic.js";
export class AStar {
  constructor() {
    this.algorithm();
  }

  async algorithm() {
    // Create a new AddWallLogic Object this will allow to computer 
    let gridWithStartLogicAndWallLogic = new AddWallLogic(); 

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
    const AStar = document.querySelector('.AStar');
    AStar.addEventListener('click', () => {
      console.log('AStar')
      this.AStar(maze,startRow,startCol, goalRow, goalCol);
    });
  }

  AStar(maze, startRow, startCol, goalRow, goalCol) {
    // Initialize variables
    const distances = {};
    const fScore = {};
    const previous = {};
    const unvisited = new PriorityQueue();
    for (let r = 0; r < maze.length; r++) {
        for (let c = 0; c < maze[r].length; c++) {
            distances[`${r},${c}`] = Infinity;
            fScore[`${r},${c}`] = Infinity;
            previous[`${r},${c}`] = null;
            unvisited.enqueue(`${r},${c}`, Infinity);
        }
    }

    // set the starting point
    distances[`${startRow},${startCol}`] = 0;
    fScore[`${startRow},${startCol}`] = this.heuristic(startRow, startCol, goalRow, goalCol);
    unvisited.enqueue(`${startRow},${startCol}`, fScore[`${startRow},${startCol}`]);

    // define the neighbours
    const neighbours = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1]
    ];
    while (!unvisited.isEmpty()) {
      let currentNode = unvisited.dequeue().element;
      const [row, col] = currentNode.split(',').map(Number);
      // Check if we reached goal
      if (currentNode === `${goalRow}, ${goalCol}`) {
          break;
      }
      // Check neighbours
      for (const [rowDiff, colDiff] of neighbours) {
          const rowNeighbor = row + rowDiff;
          const colNeighbor = col + colDiff;
  
        if (rowNeighbor >= 0 && rowNeighbor < maze.length && colNeighbor >= 0 && colNeighbor < maze[row].length && !maze[rowNeighbor][colNeighbor].classList.contains('Wall')) {
          const neighbour = `${rowNeighbor},${colNeighbor}`;
          // Get the tentative distance to the neighbour
          const tentativeDistance = distances[currentNode] + 1;
            if (tentativeDistance < distances[neighbour]) {
              distances[neighbour] = tentativeDistance;
              previous[neighbour] = currentNode;
              // calculate fScore = gScore + h(heuristic)
              fScore[neighbour] = distances[neighbour] + this.heuristic(rowNeighbor, colNeighbor, goalRow, goalCol);
              unvisited.enqueue(neighbour, fScore[neighbour]);
          }
        }
      }
    };
  }

  heuristic(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }
}