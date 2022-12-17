import { ButtonUI } from "./ButtonUI.js";
export class NavBar {
  constructor() {

    const CREATE_NAV_ELEMENT = document.createElement('div');
    CREATE_NAV_ELEMENT.className = 'navbar';
    CREATE_NAV_ELEMENT.setAttribute('id', 'navbar');
    document.body.appendChild(CREATE_NAV_ELEMENT);


    let saveButton = new ButtonUI('button','id','saveButton','Save');
    let loadButton = new ButtonUI('button', 'id', 'loadButton', 'Load');
    let gravityButton = new ButtonUI('button','id','gravityButton', 'Gravity Mode');
    let sortMazeButton = new ButtonUI('button','id','sortMazeButton', 'Sort');
    let solveMazeButton = new ButtonUI('button','id','solveMazeButton', 'Solve');
    let undoButton = new ButtonUI('button','id', 'undoButton', 'Undo');

    CREATE_NAV_ELEMENT.appendChild(saveButton.BUTTON_ELEMENT);
    CREATE_NAV_ELEMENT.appendChild(loadButton.BUTTON_ELEMENT);
    CREATE_NAV_ELEMENT.appendChild(gravityButton.BUTTON_ELEMENT);
    CREATE_NAV_ELEMENT.appendChild(sortMazeButton.BUTTON_ELEMENT);
    CREATE_NAV_ELEMENT.appendChild(solveMazeButton.BUTTON_ELEMENT);
    CREATE_NAV_ELEMENT.appendChild(undoButton.BUTTON_ELEMENT);
    this.CREATE_NAV_ELEMENT = CREATE_NAV_ELEMENT;

  }
}