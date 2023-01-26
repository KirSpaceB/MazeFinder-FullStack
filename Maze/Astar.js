export class AStar {
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

  async AStar(maze, startRow, startCol, goalRow, goalCol) {
    // Initialize variables
    const distances = {};
    const fScore = {};
    const previous = {};
    const unvisited = [];
    for (let r = 0; r < maze.length; r++) {
        for (let c = 0; c < maze[r].length; c++) {
            distances[`${r},${c}`] = Infinity;
            fScore[`${r},${c}`] = Infinity;
            previous[`${r},${c}`] = null;
            unvisited.push(`${r},${c}`);
        }
    }

    // set the starting point
    distances[`${startRow},${startCol}`] = 0;
    fScore[`${startRow},${startCol}`] = this.heuristic(startRow, startCol, goalRow, goalCol);

    // define the neighbours
    const neighbours = [
        [-1, 0],
        [0, -1],
        [1, 0],
        [0, 1]
    ];

    while (unvisited.length > 0) {
      // sort the unvisited array based on the fScore of each node
      unvisited.sort((a, b) => fScore[a] - fScore[b]);
      let currentNode = unvisited.shift();
      const [row, col] = currentNode.split(',').map(Number);

      // Check if we reached goal
      if (currentNode === `${goalRow}, ${goalCol}`) {
        break;
      }
      await new Promise(resolve => setTimeout(resolve, 10));
      maze[row][col].style.backgroundColor = 'orange';
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
              // add the neighbor to the unvisited array if it's not already in it
              if (!unvisited.includes(neighbour)) {
                unvisited.push(neighbour);
              }
          }
        }
      }
    };
  }

  heuristic(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }
}