describe('Gravity Button UI', () => {
  it.skip('Creates gravity button on DOM', () => {

    const gravityButtonTest = new gravityButton(); 
    

    let elementTest = gravityButtonTest.nodeName.toLowerCase(); 

  expect(elementTest).toEqual("button"); // nodeName gets value of element. gravityButton creates a new instance of a class which has the element
  })
})
