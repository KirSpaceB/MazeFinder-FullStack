import { GravityButtonLogic } from "./GravityButtonLogic.js";
export class RadixSort {
  constructor() {
    this.radixSort()
  }

  async radixSort() {
    let gridAfterGravityButtonIsClicked = new GravityButtonLogic();

    let maze = await gridAfterGravityButtonIsClicked.logic();
    
    const radixSort = document.querySelector('.RadixSort')

    await new Promise((resolve) => {
      radixSort.addEventListener('click',resolve)
    });
    this.radixSortLogic(maze)
  }

  radixSortLogic(maze) {
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
    let sortedArray = this.radixSortHelperFunction(columnsArray);
    // Clear the Grid
    let walls = document.getElementsByClassName("Wall");
    while (walls[0]) {
      walls[0].parentNode.removeChild(walls[0]);
    }
    // Append the newly sort collumns
    let mazeContainer = document.getElementById('DIV_WRAPPER')
    for(let c = 0; c < sortedArray.length; c++) {
      for (let r = 0; r < sortedArray[c].length; r++) {
        mazeContainer.appendChild(sortedArray[c][r]);
      }
    }
    console.log(sortedArray);
  }

  radixSortHelperFunction(arr) {
    let maxLength = 0;
    // Find the maximum length of the elements in the array
    for (let i = 0; i < arr.length; i++) {
      maxLength = Math.max(maxLength, arr[i].length);
    }
    // Loop through the elements by digits
    for (let i = 0; i < maxLength; i++) {
      let buckets = Array.from({length: 10}, () => []);
      // Place the elements in the corresponding buckets
      for (let j = 0; j < arr.length; j++) {
        let digit = arr[j].length.toString()[i];
        if (digit === undefined) {
          digit = 0;
        }
        buckets[digit].push(arr[j]);
      }
      // Concatenate the elements in the buckets back to the array
      arr = [].concat(...buckets);
    }
    return arr;
  }
}