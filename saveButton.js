class saveButton {
    constructor() {
        const saveButton = document.createElement('div');
        saveButton.classList.add('saveButton');
        const textInSaveButton = document.createTextNode('Test');
        saveButton.appendChild(textInSaveButton);
        document.body.appendChild(saveButton);
    }
}

const realSaveButton = new saveButton();
realSaveButton();