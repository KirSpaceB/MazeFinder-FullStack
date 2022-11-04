import { GravityNav } from "./GravityButtonUI.js";
import { LoadMazeNav } from "./LoadButtonUI.js";
import { SaveButton } from "./SaveButtonUI.js";
import { UndoButton } from "./UndoButtonUI.js";
import {CreateGrid} from "./CreateGridButtonUI.js";
import { SortMazeButton } from "./SortMazeButtonUI.js";
import { SolveMazeButton } from "./SolveMazeButtonUI.js";

export class navbar {
  constructor(saveButtonReal,loadButton,undoButton,creategridInput,gravityButton,solveButton,sortButton) {
    let newSaveButton = new SaveButton();
    saveButtonReal = newSaveButton;
    this.saveButtonReal = saveButtonReal;

    let newLoadButton = new LoadMazeNav();
    loadButton = newLoadButton;
    this.loadButton = loadButton;

    let newgravityButton = new GravityNav();
    gravityButton = newgravityButton;
    this.gravityButton = gravityButton;

    let newUndoButton = new UndoButton();
    undoButton = newUndoButton;
    this.undoButton = newUndoButton;

    let newCreatGridInput = new CreateGrid();
    creategridInput = newCreatGridInput;
    this.creategridInput = creategridInput;
    
    let newSortMazeButton = new SortMazeButton();
    sortButton = newSortMazeButton;
    this.sortButton = sortButton;

    let newSolveMazeButton = new SolveMazeButton();
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