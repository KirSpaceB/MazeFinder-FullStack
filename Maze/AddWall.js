import { ElementUI } from "./ElementUI.js";
import { Grid } from "./Grid.js";
import { StartGoalLogic } from "./StartGoalLogic.js";
export class AddWall {
  constructor() {
    this.uiStructure();
  }

  async uiStructure() {
    let addWallBtn = new ElementUI('button','id','addWallButton','Add Wall');
    addWallBtn.ELEMENT.style.background = '#2a2f3b';
    addWallBtn.ELEMENT.style.color = '#fff';
    addWallBtn.ELEMENT.style.border = '2px #2a2f3b solid';
    addWallBtn.ELEMENT.style.borderRadius = '0.5em';
    addWallBtn.ELEMENT.style.padding = '1em';
    addWallBtn.ELEMENT.style.cursor = 'pointer';
    addWallBtn.ELEMENT.style.minWidth = '96px';
    addWallBtn.ELEMENT.style.maxHeight = '54px';

    // Instantiate Grid object to iterate over every div in said object and if div is clicked change backgroundColor to black and give it the class property wall

    // We have to create a promise that checks the Grid for startNode and goalNode\

    // Initialize the Grid object which is an empty object

    // We had a working idea here that would wait for StartGoalLogic to be fufilled then allow us to create the walls

    const grid = new Grid();
    const maze = await grid.createMaze()
    console.log(maze)
    // We use a variable to set a pointer that waits for grid.createMaze() to initialize
    // We have to await for createMaze because it gives the DIV_WRAPPER child elements and the childElementCount cannot be fufilled unless the DIV_WRAPPER has child elements.

    await new Promise((resolve) => {
      const DIV_WRAPPER = document.getElementById('DIV_WRAPPER');
      if (DIV_WRAPPER.childElementCount > 0) {
        resolve()
      }
    });

    console.log(DIV_WRAPPER)

    // Create an onclick effect that lights up the button but on click again it turns it off
    // Add Wal button on the DOM
    let getWall = document.querySelector('#addWallButton');
    // Vision is that when I toggle the getWall classList it lights up showing that it is active.
    // If its Active then the Maze should all me to click and change the div to black and add class Wall to it

    // Logic for adding wall
    const handleOnClick = (e) => {
      e.target.style.backgroundColor = 'black';
      e.target.classList.add('Wall');
    }

    getWall.addEventListener('click', () => {
      getWall.classList.toggle('addWallClick');
      if(getWall.classList.contains('addWallClick')) {
        console.log('on');
        for(let r = 0; r < maze.length; r++) {
          for(let c = 0; c < maze[r].length; c++) {
            maze[r][c].addEventListener('click',handleOnClick)
          }
        }
      } else {
        for(let r = 0; r < maze.length; r++) {
          for(let c = 0; c < maze[r].length; c++) {
            maze[r][c].removeEventListener('click',handleOnClick)
          }
        }
      }
    })
    // Lets figure out how to Activate Algo after walls are placed
  }
}