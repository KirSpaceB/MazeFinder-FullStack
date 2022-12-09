import { Grid } from "./Grid.js";
import { NavBar } from "./NavBar.js";
import { DfsAlgo } from "./DFSAlgo.js";
import { MazeDivWrapper } from "./MazeDivWrapper.js";

const navbar1 = new NavBar();
navbar1.navBarDiv();

const mazeWrapper = new MazeDivWrapper();

const grid = new Grid();

const newDFS = new DfsAlgo();