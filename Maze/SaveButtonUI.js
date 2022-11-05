export class SaveButton{ //PascalCase Test
  constructor() {
    let saveMazeNav = document.createElement('button');
    saveMazeNav.setAttribute('id', 'saveButton');
    saveMazeNav.innerHTML = 'saveButton';
    this.saveMazeNav = saveMazeNav;

    this.testMethod();
    return saveMazeNav;
  }

  testMethod() {//camelCase functions
    this.saveMazeNav.addEventListener('click', () => {
      console.log('working')
    })
  }

 
}
