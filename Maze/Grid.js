import { GridSquare } from "./GridSquare.js";


export class Grid {
  constructor() {
    this.changeSize();
    this.createMaze();
  }

  changeSize() {
    // Create the slider and UI element
    const slider = document.createElement('input');
    slider.type = "range";
    slider.min = "4";
    slider.max = "36";
    slider.id = "slider";
    const p = document.createElement('p');
    const inputValue = document.createElement('span');
    inputValue.textContent = slider.value;
  
    // Update the UI element and call createMaze when the slider value changes
    slider.addEventListener('input', () => {
      inputValue.textContent = slider.value;
      this.createMaze(slider.value);
    });
  
    p.appendChild(inputValue);
    document.body.appendChild(p);
    document.body.appendChild(slider);
  }
  
  createMaze(size) {
    const DIV_WRAPPER = document.getElementById('DIV_WRAPPER');
    DIV_WRAPPER.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    DIV_WRAPPER.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    // Remove all child elements from DIV_WRAPPER
    while (DIV_WRAPPER.firstChild) {
      DIV_WRAPPER.removeChild(DIV_WRAPPER.firstChild);
    }
  
    // Draw the maze
    for (let i = 0; i < size * size; i++) {
      let grid = document.createElement('div');
      grid.style.backgroundColor = 'white';
      DIV_WRAPPER.insertAdjacentElement('beforeend', grid);
    };
    this.startAndGoalLogic()
  }
  // Remember we have to move the slider in order to change the backgroundColor
  startAndGoalLogic() {
    let start;
    let goal;
    // create a check that returns true once start and goal are on the grid
    let checkStart = false;
    let checkGoal = false;
    // Get the DIV_WRAPPER children
    const childElements = document.getElementById('DIV_WRAPPER').children;
    // Convert child elements to an array
    const childElementsArray = Array.from(childElements);

    console.log(childElementsArray[53])
    let counterForStart = 1
    let counterForGoal = 1;
    childElementsArray.forEach(e => {
      e.addEventListener('click', () => {
        // Check if the background color is already red
        if(counterForStart <= 1 && checkStart === false) {
          e.style.backgroundColor = 'red';
          e.dataset.value = 's';
          start = e;
          counterForStart++
          checkStart = true;
        } else if(counterForGoal <= 1 && checkGoal === false) {
          e.style.backgroundColor = 'blue';
          e.dataset.value = 'g';
          goal = e;
          counterForGoal++;
          checkGoal = true;
        }

      })
    });
  };


}
