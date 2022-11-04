describe('SortMaze Button UI', () => {
  it.skip('Creates SortMaze button on DOM', () => {

    const sortMazeTest = new sortMaze(); 
    

    let elementTest = sortMazeTest.nodeName.toLowerCase(); 

  expect(elementTest).toEqual("button"); // nodeName gets value of element. gravityButton creates a new instance of a class which has the element
  })
})