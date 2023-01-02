import { GridSquare } from "./GridSquare.js";


export class Grid {
  constructor() {
    this.changeSize();
    this.createMaze();
  }

  changeSize() {
    // Create the slider and UI element
    const slider = document.createElement('input');
    slider.type = "range";
    slider.min = "4";
    slider.max = "36";
    slider.id = "slider";
    const p = document.createElement('p');
    const inputValue = document.createElement('span');
    inputValue.textContent = slider.value;
  
    // Update the UI element and call createMaze when the slider value changes
    slider.addEventListener('input', () => {
      inputValue.textContent = slider.value;
      this.createMaze(slider.value);
    });
  
    p.appendChild(inputValue);
    document.body.appendChild(p);
    document.body.appendChild(slider);
  }
  
  createMaze(size) {
    // Determines the size of the grid
    let slider = document.getElementById('slider');
    size = slider.value;

    const DIV_WRAPPER = document.getElementById('DIV_WRAPPER');
    DIV_WRAPPER.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    DIV_WRAPPER.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
  
    // Remove all child elements from DIV_WRAPPER
    while (DIV_WRAPPER.firstChild) {
      DIV_WRAPPER.removeChild(DIV_WRAPPER.firstChild);
    }

    // Represents the grid in a 2D array
    this.maze = []
    // Stores the created divs data
    this.grid;

    for (let row = 0; row < size; row++) {
      this.maze.push([]);
      for (let col = 0; col < size; col++) {
        this.grid = document.createElement('div');
        this.grid.style.backgroundColor = 'white';
        DIV_WRAPPER.append(this.grid);
        this.maze[row].push(this.grid);
      }
    }

    
    this.startAndGoalLogic(this.maze)
  };

  async startAndGoalLogic(maze) {
    let stack = [];
    let start, goal;
    let startRow, startCol, goalRow, goalCol;
    let startLimit = false, goalLimit = false;

    for (let r = 0; r < maze.length; r++) {
      for (let c = 0; c < maze[r].length; c++) {
        maze[r][c].addEventListener('click', () => {
          if (!startLimit) {
            start = maze[r][c];
            startRow = r;
            startCol = c;
            console.log('Start point:', startRow, startCol);
            start.style.backgroundColor = 'red';
            startLimit = true;
          } else if (!goalLimit) {
            goal = maze[r][c];
            goalRow = r;
            goalCol = c;
            console.log('Goal point:', goalRow, goalCol);
            goal.style.backgroundColor = 'blue';
            goalLimit = true;
            console.log(startRow,startCol);
          }
        });
      }
    };

    while (!startLimit || !goalLimit) {
      // Wait for startLimit and goalLimit to be true
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
    stack.push([startRow,startCol])
    if (startLimit === true && goalLimit === true) {
      this.dfs(maze, startRow, startCol, goalRow, goalCol);
    }
  };

  async dfs(maze, startRow, startCol, goalRow, goalCol) {
    let stack = [[startRow, startCol]];
    let visited = new Set();
  
    while (stack.length > 0) {
      let [r, c] = stack.pop();
      if (r == goalRow && c == goalCol) {
        return true; // path found
      }
      if (visited.has(`${r},${c}`)) {
        continue;
      }
      visited.add(`${r},${c}`);
      await new Promise(resolve => setTimeout(resolve, 10));
      maze[r][c].style.backgroundColor = 'orange';
      // Check if the cells above, right, below, and left of the current cell are valid and not visited
      if (r > 0 && maze[r - 1][c] != 'wall' && !visited.has(`${r - 1},${c}`)) {
        stack.push([r - 1, c]); // up
      }
      if (c < maze[0].length - 1 && maze[r][c + 1] != 'wall' && !visited.has(`${r},${c + 1}`)) {
        stack.push([r, c + 1]); // right
      }
      if (r < maze.length - 1 && maze[r + 1][c] != 'wall' && !visited.has(`${r + 1},${c}`)) {
        stack.push([r + 1, c]); // down
      }
      if (c > 0 && maze[r][c - 1] != 'wall' && !visited.has(`${r},${c - 1}`)) {
        stack.push([r, c - 1]); // left
      }
    }
    return false; // path not found
  }

}


