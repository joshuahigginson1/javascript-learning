const getElement = (selection) => {
    let element = document.querySelector(selection);
    if (element) return element;
    throw new Error('No element of this name exists!');
};

export default getElement