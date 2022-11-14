import { AbstractButton } from "./AbstractButton.js";

export class NavBar {
  constructor() {

    let saveButton = new AbstractButton('button','id','saveButton','Save');
    let loadButton = new AbstractButton('button', 'id', 'loadButton', 'Load');
    let gravityButton = new AbstractButton('button','id','gravityButton', 'Gravity Mode');
    let sortMazeButton = new AbstractButton('button','id','sortMazeButton', 'Sort');
    let solveMazeButton = new AbstractButton('button','id','solveMazeButton', 'Solve');
    let undoButton = new AbstractButton('button','id', 'undoButton', 'Undo');
    
    
  }

  creatingNavBar() {

    const navBarDiv = document.createElement('div')
    navBarDiv.className = 'navbar';
    navBarDiv.setAttribute('id','navbar');
    document.body.appendChild(navBarDiv);


    navBarDiv.appendChild(saveButton);
    navBarDiv.appendChild(loadButton);
    navBarDiv.appendChild(gravityButton);
    navBarDiv.appendChild(sortMazeButton);
    navBarDiv.appendChild(solveMazeButton);
    navBarDiv.appendChild(undoButton);

  }
}