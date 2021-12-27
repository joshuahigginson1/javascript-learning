// Get Element.

function getElement(domSelection) {
    const element = document.querySelector(domSelection);

    // If selection is incorrect, throw an error.
    if (element) {
        return element;
    } else {
        throw Error('You did not select a valid element!');
    }
}

export default getElement