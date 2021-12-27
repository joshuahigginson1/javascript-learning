import getElement from "./getElement.js";

const myImg = getElement('.user-img');
const myButton = getElement('.btn');
const myTitle = getElement('.user-title');
const myValue = getElement('.user-value');

const allButtons = [...document.querySelectorAll('.icon')];

const displayUser = (personObject) => {

    // Get the image property for a person.
    myImg.src = personObject.personImg;

    // Get the name of the person and add it to HTML doc.
    myTitle.textContent = `My name is:`
    myValue.textContent = personObject.personName;
    allButtons.forEach((button) => button.classList.remove('active'));
    allButtons[0].classList.add('active');

    // Iterate over our buttons and configure an event listener.
    allButtons.forEach((button) => {
        const buttonLabel = button.dataset.label;

        // Do some cleaning up to get our title dynamically.
        const titleContents = buttonLabel.replace("person", "").toLowerCase();
        button.addEventListener('click', () => {
            myTitle.textContent = `My ${titleContents} is:`
            myValue.textContent = personObject[buttonLabel];
            allButtons.forEach((button) => button.classList.remove('active'));
            button.classList.add('active');
        });
    })
};

export default displayUser