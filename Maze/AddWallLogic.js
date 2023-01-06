import { StartGoalLogic } from "./StartGoalLogic.js";
export class AddWallLogic {
  constructor() {
    this.logic()
  }

  async logic() {

    let gridWithStartGoal = new StartGoalLogic(); // this returns a 2D array
    const maze = await gridWithStartGoal.setStartAndGoal();

    console.log(maze)
    // We use a variable to set a pointer that waits for grid.createMaze() to initialize
    // We have to await for createMaze because it gives the DIV_WRAPPER child elements and the childElementCount cannot be fufilled unless the DIV_WRAPPER has child elements.

    await new Promise((resolve) => {
      const DIV_WRAPPER = document.getElementById('DIV_WRAPPER');
      console.log(DIV_WRAPPER.childElementCount)
      if (DIV_WRAPPER.childElementCount > 0) {
        setTimeout(() => {
          console.log('CallBack');
          resolve()
        },0)

      }
    });
    console.log('Promise is Resolved')
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

    };

    getWall.addEventListener('click', () => {
      getWall.classList.toggle('addWallClick');
      if(getWall.classList.contains('addWallClick')) {
        console.log('on');
        for(let r = 0; r < maze.length; r++) {
          for(let c = 0; c < maze[r].length; c++) {
            //hold mouse down effect
            maze[r][c].addEventListener('mousedown',handleOnClick)
          }
        }
      } else {
        for(let r = 0; r < maze.length; r++) {
          for(let c = 0; c < maze[r].length; c++) {
            maze[r][c].removeEventListener('mousedown',handleOnClick)
          }
        }
      }
    })
    // Lets figure out how to Activate Algo after walls are placed
    // Initialize after walls are placed
    console.log(maze)
    return maze
  }
    
}
