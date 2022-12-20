import { ElementUI } from "./ElementUI.js";
export class SolveButton extends ElementUI {
  constructor() {
    super('button','id','solveMazeButton', 'Solve');
  }

  uiStructure() {
    const DROP_DOWN = new ElementUI('div','class','dropdown', '');
    const SELECT = new ElementUI('div','class','select', '');
    const SELECTED = new ElementUI('span','class','selected','Solve');
    const CARET = new ElementUI('div','class','caret', '');

    const UL = new ElementUI('ul','class','menu', '');
    let liDFS = new ElementUI('li', undefined,undefined,'DFS');
    let liBFS = new ElementUI('li', undefined,undefined,'BFS');
    let liDijkstras = new ElementUI('li', undefined,undefined,'Dijkstras');
    let liAStar = new ElementUI('li', undefined,undefined,'AStar');

    DROP_DOWN.ELEMENT.appendChild(SELECT.ELEMENT);
    SELECT.ELEMENT.appendChild(SELECTED.ELEMENT);
    SELECT.ELEMENT.appendChild(CARET.ELEMENT);

    UL.ELEMENT.appendChild(liDFS.ELEMENT);
    UL.ELEMENT.appendChild(liBFS.ELEMENT);
    UL.ELEMENT.appendChild(liDijkstras.ELEMENT);
    UL.ELEMENT.appendChild(liAStar.ELEMENT);

    DROP_DOWN.ELEMENT.appendChild(UL.ELEMENT);

    const dropdown = document.querySelectorAll('.dropdown');

    dropdown.forEach((dd) => {
      const select = dd.querySelector('.select');
      const caret = dd.querySelector('.caret')
      const menu = dd.querySelector('.menu')
      const options = dd.querySelectorAll('.menu li')
      const selected = dd.querySelector('.selected')

      select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
      });

      options.forEach((option) => {
        option.addEventListener('click', () =>{
          selected.innerText = option.innerText;
          select.classList.remove('select-clicked');
          caret.classList.remove('caret-rotate');
          menu.classList.remove('menu-open');

          options.forEach((option) => {
            option.classList.remove('active');
          });
          
          option.classList.add('active');
          
        });
      })
    })

  }
}
