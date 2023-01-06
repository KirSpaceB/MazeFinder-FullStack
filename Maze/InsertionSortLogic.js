import { GravityButtonLogic } from "./GravityButtonLogic.js";

export class InsertionSortLogic {
  constructor() {
    this.sortLogic()
  }

  async sortLogic() {
    let gridAfterGravityButtonIsClicked = new GravityButtonLogic();

    let maze = await gridAfterGravityButtonIsClicked.logic();

    const sortButton = document.querySelector('.InsertionSort')
    console.log(sortButton)
    sortButton.addEventListener('click', this.performtheSort(maze))
  }

  async performtheSort(maze) {

    for (let i = 0; i < maze.length; i++) {
      let current = maze[i];
      let j = i - 1;
      while (j >= 0 && maze[j].classList.contains('Wall') > current.classList.contains('Wall')) {
        await new Promise(resolve => setTimeout(resolve, 10));
        maze[j + 1] = maze[j];
        j--;
      }
      maze[j + 1] = current;
    }
  }
}

