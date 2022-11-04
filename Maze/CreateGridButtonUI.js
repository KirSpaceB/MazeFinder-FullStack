import { Grid } from "./Grid.js";

export class CreateGrid extends Grid {
  constructor(styleCanvasGrid) {
    let createGridInput = document.createElement('input')
    createGridInput.setAttribute('id', 'inputGrid');
    // super(styleCanvasGrid) // creating another instacne of parent class
    return createGridInput;
  }


  
}