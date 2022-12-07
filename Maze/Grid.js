import { GridSquare } from "./GridSquare.js";

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
    const DIV_WRAPPER = document.createElement('div');
    DIV_WRAPPER.setAttribute('id', 'DIV_WRAPPER');
    document.body.appendChild(DIV_WRAPPER);    
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


    // the wrapper for the maze^
    const divWrapperForMaze = document.getElementById('DIV_WRAPPER');
    this.divWrapperForMaze = divWrapperForMaze;

    // contains GridSquareAbstraction maze data
    this.mazeArray = [];

    for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze[i].length; j++) {

        const WALL_SQUARE = new GridSquare('div', 'wallSquare', 'black');
        const NOTHING_SQUARE = new GridSquare('div','nothingSquare', 'black');
        const START_SQUARE = new GridSquare('div', 'startSquare', 'black');
        const GOAL_SQUARE = new GridSquare('div', 'goalSquare', 'black');
        const PATH_SQUARE = new GridSquare('div', 'pathSquare', 'black');
        // changes background color depending on the argument passed
        WALL_SQUARE.setType('wall');
        NOTHING_SQUARE.setType('nothing');
        START_SQUARE.setType('start');
        GOAL_SQUARE.setType('goal');
        PATH_SQUARE.setType('path');
        
        if (maze[i][j] === "w") {
          this.divWrapperForMaze.appendChild(WALL_SQUARE.gridSquareElement);
        } else if (maze[i][j] === "p") {
          this.divWrapperForMaze.appendChild(PATH_SQUARE.gridSquareElement);
        } else if (maze[i][j] === "g") {
          this.divWrapperForMaze.appendChild(GOAL_SQUARE.gridSquareElement)
        } else if (maze[i][j] === "s") {
          this.divWrapperForMaze.appendChild(START_SQUARE.gridSquareElement)
        } else if (maze[i][j] === "n") {
          this.divWrapperForMaze.appendChild(NOTHING_SQUARE.gridSquareElement)
        }
      }
    }
    this.maze = maze
  }
  //pushes all elements from maze to this.mazeArray
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

    this.node_id_s = "nodeIds_";
    this.node_id_p = "nodeIdp_";
    this.node_id_n = "nodeIdn_";
    this.node_id_g = "nodeIdg_";
    this.node_id_w = "nodeIdw_";

    this.node_key_number = 0;

    let adjacency_list = new Map();

    this.adjacency_list = adjacency_list;

    // e = html element object from a different Array
    this.vertices.forEach((e) => {
      if (e === s) {
        
        this.start_node_id = e.setKey(`${this.node_id_s}`);//passes string "nodeIds_" to setKey method 
        this.start_node_key = e.setID(`${this.node_id_s + this.node_key_number}`);// Dynamically change the ID
        this.get_start_node_ID = e.getID(); // pointer set to Dynamically changingID
        this.adjacency_list[this.get_start_node_ID] = e.getKey(); // The Dynamic ID is paired with a key. EX:
        // nodeIdg_15(Dynamic ID) is paried with string "nodeIdg_"
      } else if (e === n) {
        
        this.nothing_node_id = e.setKey(`${this.node_id_n}`);
        this.nothing_node_key = e.setID(`${this.node_id_n + this.node_key_number}`);
        this.get_nothing_node_ID = e.getID();
        this.adjacency_list[this.get_nothing_node_ID] = e.getKey();

      } else if (e === w) {

        this.wall_node_id = e.setKey(`${this.node_id_w}`);
        this.wall_node_key = e.setID(`${this.node_id_w + this.node_key_number}`);
        this.get_wall_node_ID = e.getID();
        this.adjacency_list[this.get_wall_node_ID] = e.getKey();

      } else if (e === p) {

        this.path_node_id = e.setKey(`${this.node_id_p}`);
        this.path_node_key = e.setID(`${this.node_id_p + this.node_key_number}`);
        this.get_path_node_ID = e.getID();
        this.adjacency_list[this.get_path_node_ID] = e.getKey();

      } else if (e === g) {

        this.goal_node_id = e.setKey(`${this.node_id_g}`);
        this.goal_node_key = e.setID(`${this.node_id_g + this.node_key_number}`);
        this.get_goal_node_ID = e.getID();
        this.adjacency_list[this.get_goal_node_ID] = e.getKey();
        
      } else {
        console.log("unread elements");
      }
      console.log(e.getKey())
      this.node_key_number++
    });
    console.log(this.adjacency_list)

  }
}