export class GridSquareAbstraction {
  constructor(element, className, backgroundColor, width, height) {
    const gridSquareElement = document.createElement(element);
    gridSquareElement.className = className;
    gridSquareElement.style.backgroundColor = backgroundColor;
    gridSquareElement.style.width = width;
    gridSquareElement.style.height = height;
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

  getType(elementType) {
    console.log("Just here to check if elementType is being returned", elementType)
    return elementType;
  }
  // takes in this.node_id_ + this.node_key_number as a STRING
  setID(id) {
    this.id = id;
  }
  
  getID() {
    return this.id
  }
  //takes this.node_id_ as an argument
  setKey(key) {
    this.key = key
  }

  getKey() {
    return this.key
  }
}