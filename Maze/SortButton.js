import { ElementUI } from "./ElementUI.js";
export class SortButton {
  constructor() {
    this.uiStructure()
  }

  uiStructure() {

    const DROP_DOWN = new ElementUI('div','class','dropdown1', '');
    const select = new ElementUI('div','class','select', '');
    const selected = new ElementUI('span','class','selected','Sort');
    const caret = new ElementUI('div','class','caret', '');

    const menu = new ElementUI('ul','class','menu', '');
    const INSERTION_SORT = new ElementUI('li','class','InsertionSort','Intersection Sort');
    const SELECTION_SORT = new ElementUI('li','class','SelectionSort','Selection Sort');
    const BUBBLE_SORT = new ElementUI('li','class','BubbleSort','Bubble Sort');
    const MERGE_SORT = new ElementUI('li','class','MergeSort','Merge Sort');
    const QUICK_SORT = new ElementUI('li', 'class','QuickSort', 'Quick Sort');
    const RADIX_SORT = new ElementUI('li','class','RadixSort','Radix Sort');

    DROP_DOWN.ELEMENT.appendChild(select.ELEMENT);
    select.ELEMENT.appendChild(selected.ELEMENT);
    select.ELEMENT.appendChild(caret.ELEMENT);

    menu.ELEMENT.appendChild(INSERTION_SORT.ELEMENT);
    menu.ELEMENT.appendChild(SELECTION_SORT.ELEMENT);
    menu.ELEMENT.appendChild(BUBBLE_SORT.ELEMENT);
    menu.ELEMENT.appendChild(MERGE_SORT.ELEMENT);
    menu.ELEMENT.appendChild(QUICK_SORT.ELEMENT);
    menu.ELEMENT.appendChild(RADIX_SORT.ELEMENT);

    DROP_DOWN.ELEMENT.appendChild(menu.ELEMENT);

    const queryDropDown = document.querySelectorAll('.dropdown1');

    queryDropDown.forEach((e) => {
      const select = e.querySelector('.select');
      const caret = e.querySelector('.caret');
      const menu = e.querySelector('.menu');
      const options = e.querySelectorAll('.menu li');
      const selected = e.querySelector('.selected');

      select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
      });

      options.forEach((option) => {
        option.addEventListener('click', () => {
          selected.innerText = option.innerText;
          select.classList.remove('select-clicked');
          caret.classList.remove('caret-rotate');
          menu.classList.remove('menu-open');

          options.forEach((option) => {
            option.classList.remove('active');
          });

          option.classList.add('active');
        })
      })
    })
  }
}