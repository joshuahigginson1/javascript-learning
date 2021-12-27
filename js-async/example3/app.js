// Promises DOM example.

const myButton = document.querySelector(".btn");

const firstHeading = document.querySelector(".first");
const secondHeading = document.querySelector(".second");
const thirdHeading = document.querySelector(".third");
const notAnElement = null;

myButton.addEventListener('click', () => {
    console.log('You clicked the button!'); // This is actually asynchronous and handed off to the browser!
    addColour(1000, firstHeading, 'red')
        .then(() => addColour(1000, secondHeading, 'orange'))
        .then(() => addColour(1000, thirdHeading, 'yellow'))
        .then(() => addColour(1000, notAnElement, 'red'))
        .catch((err) => console.log(err));
        // If one of these elements fails, then we aren't physically catching the error with multiple promises in a row, and it will kill the chain.
});


function addColour(time, element, colour) {
    return new Promise((resolve, reject) => {
        if (element) {  // If element exists, then apply colour in certain amount of time.
            setTimeout(() => {
                element.classList.toggle(colour);
                resolve() // We don't actually need to provide data, but we can only chain .then if we do resolve.
            }, time);
        } else {  // Else, throw an error.
            reject(new Error(`There is no such element: $${element}`))
        }; 
    });
}