export class GridSquare {
  constructor(element, className) {
    const gridSquareElement = document.createElement(element);
    gridSquareElement.className = className;
    this.gridSquareElement = gridSquareElement;
  }

  // newType is a string argument
  // returns a new backgroundColor for createElement
  setType(gridSquareType) {

    this.gridSquareType = gridSquareType;

    if ( this.gridSquareType === "wall") {
      this.backgroundColor = "black";
    } else if ( this.gridSquareType === "nothing") {
      this.backgroundColor = "white";
    } else if ( this.gridSquareType === "path") {
      this.backgroundColor = "orange";
    } else if ( this.gridSquareType === "goal") {
      this.backgroundColor = "blue";
    } else if ( this.gridSquareType === "start") {
      this.backgroundColor = "red";
    } else {
      console.log('something went wrong in the method setType at GridSquareAbstraction');
    }
    this.gridSquareElement.style.backgroundColor = this.backgroundColor;
  }

}