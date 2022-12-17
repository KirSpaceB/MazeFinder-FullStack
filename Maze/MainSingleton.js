import { NavBar } from "./NavBar.js";
import { ButtonUI } from "./ButtonUI.js";

class MainSingleton {
  constructor() {
    if (!MainSingleton.instance) {
      MainSingleton.instance = this;
      this.NavBarr = new NavBar();
    }
    return MainSingleton.instance;
  }
}
const Main = new MainSingleton();