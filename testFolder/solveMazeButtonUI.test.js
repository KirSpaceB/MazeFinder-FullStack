describe('SolveMaze Button UI', () => {
  it.skip('Creates SolveMaze button on DOM', () => {

    const solveMazeTest = new solveMaze(); 
    

    let elementTest = solveMazeTest.nodeName.toLowerCase(); 

  expect(elementTest).toEqual("button"); // nodeName gets value of element. gravityButton creates a new instance of a class which has the element
  })
})