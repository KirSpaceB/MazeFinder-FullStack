export class GridSquareAbstraction {
  constructor(element, className, backgroundColor, width, height) {
    
    this.element = element;
    this.className = className;
    this.width = width;
    this.height = height;
    this.createElement = document.createElement(this.element);
    this.createElement.className = this.className;
    this.createElement.style.backgroundColor = this.backgroundColor;
    this.createElement.style.width = this.width;
    this.createElement.style.height = this.height;
  }

  // newType is a string argument
  // returns a new backgroundColor for createElement
  setType(newType) {

    this.newType = newType;

    if (this.newType === "wall") {
      this.backgroundColor = "black";
    } else if (this.newType === "nothing") {
      this.backgroundColor = "white";
    } else if (this.newType === "path") {
      this.backgroundColor = "pink";
    } else if (this.newType === "goal") {
      this.backgroundColor = "blue";
    } else if (this.newType === "start") {
      this.backgroundColor = "red";
    } else {
      console.log('something went wrong in the method setType at GridSquareAbstraction');
    }
    this.createElement.style.backgroundColor = this.backgroundColor;
    return this.backgroundColor;
  }

  getType(elementType) {
    console.log("Just here to check if elementType is being returned , I return 5 times because theres 5 instances of GridSquareAbstraction in Grid file: %o", elementType)
    return elementType;
  }
}