export class Slider {
  constructor() {
    this.sliderUI()
  }
  sliderUI() {
    // Create the slider and UI element
    const slider = document.createElement('input');
    slider.type = "range";
    slider.min = "4";
    slider.max = "36";
    slider.id = "slider";
    const p = document.createElement('p');
    const inputValue = document.createElement('span');
    inputValue.textContent = slider.value;
  
    // Update the UI element and call createMaze when the slider value changes
    slider.addEventListener('input', () => {
      inputValue.textContent = slider.value;
    });
  
    p.appendChild(inputValue);
    document.body.appendChild(p);
    document.body.appendChild(slider);
  }
}