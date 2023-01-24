export class StartGoalLogic {
  constructor() {
    this.setStartAndGoal();
  }



  async setStartAndGoal() {
    // Points to all possible coordinates on the maze
    let start,goal;

    // Points to the row and col coordinates of the maze
    let startRow, startCol, goalRow, goalCol;

    // Limits the possibility of more than one variable
    let startLimit = false;
    let goalLimit = false;

    // Convert Div_Wrapper children to array
    let divWrapperChildrenArray = [];
    const divWrapperChildren = document.getElementById('DIV_WRAPPER').children;
    divWrapperChildrenArray = [...divWrapperChildren];
    const maze = [];
    const sliderValue = document.getElementById('slider');
    while(divWrapperChildrenArray.length) maze.push(divWrapperChildrenArray.splice(0,sliderValue.value));

    await new Promise((resolve) => {
      for(let r = 0; r < maze.length; r++) {
        for(let c = 0; c < maze[r].length; c++) {
          maze[r][c].addEventListener('click', () => {
            if(startLimit === false) {
              start = maze[r][c]
              start.style.backgroundColor = 'red'
              start.classList.add('startNode')
  
              startRow = r
              startCol = c
              startLimit = true
            } else if(goalLimit === false) {
              goal = maze[r][c]
              goal.style.backgroundColor = 'blue'
              goal.classList.add('goalNode')
              goalRow = r
              goalCol = c
              goalLimit = true
            }
            if(startLimit === true && goalLimit === true) {
              resolve()
            }
          }) 
        }
      }
    });
    // This method returns a Promise
  }
}