export class ResetButtonLogic {
  constructor() {
    this.logic()
  }

  logic() {
    // Get reset button on DOM
    const resetButton = document.getElementById('resetButton');
    resetButton.addEventListener('click', () => {
      while (DIV_WRAPPER.firstChild) {
        DIV_WRAPPER.removeChild(DIV_WRAPPER.firstChild);
      };
    })
  }
}