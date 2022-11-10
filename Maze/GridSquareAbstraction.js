export class GridSquareAbstraction {
  constructor(element, className, backgroundColor, width, height) {
    this.element = element;
    this.className = className;
    this.backgroundColor = backgroundColor;
    this.width = width;
    this.height = height;

    let createElement = document.createElement(element);
    createElement.className = className;
    createElement.style.backgroundColor = backgroundColor;
    createElement.style.width = width;
    createElement.style.height = height;
    
    this.squareType = "wall";
    this.getType(this.squareType);
    this.setType(this.squareType);
    return createElement;
  }
  setType(newType) {
    // This method tells the computer to differentiate between the different types of divs to display on the Maze represented by colors
    // this.newType is determined by setType parameter which takes the argument this.square. Which is hard coded to "Wall" rn

    this.newType = newType;
    if (this.newType === "wall") {
      this.backgroundColor = "black";
    } else if (this.newType === "nothing") {
      this.backgroundColor = "white";
    } else if (this.newType === "path") {
      this.backgroundColor = "pink";
    } else if (this.newType = "goal") {
      this.backgroundColor = "blue";
    } else if (this.newType === "start") {
      this.backgroundColor = "red";
    } else {
      console.log('something went wrong in the method setType at GridSquareAbstraction');
    }
    console.log(this.newType);
    return this.newType;
  }

  getType(gridSquareType) {
    return gridSquareType;
  }
}