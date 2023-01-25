export class AddWallLogic {
  constructor() {
    this.logic()
  }

  async logic() {
    // Get the addWall UI to give it functionality
    const wallButtonUI = document.querySelector('#addWallButton');

    // Get all the divs
    let divWrapperChildren = document.getElementById('DIV_WRAPPER').children;
    // Jave to covert divs to an array to add event listener
    let divWrapperChildrenArray = [...divWrapperChildren];

    // Refactored logic for adding a wall on the grid
    let addWallHandler = (e) => {
      e.target.style.backgroundColor = 'black';
      e.target.classList.add('Wall');
    };

    wallButtonUI.addEventListener('click', () => {
      wallButtonUI.classList.toggle('addWallClick');
      
      if(wallButtonUI.classList.contains('addWallClick')) {
        divWrapperChildrenArray.forEach(e => {
          e.addEventListener('click',addWallHandler)
        });
      } else {
        divWrapperChildrenArray.forEach(e => {
          e.removeEventListener('click', addWallHandler)
        });
      }
    })
  }  
}
