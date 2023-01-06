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
          console.log(maze[r][c]);
        }
      }
    })
    
    

  }
}