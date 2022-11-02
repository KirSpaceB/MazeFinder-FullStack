import { gravityNav } from "./gravityButton.js";
import { loadMazeNav } from "./loadButton.js";
import { saveButton } from "./saveButton.js";
import { undoButtonNav } from "./undoButton.js";
import {createGrid} from "./createGridButton.js";
import { sortMazeButton1 } from "./sortMazeButton.js";
import { solveMazeButton } from "./solveMazeButton.js";

export class navbar {
  constructor(saveButtonReal,loadButton,undoButton,creategridInput,gravityButton,solveButton,sortButton) {
    let newSaveButton = new saveButton();
    saveButtonReal = newSaveButton;
    this.saveButtonReal = saveButtonReal;

    let newLoadButton = new loadMazeNav();
    loadButton = newLoadButton;
    this.loadButton = loadButton;

    let newgravityButton = new gravityNav();
    gravityButton = newgravityButton;
    this.gravityButton = gravityButton;

    let newUndoButton = new undoButtonNav();
    undoButton = newUndoButton;
    this.undoButton = newUndoButton;

    let newCreatGridInput = new createGrid();
    creategridInput = newCreatGridInput;
    this.creategridInput = creategridInput;
    
    let newSortMazeButton = new sortMazeButton1();
    sortButton = newSortMazeButton;
    this.sortButton = sortButton;

    let newSolveMazeButton = new solveMazeButton();
    solveButton = newSolveMazeButton;
    this.solveButton = solveButton;
  }

  creatingNavBar() {
    const navBarDiv = document.createElement('div')
    navBarDiv.className = 'navbar';
    navBarDiv.setAttribute('id','navbar');
    document.body.appendChild(navBarDiv);

    navBarDiv.appendChild(this.saveButtonReal);
    navBarDiv.appendChild(this.loadButton);
    navBarDiv.appendChild(this.undoButton);
    navBarDiv.appendChild(this.creategridInput);
    navBarDiv.appendChild(this.gravityButton);
    navBarDiv.appendChild(this.sortButton);
    navBarDiv.appendChild(this.solveButton);
  }
}