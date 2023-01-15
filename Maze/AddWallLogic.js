export class AddWallLogic {
  constructor() {
    this.logic()
  }

  async logic() {
    // Convert Div_Wrapper children to array

    let divWrapperChildrenArray = [];
    let divWrapperChild = document.getElementById('DIV_WRAPPER').children;
    divWrapperChildrenArray = [...divWrapperChild];

    // How do we get the maze with start and goal here?
    let maze = [];
    while(divWrapperChildrenArray.length) maze.push(divWrapperChildrenArray.splice(0,divWrapperChildrenArray.length))

    await new Promise((resolve) => {
      for(let r = 0; r < maze.length; r++) {
        for(let c = 0; c < maze[r].length; c++) {
          if(maze[r][c].style.backgroundColor === 'red') {
            console.log('it works')
            resolve()
          } else {
            console.log('its not working')
          }
        }
      }
    })

    console.log(maze)
    
  }
    
}
