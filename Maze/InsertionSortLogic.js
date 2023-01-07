import { GravityButtonLogic } from "./GravityButtonLogic.js";

export class InsertionSortLogic {
  constructor() {
    this.sortLogic()
  }

  async sortLogic() {
    let gridAfterGravityButtonIsClicked = new GravityButtonLogic();

    let maze = await gridAfterGravityButtonIsClicked.logic();

    const sortButton = document.querySelector('.InsertionSort')
    console.log(sortButton)

    await new Promise((resolve) => {
      sortButton.addEventListener('click',resolve)
    });
    
    this.performtheSort(maze);

  }

  async performtheSort(maze) {
    //Initial an array to pass to Insertion Sort as an argument
    let coordinates = [];

    // Iterate through the grid and add a conditional that looks for the highest div that contains a "Wall" class if so push to a seperate array
    for(let r = 0; r < maze.length; r++) {
      for(let c = 0; c < maze.length; c++) {
        if(r > 0 && maze[r - 1][c].style.backgroundColor === "white" && maze[r][c].classList.contains('Wall')) {
          coordinates.push([r,c])
        }
      }
    }
    console.log("coordinates in the performtheSort function", coordinates);
    console.log("maze in the performTheSort function", maze)
    
  }

  sortCoordinates(coordinates) {
    for(let i = 1; i < coordinates.length; i++) {
      let j = i - 1;
      let temp = coordinates[i];
      while(j >= 0 && coordinates[j][0] > temp[0]) {
        coordinates[j + 1] = coordinates[j];
        j--;
      }
      coordinates[j + 1] = temp;
    }
    return coordinates;
  }
}

