// takes in no arguments
// returns nothings
export class MazeDivWrapper {
  constructor() {
    const DIV_WRAPPER = document.createElement('div');
    DIV_WRAPPER.setAttribute('id', 'DIV_WRAPPER');
    document.body.appendChild(DIV_WRAPPER);
  }
}