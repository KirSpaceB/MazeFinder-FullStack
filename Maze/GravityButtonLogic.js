import { DFS } from "./DFS.js";
import { AddWallLogic } from "./AddWallLogic.js";

export class GravityButtonLogic {
  constructor() {
    this.logic()
  }

  async logic() {
    // We cant have this here because it is creating a new pointer in the memory overriding the previous pointer to the AddWallLogic
    let newDfs = new DFS();
    const maze = await newDfs.algorithm();



    // First get the Gravity mode button
    let gravityButton = document.getElementById('gravityButton');

    // Create Event that listens for a click, iterate through entire maze if maze has black div
    gravityButton.addEventListener('click', () => {
      for(let r = 0; r < maze.length; r++) {
        for(let c = 0; c < maze[r].length; c++) {
          if(maze[r][c].classList.contains('Wall')) {
            // I can tell the computer to iterate through maze if its a Wall check bottom neighbor if its a white div give it the Wall property, keep going until you reach row 0 column 0
            while(r > 16) {
              maze[r][c].style.backgroundColor = 'white'
              maze[r+1][c].style.backgroundColor = 'black'
            }
            maze[r][c].style.backgroundColor = 'white';
            maze[r + 1][c].style.backgroundColor = 'black';
            
          }
        }
      }
    })
    
    

  }
}