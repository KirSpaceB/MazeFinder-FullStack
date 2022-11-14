export class AbstractButton {
  constructor(element, type, typeName, text) {
    this.createElementButton = document.createElement(element);
    this.createElementButton.setAttribute(type,typeName);
    this.createElementButton.innerHTML = text;
    document.body.appendChild(this.createElementButton);
  }
}