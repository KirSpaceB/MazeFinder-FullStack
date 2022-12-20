import { SolveButton } from "./SolveButton.js";
import { GravityButton } from "./GravityButton.js";
import { SortButton } from "./SortButton.js";
import { ResetButton } from "./ResetButton.js";
export class NavBar {
  constructor() {
    const CREATE_NAV_ELEMENT = document.createElement('div');
    CREATE_NAV_ELEMENT.className = 'navbar';
    CREATE_NAV_ELEMENT.setAttribute('id', 'navbar');
    document.body.appendChild(CREATE_NAV_ELEMENT);

    const SOLVE_BUTTON = new SolveButton();
    const GRAVITY_BUTTON = new GravityButton();
    const SORT_BUTTON = new SortButton();
    const RESET_BUTTON = new ResetButton();

    const SOLVE_BUTTON_SELECTOR = document.querySelector('.dropdown');
    const gravityButton = document.querySelector('#gravityButton');
    const SORT_BUTTON_SELECTOR = document.querySelector('.dropdown1');
    const RESET_BUTTON_SELECTOR = document.querySelector('#resetButton');
    
    console.log(SOLVE_BUTTON_SELECTOR)
    console.log(gravityButton)

    CREATE_NAV_ELEMENT.appendChild(SOLVE_BUTTON_SELECTOR);
    CREATE_NAV_ELEMENT.appendChild(gravityButton);
    CREATE_NAV_ELEMENT.appendChild(SORT_BUTTON_SELECTOR);
    CREATE_NAV_ELEMENT.appendChild(RESET_BUTTON_SELECTOR);

  }
}