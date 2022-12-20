import { ElementUI } from "./ElementUI.js";
export class ResetButton {
  constructor() {
    this.uiStructure()
  }

  uiStructure() {
    let ResetButton = new ElementUI('button','id','gravityButton','Gravity Mode');
    ResetButton.ELEMENT.style.background = '#2a2f3b';
    ResetButton.ELEMENT.style.color = '#fff';
    ResetButton.ELEMENT.style.border = '2px #2a2f3b solid';
    ResetButton.ELEMENT.style.borderRadius = '0.5em';
    ResetButton.ELEMENT.style.padding = '1em';
    ResetButton.ELEMENT.style.cursor = 'pointer';
    ResetButton.ELEMENT.style.minWidth = '96px';
    ResetButton.ELEMENT.style.maxHeight = '54px';


    ResetButton.ELEMENT.onmouseover = function() {
      ResetButton.ELEMENT.style.border = '2px #26489a solid';
      ResetButton.ELEMENT.style.boxShadow = '0 0 0.8em #26489a';

      ResetButton.ELEMENT.onmouseout = function() {
        ResetButton.ELEMENT.style.border = 'none';
        ResetButton.ELEMENT.style.boxShadow = 'none';
      }
    };
  };
}