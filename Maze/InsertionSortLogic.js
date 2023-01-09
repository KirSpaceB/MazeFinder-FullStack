import { GravityButtonLogic } from "./GravityButtonLogic.js";

export class InsertionSortLogic {
  constructor() {
    this.sortLogic();
  }

  async sortLogic() {
    let gridAfterGravityButtonIsClicked = new GravityButtonLogic();

    let maze = await gridAfterGravityButtonIsClicked.logic();
    
    const sortButton = document.querySelector('.InsertionSort')
    console.log(sortButton)

    await new Promise((resolve) => {
      sortButton.addEventListener('click',resolve)
    });
    
    this.getHighestWallSquareCoordinate(maze);

  }

  async getHighestWallSquareCoordinate(maze) {
    // Initialize an array to hold the coordinates of the Wall squares
    let coordinates = [];
    // Get all coordinates of Wall squares on the div
    for(let r = 0; r < maze.length; r++) {
      for(let c = 0; c < maze.length; c++) {
        if(maze[r][c].classList.contains('Wall')) {
          coordinates.push([r,c]);
        }
      }
    }
  
    
    // Insertion sort the coordinates array in ascending order based on the second element of each coordinate
    for (let i = 1; i < coordinates.length; i++) {
      // Check if this is read
      console.log('test');
      // variable 
      let current = coordinates[i];
      let j = i - 1;
      while (j >= 0 && coordinates[j][1] > current[1]) {
        coordinates[j + 1] = coordinates[j];
        j--;
      }
      coordinates[j + 1] = current;
    }
    console.log(coordinates)

  }
}

