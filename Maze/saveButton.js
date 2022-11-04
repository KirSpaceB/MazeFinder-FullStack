export class saveButton{
  constructor() {
    let saveMazeNav = document.createElement('button');
    saveMazeNav.setAttribute('id', 'saveButton');
    saveMazeNav.innerHTML = 'saveButton';
    this.saveMazeNav = saveMazeNav;

    this.TestMethod();
    
    return saveMazeNav;
  }

  TestMethod() {
    this.saveMazeNav.addEventListener('click', () => {
      console.log('working')
    })
  }

 
}
