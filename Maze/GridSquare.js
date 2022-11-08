import { GridSquareAbstraction } from "./GridSquareAbstraction.js";

export class GridSquare extends GridSquareAbstraction {
  constructor() {
    super();
    
    let nothing = new GridSquareAbstraction('div', 'nothingDiv', 'black', '100px', '100px');
    let wall = new GridSquareAbstraction('div', 'wallDiv', 'blue', '100px', '100px');
    let path = new GridSquareAbstraction('div','pathDiv', 'purple', '100px','100px');
    let start = new GridSquareAbstraction('div','startDiv', 'red', '100px', '100px');
    let goal = new GridSquareAbstraction('div', 'goalDiv', 'orange', '100px', '100px');

    const n = nothing;
    const w = wall;
    const p = path;
    const s = start;
    const g = goal;
    
    this.n = n;
    this.w = w;
    this.p = p;
    this.s = s;
    this.g = g;
  }
}