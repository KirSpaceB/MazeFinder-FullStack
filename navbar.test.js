describe('Nav Bar UI', () => {
  it.skip('Creates Nav Bar on DOM', () => {

    const navBar = new navbar(); 
    
    // maybe create an object containing all params
    let elementTest = navBar.nodeName.toLowerCase(); 

  expect(elementTest).toEqual("button"); // nodeName gets value of element. gravityButton creates a new instance of a class which has the element
  })
})