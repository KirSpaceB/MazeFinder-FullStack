import { DFS } from "./DFS.js"
import { BFS } from "./BFS.js";
import { AStar } from "./Astar.js";
export class ActivateAlgo {
  constructor() {
    this.dfs();

  }

  dfs() {
    let dfsFile = new DFS();
  }
  
  bfs() {
    let bfsFile = new BFS()
  }

  astar() {
    let aStarFile = new AStar()
  }
}