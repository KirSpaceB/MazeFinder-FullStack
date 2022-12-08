export class GridSquareAbstraction {
  constructor(element, className, backgroundColor,markStatus, width, height) {
    const gridSquareElement = document.createElement(element);
    gridSquareElement.className = className;
    gridSquareElement.style.backgroundColor = backgroundColor;
    gridSquareElement.style.width = width;
    gridSquareElement.style.height = height;
    this.markStatus = markStatus;
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
      this.backgroundColor = "pink";
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