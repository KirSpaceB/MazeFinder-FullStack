
export class DfsAlgo {
  constructor(maze) {
    this.maze = maze;
    this.graph()
  }

  graph() {
    let maze = this.maze;
    console.log(maze)

    for (let r = 0; r < maze.length; r++) {
      for (let c = 0; c < maze[r].length; c++){
        console.log(c.length)
      }
    }
  }





}