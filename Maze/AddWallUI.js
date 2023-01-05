import { ElementUI } from "./ElementUI.js";
export class AddWallUI {
  constructor() {
    this.uiStructure();
  }

  // Execute before StartGoalLogic
  async uiStructure() {
    let addWallBtn = new ElementUI('button','id','addWallButton','Add Wall');
    addWallBtn.ELEMENT.style.background = '#2a2f3b';
    addWallBtn.ELEMENT.style.color = '#fff';
    addWallBtn.ELEMENT.style.border = '2px #2a2f3b solid';
    addWallBtn.ELEMENT.style.borderRadius = '0.5em';
    addWallBtn.ELEMENT.style.padding = '1em';
    addWallBtn.ELEMENT.style.cursor = 'pointer';
    addWallBtn.ELEMENT.style.minWidth = '96px';
    addWallBtn.ELEMENT.style.maxHeight = '54px';

    // Intiantiate the Grid object which has the method createMaze();



  }

}