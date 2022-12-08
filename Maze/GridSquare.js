import { GridSquareAbstraction } from "./GridSquareAbstraction.js";
// Why do we need to add the parameters to super and in the constructor?
// Why does it still allow the div to appended to the divWrapper in Grid even tho the element is undefined
// Why is it when I remove super the divs still get appended to the divWrapper?
export class GridSquare extends GridSquareAbstraction {
  constructor(element, className, backgroundColor,markStatus, width, height) {
    super(element, className, backgroundColor,markStatus, width, height);
  }
}