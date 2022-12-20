import { NavBar } from "./NavBar.js";
import { SetGoal } from "./SetGoal.js";
import { MazeDivWrapper } from "./MazeDivWrapper.js";
export class MainSingleton {
  constructor() {
    if (!MainSingleton.instance) {
      MainSingleton.instance = this;
      this.NavBar = new NavBar();
      this.MazeDivWrapper = new MazeDivWrapper(); // generates grid for us
      this.SetGoal = new SetGoal();
    }
    return MainSingleton.instance;
  }
}
const Main = new MainSingleton();