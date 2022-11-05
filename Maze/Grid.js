export class Grid {
  constructor() {
    this.gridForMaze();
    this.Maze(16);
    this.WallsForMaze();
  }

  WallsForMaze() {
    let createWalls = Array.from(document.getElementsByClassName('mazeGrid'));
    console.log(typeof createWalls);

    //logic error 
    createWalls.forEach(element => {
      let Goal = "Goal";
      const random = Math.floor(Math.random() * 4)
      if (random === 0) {
        element.style.backgroundColor = "black"
      } else if (random === 1 && random === 2 && random === 3) {
        element.style.backgroundColor = "white";
      } else if (Goal === "") {
        element.style.backgroundColor = "red";
      }
      console.log(typeof element);
    })

    // nums.forEach((e) => {
    //   console.log(typeof e);
    //   if (random === 0) {
    //     e.style.backgroundColor = "white";
    //   } else if (random === 1) {
    //     e.style.backgroundColor = "black";
    //   } else {
    //     return 'error'
    //   }
    // })

    


    // could use set timer to implmenet walls for maze
  }

  

  gridForMaze() {
    let Grid = document.createElement('div');
    Grid.setAttribute('id', 'gridForMaze');

    document.body.appendChild(Grid);


    this.Grid = Grid;
  }

  Maze(gridSize) {
    let mazeGridNum = 0;
    const rows = gridSize;
    const cols = gridSize;
    const area = rows * cols;


    for (let i = 0; i < area; i++) {
      this.mazeGrid = document.createElement('div');
      this.mazeGrid.setAttribute('class', `mazeGrid +${mazeGridNum += 1}`);
      this.mazeGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
      this.mazeGrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`


      this.Grid.appendChild(this.mazeGrid);
    }

  }
  
}