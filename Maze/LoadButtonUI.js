export class LoadMazeNav {
  constructor() {
    let loadButton = document.createElement('button');
    loadButton.setAttribute('id', 'loadButton');
    loadButton.innerHTML = 'loadButton';
    this.loadButton = loadButton;
    
    this.Load();// always has to be at the end of the constructor

    return loadButton;
  }

  Load() {
    this.loadButton.addEventListener('click', () => {
      console.log('clicking on loadbutton');
    })
  }
}