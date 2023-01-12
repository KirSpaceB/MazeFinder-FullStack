import { GravityButtonLogic } from "./GravityButtonLogic.js";

export class InsertionSortLogic {
  constructor() {
    this.sortLogic();
  }

  async sortLogic() {
    let gridAfterGravityButtonIsClicked = new GravityButtonLogic();

    let maze = await gridAfterGravityButtonIsClicked.logic();
    
    const sortButton = document.querySelector('.InsertionSort')
    console.log(sortButton)

    await new Promise((resolve) => {
      sortButton.addEventListener('click',resolve)
    });
    
    this.getCoordinates(maze);
  }

  async getCoordinates(maze) {
    let firstWallCords = [];
    let secondWallCords = [];
    // Get all coordinates of divs with class "Wall"
    for(let r = 0; r < maze.length; r++) {
      for(let c = 0; c < maze[r].length; c++) {
        if(r < maze.length && c <= 0 && maze[r][c].classList.contains('Wall')) {
          firstWallCords.push([r,c])
        } else if(r < maze.length  && c === 1 && maze[r][c].classList.contains('Wall')) {
          secondWallCords.push([r,c])
        }
      }
    };


    if(firstWallCords.length > secondWallCords.length) {
      [firstWallCords, secondWallCords] = [secondWallCords, firstWallCords]
    } else {
      console.log('First set of coordinates in not greater')
    }
  
    for(let i = 0; i < firstWallCords.length; i++) {
      for(let j = 0; j < firstWallCords[i].length; j++) {
        maze[firstWallCords[i][0]][firstWallCords[j][1] - 1].style.backgroundColor = 'orange'
      }
    }

    for(let i = 0; i < secondWallCords.length; i++) {
      for(let j = 0; j < secondWallCords[i].length; j++) {
        maze[secondWallCords[i][0]][secondWallCords[j][1] + 1].style.backgroundColor = 'red'
      }
    }

  }
}

