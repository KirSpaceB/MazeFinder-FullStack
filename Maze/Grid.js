import { StartGoalLogic } from "./StartGoalLogic.js";
import { AddWallLogic } from "./AddWallLogic.js";
export class Grid {
  constructor() {
    this.createMaze();
  }
  
  async createMaze() {
    // Values
    let size;
    let maze;
    let grid;
    this.grid = grid
    this.maze = maze;
    // The size is not the issue its that there only one value at a time
    let slider = document.getElementById('slider');
    
    // Dynamically change the slider value, has a problem that it can only be used once
    // How can I reset this everytime slider moves
    await new Promise((resolve) => {
      slider.addEventListener('input', async () => {
        size = slider.value;
        
        // Creates Grid
        const DIV_WRAPPER = document.getElementById('DIV_WRAPPER');
        DIV_WRAPPER.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        DIV_WRAPPER.style.gridTemplateRows = `repeat(${size}, 1fr)`;
      
        // Remove all child elements from DIV_WRAPPER
        while (DIV_WRAPPER.firstChild) {
          DIV_WRAPPER.removeChild(DIV_WRAPPER.firstChild);
        };
      
        // Outer array
        this.maze = [];
        // Stores the created divs data
        this.grid;
        // Creates the 2D array depends on the slider value
        for (let row = 0; row < size; row++) {
          // inner array
          this.maze.push([]);
          for (let col = 0; col < size; col++) {
            this.grid = document.createElement('div');
            this.grid.style.backgroundColor = 'white';
            DIV_WRAPPER.append(this.grid);
            // elements pushed to the inner Array
            this.maze[row].push(this.grid);
          }
        }
        const startGoalLogic = new StartGoalLogic().setStartAndGoal().then(() => {
          const addWallLogic = new AddWallLogic();
        })

      });
    });
    // This method returns a Promise
  };
}


