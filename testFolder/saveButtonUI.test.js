/**
 * @jest-environment jsdom
 */
class SaveButton {
  constructor() {
    let saveButton = document.createElement('button');
    saveButton.innerHTML = "save button"
    this.buttonElement = saveButton// object with all the properties. this.buttonElement is set to a pointer saveButton therefore we can
    // move it to different classes
  }//abstract html,abstract button, html element part of the class
}

describe('Save Button UI', () => {
  it('Creates save button on DOM', () => {
    const saveButtonTest = new SaveButton(); // button element
    // how to test for the Method class i'm going to invoke?

    let elementTest = saveButtonTest.buttonElement.nodename.toLowerCase(); // node name for save Button. answers line 15

  expect(elementTest).toEqual("button");
  })
})
