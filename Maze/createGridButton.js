import { Grid } from "./Grid.js";

export class createGrid extends Grid {
  constructor(styleCanvasGrid) {
    let createGridInput = document.createElement('input')
    createGridInput.setAttribute('id', 'inputGrid');
    // super(styleCanvasGrid) // creating another instacne of parent class
    return createGridInput;
  }


  // this does nothing because we moved the grid to Grid,js
  createGridOnInput() {
    let divForGrid = document.createElement('div');
    divForGrid.setAttribute('id', 'divForGrid');
    document.body.appendChild(divForGrid);
    this.Test();// question: Why can we refer to the Test method using this and it invokes the method.
                // While in navar.js, when we create
                // a new instance of a class, whenever we invoke that class we need a return statement to get an output.
  }
  Test(rows,cols) {
    let selectingDivForGrid = document.getElementById('divForGrid');
    document.body.appendChild(selectingDivForGrid);
    
    let grid = document.createElement('div'); // might just create a grid abstraction
  }
}