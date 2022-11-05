
export class CreateGrid {
  constructor() {
    let createGridInput = document.createElement('input')
    createGridInput.setAttribute('id', 'inputGrid');
    createGridInput.value = '16';
    createGridInput.type = 'range';
    createGridInput.min = '1';
    createGridInput.max = '64';
    this.slider = document.getElementById('inputGrid')
    this.changeSlider()

    return createGridInput;
  }

  changeSlider() {
    this.slider = document.getElementById('inputGrid');
    console.log(this.slider); //idk why this is null
  }


  
}