export class GravityNav {
  constructor() {
    let gravityButton = document.createElement('button');
    gravityButton.setAttribute('id', 'gravityButton');
    gravityButton.innerHTML = 'Gravity Button'
    this.gravityButton = gravityButton;

    this.gravityMode();
    
    return gravityButton;
  }

  gravityMode() {
    this.gravityButton.addEventListener('click', () => {
      console.log('you are in gravity mode');
    })
  }
}