export class solveMazeButton {
  constructor() {
    let solveMazeButton = document.createElement('button');
    solveMazeButton.setAttribute('id', 'solveMazeButton');
    solveMazeButton.innerHTML = 'Solve Maze Button'
    this.solveMazeButton = solveMazeButton;

    this.dropDownMenu();

    return solveMazeButton;
  }

  dropDownMenu() {
    this.solveMazeButton.addEventListener('click', () => {
      console.log('solvemazebutton')
    })
  }
}