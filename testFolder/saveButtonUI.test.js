/**
 * @jest-environment jsdom
 */
class saveButton {
  constructor() {
    let saveButton = document.createElement('button');
    saveButton.innerHTML = "save button"
    return saveButton;
  }
}

describe('Save Button UI', () => {
  it('Creates save button on DOM', () => {
    const saveButtonTest = new saveButton(); // button element
    

    let elementTest = saveButtonTest.nodeName.toLowerCase(); // node name for save Button

  expect(elementTest).toEqual("button");
  })
})
