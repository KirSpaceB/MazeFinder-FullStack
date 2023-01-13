import { GravityButtonLogic } from "./GravityButtonLogic.js";
export class SelectionSort {
  constructor() {
    this.activateSelectionSort()
  }

  async activateSelectionSort() {
    let gridAfterGravityButtonIsClicked = new GravityButtonLogic();

    let maze = await gridAfterGravityButtonIsClicked.logic();
    
    const SelectionSortButton = document.querySelector('.SelectionSort')

    await new Promise((resolve) => {
      SelectionSortButton.addEventListener('click',resolve)
    });
    this.selectionSortLogic(maze);
  }

  selectionSortLogic(maze) {
    let columnsArray = [];
    // loop through the maze to extract all Wall elements in each column
    for(let c = 0; c < maze[0].length; c++) {
      let arrayForCols = []
      for(let r = 0; r < maze.length; r++) {
        if(maze[r][c].classList.contains('Wall')) {
          arrayForCols.push(maze[r][c])
        }
      }
      columnsArray.push(arrayForCols);
    }
    
    // selection sort algorithm to sort columnsArray based on the length of sub-arrays
    for (let i = 0; i < columnsArray.length - 1; i++) {
      // set the current index as the minimum index
      let minIndex = i;
      for (let j = i + 1; j < columnsArray.length; j++) {
        // compare the length of sub-arrays and update the minimum index if a smaller length is found
        if (columnsArray[j].length < columnsArray[minIndex].length) {
          minIndex = j;
        }
      }
      // swap the sub-array at the current index with the sub-array at the minimum index if they are not the same
      if (minIndex !== i) {
        let temp = columnsArray[i];
        columnsArray[i] = columnsArray[minIndex];
        columnsArray[minIndex] = temp;
      }
    }

    // Clear the Grid
    let walls = document.getElementsByClassName("Wall");
    while (walls[0]) {
      walls[0].parentNode.removeChild(walls[0]);
    }
    
    // Append the newly sort collumns
    let mazeContainer = document.getElementById('DIV_WRAPPER')
    for(let c = 0; c < columnsArray.length; c++) {
      for (let r = 0; r < columnsArray[c].length; r++) {
        mazeContainer.appendChild(columnsArray[c][r]);
      }
    }
    console.log(columnsArray);
  }
}