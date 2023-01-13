import { GravityButtonLogic } from "./GravityButtonLogic.js";
export class BubbleSort {
  constructor() {
    this.activeBubbleSort()
  }

  async activeBubbleSort() {
    let gridAfterGravityButtonIsClicked = new GravityButtonLogic();

    let maze = await gridAfterGravityButtonIsClicked.logic();
    
    const BubbleSort = document.querySelector('.BubbleSort')

    await new Promise((resolve) => {
      BubbleSort.addEventListener('click',resolve)
    });
    this.bubbleSortLogic(maze)
  }

  bubbleSortLogic(maze) {
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
    
    // bubble sort algorithm to sort columnsArray based on the length of sub-arrays
    for (let i = 0; i < columnsArray.length; i++) {
        for (let j = 0; j < columnsArray.length - i - 1; j++) {
            // compare the length of sub-arrays and swap if the one on the right is smaller than the one on the left
            if (columnsArray[j].length > columnsArray[j + 1].length) {
                let temp = columnsArray[j];
                columnsArray[j] = columnsArray[j + 1];
                columnsArray[j + 1] = temp;
            }
        }
    }

    // Clear the Grid
    let walls = document.getElementsByClassName("Wall");
    while (walls[0]) {
      walls[0].parentNode.removeChild(walls[0]);
    }


    let mazeContainer = document.getElementById('DIV_WRAPPER')

    // Append the newly sort collumns
    for(let c = 0; c < columnsArray.length; c++) {
      for (let r = 0; r < columnsArray[c].length; r++) {
        mazeContainer.appendChild(columnsArray[c][r]);
      }
    }
    console.log(columnsArray);
  }
}