describe('Load Button UI', () => {
  it.skip('Creates load button on DOM', () => {
    const loadButton = new loadButton(); // button element
    

    let elementTest = loadButton.nodeName.toLowerCase(); // node name for save Button

  expect(elementTest).toEqual("button");
  })
})
