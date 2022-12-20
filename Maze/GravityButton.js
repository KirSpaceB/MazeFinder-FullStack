import { ElementUI } from "./ElementUI.js";
export class GravityButton {
  constructor() {
    this.uiStructure()
  }

  uiStructure() {
    let gravityButton = new ElementUI('button','id','resetButton','Reset');
    gravityButton.ELEMENT.style.background = '#2a2f3b';
    gravityButton.ELEMENT.style.color = '#fff';
    gravityButton.ELEMENT.style.border = '2px #2a2f3b solid';
    gravityButton.ELEMENT.style.borderRadius = '0.5em';
    gravityButton.ELEMENT.style.padding = '1em';
    gravityButton.ELEMENT.style.cursor = 'pointer';
    gravityButton.ELEMENT.style.minWidth = '96px';
    gravityButton.ELEMENT.style.maxHeight = '54px';


    gravityButton.ELEMENT.onmouseover = function() {
      gravityButton.ELEMENT.style.border = '2px #26489a solid';
      gravityButton.ELEMENT.style.boxShadow = '0 0 0.8em #26489a';

      gravityButton.ELEMENT.onmouseout = function() {
        gravityButton.ELEMENT.style.border = 'none';
        gravityButton.ELEMENT.style.boxShadow = 'none';
      }
    };
  };
}