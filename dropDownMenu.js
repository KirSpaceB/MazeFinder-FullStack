class dropDown {
    constructor() {
        const dropDownMenuWrapper = document.createElement('div');
        dropDownMenuWrapper.innerHTML = 'wrapper';

        const dropDownMenu = document.createElement('div');
        dropDownMenu.innerHTML = 'dropdownmenu';

        const dropDownButton = document.createElement('button');
        dropDownButton.innerHTML = 'dropdownButton'

        dropDownMenu.appendChild(dropDownButton);
        dropDownMenuWrapper.appendChild(dropDownButton);
        document.body.appendChild(dropDownMenuWrapper);
        

    }
}
const newDropDown = new dropDown();
