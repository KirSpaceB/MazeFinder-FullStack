import { DFS } from "./DFS.js";
export class GravityButtonLogic {
  constructor() {
    this.logic()
  }

  async logic() {
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

    // Lets create variables that track r and c values in the maze
    let row = 0;
    let col = 0;
    
    // First get the Gravity mode button
    let gravityButton = document.getElementById('gravityButton');
    
    await new Promise((resolve) => {
      gravityButton.addEventListener('click',resolve)
    });
    
    for(let r = maze.length - 1; r >= 0; r--) {
      for(let c = maze[r].length - 1; c >= 0; c--) {
        if(maze[r][c].classList.contains('Wall')) {
          row = r;
          col = c;
          
          // Move the Wall down until it reaches the bottom of the maze
          while(row + 1 < maze.length && !maze[row + 1][col].classList.contains('Wall')) {
            if(maze[row][col].classList.contains('Wall')) {
              await new Promise(resolve => setTimeout(resolve, 1));
              maze[row][col].style.backgroundColor = 'white'; // erase current cell
              maze[row][col].classList.remove('Wall'); // remove Wall class from current cell
              maze[row + 1][col].style.backgroundColor = 'black'; // draw cell below
              maze[row + 1][col].classList.add('Wall'); // add Wall class to cell below
              row++;
            } else if(maze[row][col].classList.contains('startNode') || maze[row][col].classList.contains('goalNode')) {
              row++
            } else {
              break;
            }
          }
        }
      }
    }
    return maze
  }
}