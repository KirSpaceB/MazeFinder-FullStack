export class ButtonUI {
  constructor(element, type, typeName, text) {
    const BUTTON_ELEMENT = document.createElement(element);
    BUTTON_ELEMENT.setAttribute(type,typeName);
    BUTTON_ELEMENT.innerHTML = text;
    document.body.appendChild(BUTTON_ELEMENT);
    this.BUTTON_ELEMENT = BUTTON_ELEMENT;
  }
}