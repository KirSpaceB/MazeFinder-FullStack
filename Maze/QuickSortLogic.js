import { GravityButtonLogic } from "./GravityButtonLogic.js";
export class QuickSort {
  constructor() {
    this.quickSort()
  }

  async quickSort() {
    let gridAfterGravityButtonIsClicked = new GravityButtonLogic();

    let maze = await gridAfterGravityButtonIsClicked.logic();
    
    const quickSort = document.querySelector('.QuickSort')

    await new Promise((resolve) => {
      quickSort.addEventListener('click',resolve)
    });
    this.quickSortLogic(maze)
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

  quickSortHelperFunction(arr, low, high) {
    if (low < high) {
        let pivotIndex = this.partition(arr, low, high);
        this.quickSortHelperFunction(arr, low, pivotIndex-1);
        this.quickSortHelperFunction(arr, pivotIndex + 1, high);
    }
    return arr;
  }

  partition(arr, low, high) {
    // Select the last element as the pivot
    let pivot = arr[high];
    // Initialize the variable to store the pivot's final index
    let i = (low - 1);
    // Iterate through the sub-array
    for (let j = low; j <= high - 1; j++) {
        // If the current element is smaller than the pivot
        if (arr[j].length < pivot.length) {
            // Increment the pivot's index
            i++;
            // Swap the current element with the element at pivot's index
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    // Swap the pivot element with the element at pivot's index
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }
}