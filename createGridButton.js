export class createGrid {
  constructor() {
    let createGridInput = document.createElement('input')
    createGridInput.setAttribute('id', 'inputGrid');
    
    this.createGridOnInput();

    return createGridInput;
  }

  createGridOnInput() {
    let divForGrid = document.createElement('div');
    divForGrid.setAttribute('id', 'divForGrid');
    document.body.appendChild(divForGrid);
    this.Test();// question: Why can we refer to the Test method using this and it invokes the method, we get and output.
                // While in navar.js, when we create
                // a new instance of a class, whenever we invoke that class we need a return statement to get an output.
  }
  Test(rows,cols) {
    let selectingDivForGrid = document.getElementById('divForGrid');
    document.body.appendChild(selectingDivForGrid);
    
    let grid = document.createElement('div'); // might just create a grid abstraction
  }
}