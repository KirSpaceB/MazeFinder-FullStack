import { GravityButtonLogic } from "./GravityButtonLogic.js";
export class MergeSort {
  constructor() {
    this.mergeSort()
  }

  async mergeSort() {
    let gridAfterGravityButtonIsClicked = new GravityButtonLogic();

    let maze = await gridAfterGravityButtonIsClicked.logic();
    
    const MergeSort = document.querySelector('.MergeSort')

    await new Promise((resolve) => {
      MergeSort.addEventListener('click',resolve)
    });
    this.mergeSortLogic(maze)
  }

  mergeSortLogic(maze) {
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
    let sortedArray = this.mergeSortHelperFunction(columnsArray);

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

  mergeSortHelperFunction(arr) {
    // Base case: if the array has less than 2 elements, return it as it is
    if (arr.length < 2) {
        return arr;
    }

    // Find the middle point of the array
    let middle = Math.floor(arr.length / 2);

    // Divide the array into two parts: left and right
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    // Recursively sort the left and right parts of the array
    let leftSorted = this.mergeSortHelperFunction(left);
    let rightSorted = this.mergeSortHelperFunction(right);

    // Merge the sorted left and right parts
    return this.merge(leftSorted, rightSorted);
  }

  merge(left, right) {
    if(!left || !right) return;
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex].length < right[rightIndex].length) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
}