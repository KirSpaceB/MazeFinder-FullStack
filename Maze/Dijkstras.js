export class Dijkstras {
  constructor() {
    this.algorithm()
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

    // State the starting and ending points the algorithm has to start and search to
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

    //Let dfsButton to be clicked before calling this helper method
    const dijkstrasButton = document.querySelector('.DikjstrasAlgo');
    dijkstrasButton.addEventListener('click', () => {
      this.dijkstrasImplementation(maze,startRow,startCol,goalRow,goalCol)
    })
  }

  async dijkstrasImplementation(maze, startRow, startCol, goalRow, goalCol) {
    // initialize variables
    const distances = {};
    const previous = {};
    const unvisited = new Set();
    for (let r = 0; r < maze.length; r++) {
      for (let c = 0; c < maze[r].length; c++) {
        distances[`${r},${c}`] = Infinity;
        previous[`${r},${c}`] = null;
        unvisited.add(`${r},${c}`);
      }
    }

    distances[`${startRow},${startCol}`] = 0;
    // define the neighbours
    const neighbours = [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1]
    ];

    while (unvisited.size > 0) {
      let currentNode = null;
      let currentDistance = Infinity;
      for (const node of unvisited) {
        if (distances[node] < currentDistance) {
          currentNode = node;
          currentDistance = distances[node];
        }
      }

      unvisited.delete(currentNode);
      const [row, col] = currentNode.split(',').map(Number);
      // Check neighbors
      for(const [rowDiff, colDiff] of neighbours) {
        const rowNeighbor = row + rowDiff;
        const colNeighbor = col + colDiff;

        const neighbour = `${rowNeighbor},${colNeighbor}`;
        if(rowNeighbor >= 0 && rowNeighbor < maze.length && colNeighbor >= 0 && colNeighbor < maze[row].length) {
          if (!maze[rowNeighbor][colNeighbor].classList.contains('Wall')) {
            // Update the distance and previous if it's less than the current distance
            if (unvisited.has(neighbour) && distances[currentNode] + 1 < distances[neighbour]) {
              distances[neighbour] = distances[currentNode] + 1;
              previous[neighbour] = currentNode;
            }
          }
        }
      }
      // check if we reached goal
      if (currentNode === `${goalRow}, ${goalCol}`) {
        break;
      };
    }

      let currentNode = `${goalRow},${goalCol}`;
    while (currentNode !== `${startRow},${startCol}`) {
      // color the node orange
      await new Promise(resolve => setTimeout(resolve, 10));
      const [row, col] = currentNode.split(',').map(Number);
      maze[row][col].style.backgroundColor = 'orange';
      currentNode = previous[currentNode];
    }
    return distances;
  }
}