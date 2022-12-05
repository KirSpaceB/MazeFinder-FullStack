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