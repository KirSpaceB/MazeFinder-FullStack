export class AbstractButton {
  constructor(element, type, typeName, text) {
    this.createElement = document.createElement(element);
    this.createElement.setAttribute(type,typeName);
    this.createElement.innerHTML = text;
    document.body.appendChild(this.createElement);
    console.log(this.createElement);
  }
}