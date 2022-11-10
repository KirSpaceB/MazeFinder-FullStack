import { GridSquareAbstraction } from "./GridSquareAbstraction.js";

export class GridSquare {
  constructor() {
  // newSetType.setType('wall'); // this is how you call a function to from a different class to a new class
  this.gridWrapper();
  this.setMaze();
  
  }
  
  gridWrapper(appendedChild) {
    let divWrapper = document.createElement('div');
    divWrapper.setAttribute('id', 'divWrapper');
    document.body.appendChild(divWrapper);

    // divWrapper.appendChild(appendedChild);
  }

  setMaze(inputArray) {
    let w = new GridSquareAbstraction('div','wallDiv','white');
    w.setType('wall')
    console.log(w)
    let Maze = [w,w,w,w,w]; // should be a list of 5 objects


  }
}