import { NavBar } from "./NavBar.js";
import { Grid } from "./Grid.js";
import { MazeDivWrapper } from "./MazeDivWrapper.js";
import { ActivateAlgo } from "./ActivateAlgo.js";
import { Slider } from "./Slider.js";
import { AddWallUI } from "./AddWallUI.js";
import { GravityButtonLogic } from "./GravityButtonLogic.js";
export class MainSingleton {
  constructor() {
    if (!MainSingleton.instance) {
      MainSingleton.instance = this;
      this.NavBar = new NavBar();
      this.MazeDivWrapper = new MazeDivWrapper();
      this.Slider = new Slider();
      this.Grid = new Grid();
      // Why is it when this.ActiveAlgo is present we cant use the object AddWall();
      this.AddWallUI = new AddWallUI();
      this.ActivateAlgo = new ActivateAlgo();
      this.GravityButtonLogic = new GravityButtonLogic();
    }
    return MainSingleton.instance;
  }
}
const Main = new MainSingleton();