import { NavBar } from "./NavBar.js";
import { MazeDivWrapper } from "./MazeDivWrapper.js";
import { Grid } from "./Grid.js";
export class MainSingleton {
  constructor() {
    if (!MainSingleton.instance) {
      MainSingleton.instance = this;
      this.NavBar = new NavBar();
      this.MazeDivWrapper = new MazeDivWrapper(); // generates grid for us
      this.Grid = new Grid();
    }
    return MainSingleton.instance;
  }
}
const Main = new MainSingleton();