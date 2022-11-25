import { GridSquareAbstraction } from "./GridSquareAbstraction.js";

export class Grid {
  constructor() {
  this.gridWrapper();
  this.setMaze(); 
  this.createElementArray();
  this.Graph();
  console.log("Why the hell is this my index", this.maze.indexOf("w"));
  }
  

  // childAppendedToWrapper is a GridSquareAbstraction object
  // This function returns nothing
  gridWrapper() {
    this.divWrapper = document.createElement('div');
    this.divWrapper.setAttribute('id', 'divWrapper');
    document.body.appendChild(this.divWrapper);    
  }

  //takes in zero arguments; 
  //returns nothing;
  //void function
  setMaze() {
    let maze = [
      ["n","w","n","n","n","w","n","n","n","w","n","n","n","n","n","g"],
      ["n","w","n","w","n","w","n","n","n","w","n","n","n","w","n","n"],
      ["n","w","n","w","n","n","n","w","n","n","n","w","n","w","n","n"],
      ["n","n","n","w","n","w","n","w","n","w","n","w","n","w","n","n"],
      ["n","w","n","n","n","w","n","w","n","n","n","w","w","w","n","w"],
      ["n","w","n","w","n","n","n","w","n","w","n","n","n","n","n","n"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","n","w","n"],
      ["n","w","n","w","n","w","n","w","n","w","n","n","n","w","n","n"],
      ["n","w","n","w","n","w","n","n","n","w","n","n","n","n","n","w"],
      ["n","w","n","w","n","w","n","w","n","w","n","w","n","w","n","n"],
      ["n","w","n","w","n","w","n","w","n","n","n","w","n","w","n","n"],
      ["n","n","n","n","n","w","n","w","n","w","n","n","n","w","n","n"],
      ["n","n","n","w","n","n","n","w","n","w","n","w","n","w","n","w"],
      ["n","n","n","w","n","n","n","n","n","w","n","w","n","w","n","n"],
      ["n","n","n","n","n","n","n","w","n","w","n","w","n","w","w","n"],
      ["s","n","n","w","n","n","n","w","n","n","n","w","n","n","n","n"],
    ]

    this.maze = maze;

    // the wrapper for the maze^
    let divWrapperForMaze = document.getElementById('divWrapper');
    this.divWrapperForMaze = divWrapperForMaze;

    // contains GridSquareAbstraction maze data
    this.mazeArray = [];


    for (let i = 0; i < this.maze.length; i++) {
      for (let j = 0; j < this.maze[i].length; j++) {

        const wallSquare = new GridSquareAbstraction('div', 'wallSquare', 'black');
        const nothingSquare = new GridSquareAbstraction('div','nothingSquare', 'black');
        const startSquare = new GridSquareAbstraction('div', 'startSquare', 'black');
        const goalSquare = new GridSquareAbstraction('div', 'goalSquare', 'black');
        const pathSquare = new GridSquareAbstraction('div', 'pathSquare', 'black');

        

        this.w = wallSquare;
        this.w.setType('wall');
        this.n = nothingSquare;
        this.n.setType('nothing');
        this.s = startSquare;
        this.s.setType('start');
        this.g = goalSquare;
        this.g.setType('goal');
        this.p = pathSquare;
        this.p.setType('path');


        if (this.maze[i][j] === "w") {
          this.divWrapperForMaze.appendChild(this.w.createElement);
        } else if (this.maze[i][j] === "p") {
          this.divWrapperForMaze.appendChild(this.p.createElement);
        } else if (this.maze[i][j] === "g") {
          this.divWrapperForMaze.appendChild(this.g.createElement)
        } else if (this.maze[i][j] === "s") {
          this.divWrapperForMaze.appendChild(this.s.createElement)
        } else if (this.maze[i][j] === "n") {
          this.divWrapperForMaze.appendChild(this.n.createElement)
        }
      }
    }
  }

  createElementArray() {
    for (let i = 0; i < this.maze.length; i++) {
      for (let j = 0; j < this.maze[i].length; j++) {
        if (this.maze[i][j] === "w") {
          this.mazeArray.push(this.w);
        } else if (this.maze[i][j] === "p") {
          this.mazeArray.push(this.p);
        } else if (this.maze[i][j] === "g") {
          this.mazeArray.push(this.g);
        } else if (this.maze[i][j] === "s") {
          this.mazeArray.push(this.s);
        } else if (this.maze[i][j] === "n") {
          this.mazeArray.push(this.n);
        }
      }
    }
  }

  Graph() {
    // nodes for the graph
    this.vertices = this.mazeArray;

    const s = this.s;
    const n = this.n;
    const p = this.p;
    const w = this.w;
    const g = this.g;

    this.nodeIDS = "nodeIds_";
    this.nodeIDP = "nodeIdp_";
    this.nodeIDN = "nodeIdn_";
    this.nodeIDG = "nodeIdg_";
    this.nodeIDW = "nodeIdw_";
    this.nodeIdCount = 0;

    let adjacencyList = new Map();
    this.adjacencyList = adjacencyList;

    this.vertices.forEach((e) => {
      if (e === s) {
        this.adjacencyList.set(this.nodeIDS + this.nodeIdCount.toString(), [n]);
      } else if (e === n) {
        this.adjacencyList.set(this.nodeIDP + this.nodeIdCount.toString(), [p,s]);
      } else if (e === w) {
        this.adjacencyList.set(this.nodeIDN + this.nodeIdCount.toString(), [n,p]);
      } else if (e === p) {
        this.adjacencyList.set(this.nodeIDG + this.nodeIdCount.toString(), [n,w,g]);
      } else if (e === g) {
        this.adjacencyList.set(this.nodeIDW + this.nodeIdCount.toString(), [p]);
      } else {
        console.log("unread elements");
      }
      this.nodeIdCount++
    });
    console.log(this.adjacencyList);

    let dfsStack = [];

    dfsStack.push(this.adjacencyList);
    console.log(dfsStack);

    console.log(this.maze)

    let dfs = (startingNode) => {
      let startingVerticie = startingNode;
      // if nodes need to be the adjacencyList becuase it is the graph
      // then what will the edges be because the adjacencyList also represents the connections between the graphs
      let nodes = this.adjacencyList
      this.edges = this.adjacencyList;

      if (startingVerticie != g) {

      }
    }

  }
}