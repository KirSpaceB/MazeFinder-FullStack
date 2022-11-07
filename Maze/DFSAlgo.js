export class DFSAlgo {
  constructor(conditionsForAlgo) {
    this.conditionsForAlgo = conditionsForAlgo;
  }

  conditionsForAlgo(name) {
    // changebackgroundColor when creating the path;
    // use querySelectorAll(classes);
    // if walls have style.backgroundColor=black;
    console.log("hello" + name)
    let selectingGrid = document.querySelectorAll('.mazeGrid');
    console.log(selectingGrid)
    
  }
}