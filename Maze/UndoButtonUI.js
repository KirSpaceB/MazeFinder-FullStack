export class UndoButton {
  constructor() {
    let undoNavButton = document.createElement('button');
    undoNavButton.setAttribute('id', 'undoNavButton');
    undoNavButton.innerHTML = 'Undo'

    this.undoButtonObject = undoNavButton;

    this.Undo();
    return undoNavButton;
  }

  Undo() {
    this.undoButtonObject.addEventListener('click', () => {
      console.log('undo');
    })
  }
}