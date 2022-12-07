import { ButtonUI } from "./ButtonUI.js";
export class NavBar {
  constructor() {

    let saveButton = new ButtonUI('button','id','saveButton','Save');
    let loadButton = new ButtonUI('button', 'id', 'loadButton', 'Load');
    let gravityButton = new ButtonUI('button','id','gravityButton', 'Gravity Mode');
    let sortMazeButton = new ButtonUI('button','id','sortMazeButton', 'Sort');
    let solveMazeButton = new ButtonUI('button','id','solveMazeButton', 'Solve');
    let undoButton = new ButtonUI('button','id', 'undoButton', 'Undo');

    this.navBarDiv();
    this.appendToNavBar(saveButton.BUTTON_ELEMENT);
    this.appendToNavBar(loadButton.BUTTON_ELEMENT);
    this.appendToNavBar(gravityButton.BUTTON_ELEMENT);
    this.appendToNavBar(sortMazeButton.BUTTON_ELEMENT);
    this.appendToNavBar(solveMazeButton.BUTTON_ELEMENT);
    this.appendToNavBar(undoButton.BUTTON_ELEMENT);
  }

  navBarDiv() {
    const CREATE_NAV_ELEMENT = document.createElement('div')
    CREATE_NAV_ELEMENT.className = 'navbar';
    CREATE_NAV_ELEMENT.setAttribute('id','navbar');
    document.body.appendChild(CREATE_NAV_ELEMENT);
    this.CREATE_NAV_ELEMENT = CREATE_NAV_ELEMENT;

  }
  appendToNavBar(element) {
    this.CREATE_NAV_ELEMENT.appendChild(element);
  }
}