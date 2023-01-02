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
    // Initialize variables for the start point and goal point
    let start;
    let goal;

    // Initialize variables that represent the coordinates of starting position and goal position
    let startRow;
    let startCol;
    let goalRow;
    let goalCol;
    // Create limits
    let startLimit = false;
    let goalLimit = false;

    // Initialize a false variable that will turn true once dfs is done searching the grid
    let goalReached = true;

    // Initialize stack for dfs
    let dfsStack = [];

    // Check visited nodes
    let visited = new Set();
    console.log(maze)
    // Draw the starting points on the Grid UI
    for(let r = 0; r < maze.length; r++) {
      for(let c = 0; c < maze.length; c++) {
        // Draw the starting points and goal points on the Grid UI
        maze[r][c].addEventListener('click', () => {
          if(startLimit === false) {
            start = maze[r][c]
            startRow = r;
            startCol = c;
            console.log('Start point:', startRow, startCol)
            start.style.backgroundColor = 'red'
            startLimit = true
          } else if (goalLimit === false) {
            goal = maze[r][c];
            goalRow = r;
            goalCol = c;
            console.log('Goal point:', goalRow, goalCol)
            goal.style.backgroundColor = "blue";
            goalLimit = true;
          }
        });
        await new Promise(resolve => setTimeout(resolve, 0));

      }
    }
  };
}


