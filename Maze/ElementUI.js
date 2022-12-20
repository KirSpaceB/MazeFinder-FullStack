export class ElementUI {
  constructor(element, type, typeName, text, display) {
    const ELEMENT = document.createElement(element);
    ELEMENT.setAttribute(type,typeName);
    ELEMENT.innerHTML = text;
    ELEMENT.style.display = display
    document.body.appendChild(ELEMENT);
    this.ELEMENT = ELEMENT;
  }
}