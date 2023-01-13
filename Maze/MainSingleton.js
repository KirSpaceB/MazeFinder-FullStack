import { NavBar } from "./NavBar.js";
import { Grid } from "./Grid.js";
import { MazeDivWrapper } from "./MazeDivWrapper.js";
import { ActivateAlgo } from "./ActivateAlgo.js";
import { Slider } from "./Slider.js";
import { AddWallUI } from "./AddWallUI.js";
import { GravityButtonLogic } from "./GravityButtonLogic.js";
import { InsertionSortLogic } from "./InsertionSortLogic.js";
import { SelectionSort } from "./SelectionSortLogic.js";
import { BubbleSort } from "./BubbleSortLogic.js";
import { MergeSort } from "./MergeSortLogic.js";
import { QuickSort } from "./QuickSortLogic.js";
import { RadixSort } from "./RadixSortLogic.js";
import { StartGoalLogic } from "./StartGoalLogic.js";
import { AddWallLogic } from "./AddWallLogic.js";
import { DFS } from "./DFS.js";
import { BFS } from "./BFS.js";
import { Dijkstras } from "./Dijkstras.js";
import { AStar } from "./Astar.js";
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
      this.StartGoalLogic = new StartGoalLogic();
      this.AddWallLogic = new AddWallLogic();
      this.DFS = new DFS();
      this.BFS = new BFS();
      this.Dijkstras = new Dijkstras();
      this.Astar = new AStar();
      this.GravityButtonLogic = new GravityButtonLogic();
      this.RadixSort = new RadixSort();
    }
    return MainSingleton.instance;
  }
}
const Main = new MainSingleton();