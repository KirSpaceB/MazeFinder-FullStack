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
      ["n","w","n","n","n","n","n","w","n","w","n","w","n","w","w","n"],
      ["s","n","n","w","n","n","n","w","n","n","n","w","n","n","n","n"],
    ]

    this.maze = maze;

    // the wrapper for the maze^
    let divWrapperForMaze = document.getElementById('divWrapper');
    this.divWrapperForMaze = divWrapperForMaze;

    // contains GridSquareAbstraction maze data
    this.mazeArray = [
      []
    ];


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
    // Holds the GridAbstraction MetaData Cuhz
    console.log(this.mazeArray)
  }

  Graph() {
    console.log(this.mazeArray);
    // nodes for the graph
    this.vertices = this.mazeArray
    // all possible edges in our array
    let edges = [
      [this.s,this.n],
      [this.s,this.w],
      [this.s,this.g],
      [this.w,this.n],
      [this.p,this.n],
      
    ]
    this.edges = edges;
    // takes in a GridSquareAbstraction Object as its argument.
    // returns an array of adjacent nodes
    const findAdjacentNodes = function(node) {
      let adjacentNodes = [];
      let adjacentNode = 0;
      for (let edge of edges) {
        let nodeIdx = edge.indexOf(node);
        if (nodeIdx > -1) {
          adjacentNode = nodeIdx === 0 ? edge[1] : edge[0];
          adjacentNodes.push(adjacentNode);
        }
      }
      console.log(adjacentNodes);
      
      return adjacentNodes;
    }
    this.adjacentNodes = adjacentNodes;
    this.adjacentNode = adjacentNode;
  }
  //argument is a starting node
  BFS(start) {
    console
    const queue = [start];// starting Node

    while (queue.length > 0) {
      let airport = queue.shift(); 
      let edges = this.adjacentNodes;
    }
  }
}