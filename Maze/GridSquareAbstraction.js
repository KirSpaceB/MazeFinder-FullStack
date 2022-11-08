export class GridSquareAbstraction {
  constructor(element, className, backgroundColor, width, height, squareType) {
    this.createElement = document.createElement(element);
    this.createElement.className = className;
    this.createElement.style.backgroundColor = backgroundColor;
    this.createElement.style.width = width;
    this.createElement.style.height = height;
    document.body.appendChild(this.createElement);

    this.squareType = squareType // a string of "wall,nothing,path, or goal"
    // Will it go something like if(squareType ="wall") { this.createElement.style.backgroundColor = "black"}?
    
  }

  setType(newType) {
    // this.squareType = newType;
    // this.squareType.style.backgroundColor //create an if statement that will determine which backgroundColor this will bet set to
    // return this.squareType; // returns squareType for getType method
  }

  getType() {
    // this.setType(); // calls squareType
    // let x = this.setType();
    // console.log(x) // tells me what type the gridsquare is 
  }
}