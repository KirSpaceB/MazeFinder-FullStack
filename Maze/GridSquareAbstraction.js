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
    console.log("Just here to check if elementType is being returned", elementType)
    return elementType;
  }


  // We need to use map.entries to somehow get the key of each value and put it in a array
  setKey(map, input) {
    for (let [key, value] of map.entries()) {
      if (value === input) {
        return key
      }
    }


  }
}