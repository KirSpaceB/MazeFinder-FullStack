import { ElementUI } from "./ElementUI.js";
export class SolveButton {
  constructor() {
    this.uiStructure()
  }

  uiStructure() {
    // Creates the elements that houses
    const DROP_DOWN = new ElementUI('div','class','dropdown', '');
    const SELECT = new ElementUI('div','class','select', '');
    const SELECTED = new ElementUI('span','class','selected','Solve');
    const CARET = new ElementUI('div','class','caret', '');

    const UL = new ElementUI('ul','class','menu', '');
    let liDFS = new ElementUI('li', 'class','DFSAlgo','DFS');
    let liBFS = new ElementUI('li', 'class','BFSAlgo','BFS');
    let liDijkstras = new ElementUI('li', 'class','DikjstrasAlgo','Dijkstras');
    let liAStar = new ElementUI('li', 'class','AStar','AStar');

    DROP_DOWN.ELEMENT.appendChild(SELECT.ELEMENT);
    SELECT.ELEMENT.appendChild(SELECTED.ELEMENT);
    SELECT.ELEMENT.appendChild(CARET.ELEMENT);

    // dropdown list eleents
    UL.ELEMENT.appendChild(liDFS.ELEMENT);
    UL.ELEMENT.appendChild(liBFS.ELEMENT);
    UL.ELEMENT.appendChild(liDijkstras.ELEMENT);
    UL.ELEMENT.appendChild(liAStar.ELEMENT);

    // dropdown list
    DROP_DOWN.ELEMENT.appendChild(UL.ELEMENT);
    
    // So here we select all the htmlElements in the dropdown div. 
    // After we select it we add the forEach method, and then we select each individual div using querySelector
    // Then we add an event listener to the select div that dropdown the menu and dropup the menu.
    // Then we iterate through each item in the ul and replace the main text with the one clicked then reset the main text with the one selected.
    const dropdown = document.querySelectorAll('.dropdown');
    dropdown.forEach((dd) => {
      const select = dd.querySelector('.select');
      const caret = dd.querySelector('.caret');
      const menu = dd.querySelector('.menu');
      const options = dd.querySelectorAll('.menu li');
      const selected = dd.querySelector('.selected');

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
      });
    });
  };
};
