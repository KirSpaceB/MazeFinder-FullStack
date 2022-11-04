export class SortMazeButton {
  constructor() {
    let sortMazeButton1 = document.createElement('button');
    sortMazeButton1.setAttribute('id','sortMazeButton1');
    sortMazeButton1.innerHTML = 'sort button';
    this.sortMazeButton1 = sortMazeButton1;

    this.sortWalls();
    this.dropDownMenu();
    return sortMazeButton1;
  }

  sortWalls() {
    this.sortMazeButton1.addEventListener('click', () => {
      console.log('sortwalls');
    })
  }
  dropDownMenu() {
    this.sortMazeButton1.addEventListener('click', () => {
      console.log('dropdownmenu')
    })
  }
}