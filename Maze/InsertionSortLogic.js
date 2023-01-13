import { GravityButtonLogic } from "./GravityButtonLogic.js";
export class InsertionSortLogic {
  constructor() {
    this.activateInsertionSort();
  }

  async activateInsertionSort() {
    let gridAfterGravityButtonIsClicked = new GravityButtonLogic();

    let maze = await gridAfterGravityButtonIsClicked.logic();
    
    const insertionSortButton = document.querySelector('.InsertionSort')

    await new Promise((resolve) => {
      insertionSortButton.addEventListener('click',resolve)
    });
    
    this.getCoordinates(maze);
  }

  async getCoordinates(maze) {
    let columnsArray = [];
    for(let c = 0; c < maze[0].length; c++) {
      let arrayForCols = []
      for(let r = 0; r < maze.length; r++) {
        if(maze[r][c].classList.contains('Wall')) {
          arrayForCols.push(maze[r][c])
        }
      }
      columnsArray.push(arrayForCols);
    }
    for(let i = 1; i < columnsArray.length; i++) {
      let j = i - 1;
      let temp = columnsArray[i];
      while(j >= 0 && columnsArray[j].length > temp.length) {
        columnsArray[j + 1] = columnsArray[j];
        j--;
      }
      columnsArray[j + 1] = temp;
    }

    let walls = document.getElementsByClassName("Wall");
    while (walls[0]) {
      walls[0].parentNode.removeChild(walls[0]);
    }

    console.log(columnsArray)
    let mazeContainer = document.getElementById('DIV_WRAPPER')

    for(let c = 0; c < columnsArray.length; c++) {
      for (let r = 0; r < columnsArray[c].length; r++) {
        mazeContainer.appendChild(columnsArray[c][r]);
      }
    }

    
  }
}

