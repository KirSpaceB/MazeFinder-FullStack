export class Grid {
  constructor(gridForMaze, Maze, WallsForMaze, setStartingPoint) {
    this.gridForMaze();
    this.Maze(16);
    this.WallsForMaze();

    this.gridForMaze = gridForMaze;
    this.Maze = Maze;
    this.WallsForMaze = WallsForMaze;
    this.setStartingPoint = setStartingPoint;
    
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
      this.mazeGrid.setAttribute('class', 'mazeGrid');
      this.mazeGrid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
      this.mazeGrid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`


      this.Grid.appendChild(this.mazeGrid);
    }

  }

  WallsForMaze() {
    let createWalls = document.querySelectorAll('.mazeGrid');

    for (let i = 0; i < createWalls.length; i++) {
      let random = Math.floor(Math.random() * 4);

      console.log(random)

      if (random === 0 || random === 1 || random === 2) {
        createWalls[i].style.backgroundColor = "white"
      } else if (random === 3) {
        createWalls[i].style.backgroundColor = "black";
      } else {
        return "something went wrong";
      }
  }

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
  
}