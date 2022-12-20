import { SolveButton } from "./SolveButton.js";
export class NavBar {
  constructor() {
    
    const CREATE_NAV_ELEMENT = document.createElement('div');
    CREATE_NAV_ELEMENT.className = 'navbar';
    CREATE_NAV_ELEMENT.setAttribute('id', 'navbar');
    document.body.appendChild(CREATE_NAV_ELEMENT);

    const SOLVE_BUTTON = new SolveButton();
    SOLVE_BUTTON.uiStructure()

    CREATE_NAV_ELEMENT.appendChild(SOLVE_BUTTON.ELEMENT)
  }
}