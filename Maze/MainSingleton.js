import { NavBar } from "./NavBar.js";
import { Grid } from "./Grid.js";
import { MazeDivWrapper } from "./MazeDivWrapper.js";
import { ActivateAlgo } from "./ActivateAlgo.js";
import { Slider } from "./Slider.js";
import { AddWall } from "./AddWall.js";
export class MainSingleton {
  constructor() {
    if (!MainSingleton.instance) {
      MainSingleton.instance = this;
      this.NavBar = new NavBar();
      this.MazeDivWrapper = new MazeDivWrapper();
      this.Slider = new Slider();
      this.Grid = new Grid();
      // Why is it when this.ActiveAlgo is present we cant use the object AddWall();
      this.AddWall = new AddWall();
      this.ActivateAlgo = new ActivateAlgo();
    }
    return MainSingleton.instance;
  }
}
const Main = new MainSingleton();