import { GravityButtonLogic } from "./GravityButtonLogic.js";
export class InsertionSortLogic {
  constructor() {
    this.activateInsertionSort();
  }

  async activateInsertionSort() {

    const insertionSortButton = document.querySelector('.InsertionSort');

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

    await new Promise((resolve) => {
      insertionSortButton.addEventListener('click',resolve)
    });
    this.getCoordinates(maze);
  }

  async getCoordinates(maze) {

    let towers = [];
    let temp;

    for(let c = 0; c < maze[0].length; c++) {
      let arrayForCols = []
      for(let r = 0; r < maze.length; r++) {
        if(maze[r][c].classList.contains('Wall')) {
          arrayForCols.push(maze[r][c])
        }
      }
      towers.push(arrayForCols);
    }
  

    for(let i = 1; i < towers.length; i++) {
      // We begin at index 1
      let key = towers[i];
      let j = i - 1;

      while(j >= 0 && towers[j] > key) {
        towers[j+1] = towers[j];
        j--
      }
      towers[j + 1] = key
    }

    console.log(towers)
    console.log(towers[0][0])
    console.log(towers[9][2])
  }
}